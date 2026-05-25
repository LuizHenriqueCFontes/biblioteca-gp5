import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/PublicLayout/MainLayout";
import AdminLayout from "../layout/AdminLayout/AdminLayout";
import ImportBooksPage from "../pages/admin/ImportBooksPage/ImportBooksPage";

export default function AppRoutes(){
    return(
        <Routes>
            <Route element={<MainLayout />}>

            </Route>

            <Route element={<AdminLayout />}>
                <Route path="/admin/imports" element={<ImportBooksPage />}/>
            </Route>
        </Routes>
    );

}