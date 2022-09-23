import { Button, Col, Row } from "reactstrap"
import { useUserAuth } from "../context/AuthContext"

const Home = () => {

    const { user, logOut }: any = useUserAuth()

    const handleLogout = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Row className="justify-content-center text-center">
            <Col>
                <h5 className="mb-3">
                    Welcome
                    <br />
                    <span className="text-primary">Email ID: {user && user.email}</span>
                </h5>
                <Button onClick={handleLogout}>Log Out</Button>
            </Col>
        </Row>
    )
}

export default Home