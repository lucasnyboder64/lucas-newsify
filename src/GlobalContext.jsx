import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GloalProvider = ({ children }) => {
    const [active, setActive] = useState(false)

    return (
        <GlobalContext.Provider value={{ active, setActive }}>
            {children}
        </GlobalContext.Provider>
    )
};