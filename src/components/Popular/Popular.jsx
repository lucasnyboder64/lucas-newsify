import { useQuery } from "@tanstack/react-query";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useCachedQuery from "../../useCachedQuery";
import Category from "../Category/Category";


export default function Popular() {

    const healthQuery = useCachedQuery("health", "https://api.nytimes.com/svc/mostpopular/v2/viewed/")
    const sportsQuery = useCachedQuery("sports", "https://api.nytimes.com/svc/mostpopular/v2/viewed/")
    const travelQuery = useCachedQuery("travel", "https://api.nytimes.com/svc/mostpopular/v2/viewed/")
    const europeQuery = useCachedQuery("world", "https://api.nytimes.com/svc/mostpopular/v2/viewed/")
    const businessQuery = useCachedQuery("business", "https://api.nytimes.com/svc/mostpopular/v2/viewed/")

    const showSport = localStorage.getItem("sport") || true;
    const showHealth = localStorage.getItem("health") || true;
    const showTravel = localStorage.getItem("travel") || true;
    const showEurope = localStorage.getItem("europe") || true;
    const showBusiness = localStorage.getItem("business") || true;

    const healthData = showHealth === "true" ? healthQuery.data : null
    const sportsData = showSport === "true" ? sportsQuery.data : null
    const travelData = showTravel === "true" ? travelQuery.data : null
    const businessData = showBusiness === "true" ? businessQuery.data : null
    const europeData = showEurope === "true" ? europeQuery.data : null

    return (
        <>
            <Header />
            <main>
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
