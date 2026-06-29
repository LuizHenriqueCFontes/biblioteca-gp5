import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ImportBooksPage from "../feature/books/admin/importBooks/pages/ImportBooksPage";
import ImportBookDetailsPage from "../feature/books/admin/importBooksDetails/pages/ImportBookDetailsPage";
import SearchBooks from "../feature/books/user/searchBooks/pages/SearchBooks";
import BookDetails from "../feature/books/user/bookDetails/pages/SearchBookDetails";
import GetLoans from "../feature/loan/getLoans/pages/GetLoans/GetLoans";
import ReaderPage from "../feature/reading/reader/pages/ReaderPage";
import SearchCategories from "../feature/category/search/pages/SearchCategories/SearchCategories";
import RegisterCategory from "../feature/category/register/pages/Register";
import EditCategory from "../feature/category/edit/pages/EditCategory";

export default function AppRoutes(){
    return(
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/admin/imports" element={<ImportBooksPage />}/>
                <Route path="/admin/details/:id" element={<ImportBookDetailsPage />}/>

                <Route path="/search/books" element={<SearchBooks />}/>
                <Route path="/book/:id" element={<BookDetails />}/>

                <Route path="/loan" element={<GetLoans />}/>

                <Route path="/reading/:idBook" element={<ReaderPage />}/>

                <Route path="/categories" element={<SearchCategories />}/>
                <Route path="/categories/create" element={<RegisterCategory />}/>
                <Route path="/categories/edit/:idCategory" element={<EditCategory />}/>

            </Route>
        </Routes>
    );

}