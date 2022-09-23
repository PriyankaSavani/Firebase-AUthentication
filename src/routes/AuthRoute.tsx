import { Navigate } from "react-router-dom"
import { useUserAuth } from "../context/AuthContext"

const AuthRoute = ({ children }: any) => {
    let { user }: any = useUserAuth()

    if (!user) {
        return <Navigate to="/" />
    }

    return (
        <>
            {children}
        </>
    )
}

export default AuthRoute