import { Routes, Route } from "react-router-dom"
import ShirtsListPage from "../pages/ShirtsListPage/ShirtsListPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/aboutUs" element={<h1>About us</h1>} />
            <Route path="/myProfile" element={<h1>My profile</h1>} />
            <Route path="/shirts" element={<ShirtsListPage />} />
            <Route path="/create" element={<h1>Create a new shirt</h1>} />
            <Route path="/details/:shirt_id" element={<h1>I am a shirt</h1>} />
            <Route path="/:shirt_id/edit" element={<h1>change a shirt</h1>} />
        </Routes>
    )

}

export default AppRoutes