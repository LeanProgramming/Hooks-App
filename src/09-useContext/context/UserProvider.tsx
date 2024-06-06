import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 1,
//     username: 'Lea Muñoz',
//     email: 'munozleandro@gmail.com'
// }

export const UserProvider = ({ children }: any) => {

    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user }}>
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
