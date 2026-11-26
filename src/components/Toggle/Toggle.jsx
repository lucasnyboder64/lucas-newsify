import { useContext, useState } from "react"
import "./Toggle.scss"
import { GlobalContext } from "../../GlobalContext"

export default function Toggle({ category }) {
    // const [active, setActive] = useState(false)
    const [active, setActive] = useState(
        localStorage.getItem(category) === "true"
    )

    function toggle(event) {
        setActive(!active)
        localStorage.setItem(category, !active)
    }

    return (
        <div className={`toggle${active ? " active" : ""}`}>
            <div className={`slider${active ? " active" : ""}`} onTouchStart={toggle}></div>
        </div >
    )
}