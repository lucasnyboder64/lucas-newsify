import "./Header.scss"

export default function Header() {
    return (
        <>
            <header>
                <div className="title">
                    <img src="/src/assets/headerIcon.svg" className="headerLogo"></img>
                    <h1>Newsify</h1>
                </div>
            </header>
        </>
    )
}