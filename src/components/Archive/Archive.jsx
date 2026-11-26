import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Archive.scss"

export default function Archive() {
    const articles = JSON.parse(localStorage.getItem("article")) || [];
    const categories = [...new Set(
        articles.map(article => article.section)
    )];

    function removeFromArchive() {

    }

    return (
        <>
            <Header />
            <main>
                <section className="topics">
                    <section className="topics"></section>
                    {categories.map(category => {
                        const filteredArticles = articles.filter(
                            article => article.section === category
                        );

                        return (
                            <Category
                                key={category}
                                category={category}
                                data={{ results: filteredArticles }}
                            />
                        );
                    })}
                </section>

            </main >
            <Footer />
        </>
    )
}