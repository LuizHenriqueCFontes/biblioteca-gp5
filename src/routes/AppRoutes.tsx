

import { Route, Routes } from "react-router-dom";
import Register from "../pages/auth/Register/Register";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/register" element={<Register />} />
        </Routes>
    );

}