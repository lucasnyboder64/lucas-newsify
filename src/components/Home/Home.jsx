import { useQuery } from "@tanstack/react-query";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Topic from "../Topic/Topic";
import "./Home.scss"
import { useEffect, useRef, useState } from "react";
import Category from "../Category/Category";
import useCachedQuery from "/src/useCachedQuery.jsx"

export default function Home() {

    // function useCachedQuery(category, apiKey, endpoint) {
    //     async function getData() {
    //         const apiKey = "QRwtAymlW0ZzSRjxZTGxf5XdbvCjj2ndQGZ9K2WBkVCw13t3"
    //         const endpoint = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`

    //         const response = await fetch(endpoint)

    //         if (!response.ok) {
    //             throw new Error("fejl")
    //         }

    //         const json = await response.json();

    //         return json
    //     }

    //     const { data, isPending, error } = useQuery({
    //         queryKey: [category],
    //         queryFn: getData,
    //         staleTime: 60 * 60 * 1000
    //     })

    //     return { data, isPending, error }
    // }

    const [isActive, setIsActive] = useState(false)
    const apiKey = import.meta.env.VITE_API_KEY

    const showSport = localStorage.getItem("sport") || true;
    const showHealth = localStorage.getItem("health") || true;
    const showTravel = localStorage.getItem("travel") || true;
    const showEurope = localStorage.getItem("europe") || true;
    const showBusiness = localStorage.getItem("business") || true;

    //  useCachedQuery(category, apiKey, endpoint) {

    const healthQuery = useCachedQuery("health", "https://api.nytimes.com/svc/topstories/v2/")
    const sportsQuery = useCachedQuery("sports", "https://api.nytimes.com/svc/topstories/v2/")
    const travelQuery = useCachedQuery("travel", "https://api.nytimes.com/svc/topstories/v2/")
    const europeQuery = useCachedQuery("world", "https://api.nytimes.com/svc/topstories/v2/")
    const businessQuery = useCachedQuery("business", "https://api.nytimes.com/svc/topstories/v2/")

    const healthData = showHealth === "true" ? healthQuery.data : null
    const sportsData = showSport === "true" ? sportsQuery.data : null
    const travelData = showTravel === "true" ? travelQuery.data : null
    const businessData = showBusiness === "true" ? businessQuery.data : null
    const europeData = showEurope === "true" ? europeQuery.data : null

    function handleTouch(event) {
        setIsActive(!isActive)
    }

    console.log(travelData);


    return (
        <>
            <Header />
            <main>
                <input type="text" placeholder="Search news"></input>
                <section className="topics">
                    <section className="topics">

                        {healthData && <Category
                            category="Health"
                            data={healthData}
                        />}

                        {sportsData && <Category
                            category="Sports"
                            data={sportsData}
                        />}

                        {travelData && <Category
                            category="Travel"
                            data={travelData}
                        />}

                        {businessData && <Category
                            category="Business"
                            data={businessData}
                        />}

                        {europeData && <Category
                            category="Europe"
                            data={europeData}
                        />}

                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}