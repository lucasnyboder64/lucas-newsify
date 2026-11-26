import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Toggle from "../Toggle/Toggle";
import "./Settings.scss"

export default function Settings() {
    return (
        <>
            <Header />
            <div className="top_text">
                <h1>Settings</h1>
                <h2>Categories</h2>
            </div>

            <main>
                <section className="settings">
                    <div className="setting">
                        <div className="category_name">
                            <img src="/src/assets/headerIcon.svg" className="logo"></img>
                            <h2>EUROPE</h2>
                        </div>
                        <Toggle category="europe" />
                    </div>
                    <div className="setting">
                        <div className="category_name">
                            <img src="/src/assets/headerIcon.svg" className="logo"></img>
                            <h2>HEALTH</h2>
                        </div>
                        <Toggle category="health" />
                    </div>
                    <div className="setting">
                        <div className="category_name">
                            <img src="/src/assets/headerIcon.svg" className="logo"></img>
                            <h2>SPORT</h2>
                        </div>
                        <Toggle category="sport" />
                    </div>
                    <div className="setting">
                        <div className="category_name">
                            <img src="/src/assets/headerIcon.svg" className="logo"></img>
                            <h2>BUSINESS</h2>
                        </div>
                        <Toggle category="business" />
                    </div>
                    <div className="setting" style={{ borderBottom: "1px solid #C5C5C5" }}>
                        <div className="category_name">
                            <img src="/src/assets/headerIcon.svg" className="logo"></img>
                            <h2>TRAVEL</h2>
                        </div>
                        <Toggle category="travel" />
                    </div>
                </section>

                <button className="darkmode-btn">Toggle dark mode</button>
                <p className="version">Version 4.8.15.16.23.42</p>
            </main >

            <Footer />
        </>
    )
}