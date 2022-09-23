import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert, Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Row } from "reactstrap"
import { useUserAuth } from "../context/AuthContext"

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState("")

    const { signUp }: any = useUserAuth()
    const navigate = useNavigate()

    // handle change
    const hanldeChange = (e: any) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    // handle submit
    const handleSubmit = async (e: any) => {
        e.preventDefault()

        try {
            await signUp(userInfo.email, userInfo.password)
            navigate('/')
        } catch (err: any) {
            setError(err.message)
        }
    }

    return (
        <Row className="justify-content-center">
            <Col xl={5} md={8}>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag='h3' className="text-center my-3">
                            Sign Up
                        </CardTitle>
                        {error &&
                            <Alert color="danger">{error}</Alert>
                        }
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email address"
                                    onChange={hanldeChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={hanldeChange}
                                />
                            </FormGroup>
                            <Button color="primary" className="w-100" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
                <p className="text-center text-muted">
                    Already have an account?
                    <a href="/" className="ms-1">Sign In</a>
                </p>
            </Col>
        </Row>
    )
}

export default SignUp