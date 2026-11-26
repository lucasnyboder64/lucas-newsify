
import { useRef, useState } from "react"
import "./Topic.scss"
import { useLocation } from "react-router"

export default function Topic({ title, headline, src, link, isActive, article }) {

    const content = useRef()
    const thumbnail = useRef()
    const location = useLocation()

    const startX = useRef(0)
    const [swiped, setSwiped] = useState(false)
    const isHome = location.pathname === "/";

    function addToArchive() {
        const savedArticles = JSON.parse(localStorage.getItem("article")) || [];
        console.log(savedArticles);

        if (savedArticles.length > 0) {

            // let findes = false
            const updatetArtice = savedArticles.filter((savedArticle) => { savedArticle.title != article.title })
            console.log("updatetArtice", updatetArtice);

            // savedArticles.forEach((savedArticle) => {
            //     // console.log(savedArticle.title);
            //     // console.log(article.title);
            //     if (savedArticle.title != article.title) {

            //         savedArticles.push(article);
            //         console.log(savedArticles);

            //         localStorage.setItem("article", JSON.stringify(savedArticles));

            //     }
            //     // console.log(savedArticle.title != article.title);
            //     // if (savedArticle.title == article.title) {
            //     //     findes = true
            //     // }
            //     // if (findes) {
            //     //     localStorage.setItem("article", JSON.stringify(savedArticles));
            //     //     findes = false
            //     // }

            // });

            // findes = false
        } else {
            // savedArticles.push(article);
            localStorage.setItem("article", JSON.stringify([...savedArticles, article]));
        }

    }

    function handleTouchStart(event) {
        startX.current = event.touches[0].clientX
    }

    function handleTouchEnd(event) {
        const endX = event.changedTouches[0].clientX
        const diff = startX.current - endX

        if (diff > 40) {
            setSwiped(true)
            if (isHome) {
                addToArchive()
            }
        }
        if (diff < -40) setSwiped(false)
    }

    function handleClick() {
        setSwiped(false)
    }

    return (
        <>
            <div className="topic-row" style={{ display: isActive ? "block" : "none" }}>
                <button
                    type="button"
                    className={`save-button${swiped ? " active" : ""}${!isHome ? " red" : ""}`}
                    onClick={handleClick}
                >
                    <img src={location.pathname === "/" ? '/src/assets/feather_bookmark.svg' : '/src/assets/trash.svg'} alt="" />
                </button>

                <div
                    className={`content${swiped ? " swiped" : ""}`}
                    ref={content}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <img src={src} className="thumbnail" alt="" ref={thumbnail} />

                    <p className="headline">{headline}</p>

                    <a href={link} className="goto">
                        Gå til artikel
                    </a>
                </div>
            </div >
        </>
    )
}
