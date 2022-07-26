import { Routes, Route } from "react-router-dom"
import ShirtsListPage from "../pages/ShirtsListPage/ShirtsListPage"
import ShirtDetails from "../pages/ShirtDetails/ShirtDetails"
import HomePage from "../pages/HomePage/HomePage"
import NewShirtPage from "../pages/NewShirtPage/NewShirtPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import EditShirtPage from "../pages/editShirtPage/editShirtPage"
import UserDetails from "../pages/UserDetails/UserDetails"
import UserListPage from "../pages/UserListPage/UserListPage"
import EditUserPage from "../pages/EditUserPage/EditUserPage"

const AppRoutes = () => {

    return (
        <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />
            {/* About Us */}
            <Route path="/aboutUs" element={<h1>About us</h1>} />
            {/* Shirts */}
            <Route path="/shirts" element={<ShirtsListPage />} />
            <Route path="/create" element={<NewShirtPage />} />
            <Route path="/details/:shirt_id" element={<ShirtDetails />} />
            <Route path="/:shirt_id/edit" element={<EditShirtPage />} />
            {/* Auth */}
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Users */}
            <Route path="/users" element={<UserListPage />} />
            <Route path="/users/:user_id" element={<UserDetails />} />
            <Route path="/editUser/:user_id" element={<EditUserPage />} />
            {/* My Profile */}
            <Route path="/myProfile" element={<h1>My profile</h1>} />
            {/* Error 404 */}
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes