import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import { UserAuthContextProvider } from "./context/AuthContext"
import AuthRoute from "./routes/AuthRoute"

// lazy load
const SignIn = lazy(() => import("./components/SignIn"))
const SignUp = lazy(() => import("./components/SignUp"))
const Home = lazy(() => import("./components/Home"))

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/home"
                element={
                  <AuthRoute>
                    <Home />
                  </AuthRoute>
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  )
}

export default App