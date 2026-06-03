import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ImportBooksPage from "../pages/admin/ImportBooksPage/ImportBooksPage";
import ImportBookDetailPage from "../pages/admin/ImportBooksDetailsPage/ImportBookDetailPage";
import SearchBooks from "../pages/user/SearchBooks/SearchBooks";
import BookDetails from "../pages/user/BookDetails/BookDetails";

export default function AppRoutes(){
    return(
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/admin/imports" element={<ImportBooksPage />}/>
                <Route path="/admin/details" element={<ImportBookDetailPage />}/>

                <Route path="/search-books" element={<SearchBooks />}/>
                <Route path="/book" element={<BookDetails />}/>

            </Route>
        </Routes>
    );

}