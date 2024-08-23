import { createContext, useState } from "react";

export const MyContext = createContext(null);

export const MyProvider = ({children}) => {
    const [count, setCount] = useState(0);
    return (
        <MyContext.Provider value={{count, setCount}}>
            {children}
        </MyContext.Provider>
    )
}  