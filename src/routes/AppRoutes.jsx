import { Routes, Route } from "react-router-dom"
import ShirtsListPage from "../pages/ShirtsListPage/ShirtsListPage"
import ShirtDetails from "../pages/ShirtDetails/ShirtDetails"
import HomePage from "../pages/HomePage/HomePage"
import NewShirtPage from "../pages/NewShirtPage/NewShirtPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<h1>About us</h1>} />
            <Route path="/myProfile" element={<h1>My profile</h1>} />
            <Route path="/shirts" element={<ShirtsListPage />} />
            <Route path="/create" element={<NewShirtPage />} />
            <Route path="/details/:shirt_id" element={<ShirtDetails />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/:shirt_id/edit" element={<h1>change a shirt</h1>} />
            {/* falta ruta de 404 */}
        </Routes>
    )

}

export default AppRoutes