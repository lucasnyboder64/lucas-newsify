import Topic from "../Topic/Topic";
import { useState } from "react";

export default function Category({ category, data }) {

    const [isActive, setIsActive] = useState(false);

    function handleTouch() {
        setIsActive(!isActive);
    }

    return (
        <div className="topic">

            <div className="logo_title_arrow">

                <img
                    src="/src/assets/headerIcon.svg"
                    className="logo"
                    onClick={handleTouch}
                />

                <h2 className="title">{category}</h2>

                <img
                    src={
                        isActive
                            ? "/src/assets/arrow-down.png"
                            : "/src/assets/arrow-right.png"
                    }
                    className="arrow"
                    onClick={handleTouch}
                />

            </div>

            {isActive && data?.results?.map((element, index) => (
                <Topic
                    key={element.url || index}
                    title={element.section}
                    headline={element.title}
                    src={element.multimedia?.[0]?.url}
                    link={element.url}
                    isActive={isActive}
                    article={element}
                />
            ))}

        </div>
    );
}