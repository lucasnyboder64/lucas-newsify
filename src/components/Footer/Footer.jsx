import { Link, useLocation } from "react-router"
import "./Footer.scss"

export default function Footer() {
    const location = useLocation()

    return (
        <footer>
            <section className="icons">
                <div className="home">
                    <Link to="/"><img src={location.pathname === "/" ? "/src/assets/home-green.svg" : "/src/assets/home-black.svg"}></img></Link>
                    <p className="page_text" style={{ color: location.pathname === "/" ? "green" : "black" }}>
                        Home
                    </p>
                </div>

                <div className="archive">
                    <Link to="/archive"><img src={location.pathname === "/archive" ? "/src/assets/archive-green.svg" : "/src/assets/archive.svg"}></img></Link>
                    <p className="page_text" style={{ color: location.pathname === "/archive" ? "green" : "black" }}>Archive</p>
                </div>

                <div className="popular">
                    <Link to="/popular"><img src={location.pathname === "/popular" ? "/src/assets/star-green.svg" : "/src/assets/popular.svg"}></img></Link>
                    <p className="page_text" style={{ color: location.pathname === "/popular" ? "green" : "black" }}>Popular</p>
                </div>

                <div className="settings">
                    <Link to="/settings"><img src={location.pathname === "/settings" ? "/src/assets/settings-green.svg" : "/src/assets/settings.svg"}></img></Link>
                    <p className="page_text" style={{ color: location.pathname === "/settings" ? "green" : "black" }}>Settings</p>
                </div>

            </section>
        </footer>
    )
}