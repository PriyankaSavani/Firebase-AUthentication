import { useState } from "react"
import GoogleButton from "react-google-button"
import { useNavigate } from "react-router-dom"
import { Alert, Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Row } from "reactstrap"
import { useUserAuth } from "../context/AuthContext"

const SignIn = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState("")

    const { signIn, googleSignIn }: any = useUserAuth()
    const navigate = useNavigate()

    // handle change
    const hanldeChange = (e: any) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    // handle submit
    const handleSubmit = async (e: any) => {
        e.preventDefault()

        try {
            await signIn(userInfo.email, userInfo.password)
            navigate('/home')
        } catch (err: any) {
            setError(err.message)
        }
    }

    // handle google sign in
    const handleGoogleSignIn = async (e: any) => {
        e.preventDefault()

        try {
            await googleSignIn()
            navigate('/home')
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
                            Sign In
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
                                Sign In
                            </Button>
                            <hr />
                            <GoogleButton
                                className="w-100"
                                onClick={handleGoogleSignIn}
                            />
                        </Form>
                    </CardBody>
                </Card>
                <p className="text-center text-muted">
                    Don't have an account?
                    <a href="/signup" className="ms-1">Sign Up</a>
                </p>
            </Col>
        </Row>
    )
}

export default SignIn