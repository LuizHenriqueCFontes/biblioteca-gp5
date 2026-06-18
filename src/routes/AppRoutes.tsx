import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ImportBooksPage from "../feature/books/admin/importBooks/pages/ImportBooksPage";
import ImportBookDetailsPage from "../feature/books/admin/importBooksDetails/pages/ImportBookDetailsPage";
import SearchBooks from "../feature/books/user/searchBooks/pages/SearchBooks";
import BookDetails from "../feature/books/user/bookDetails/pages/SearchBookDetails";
import GetLoans from "../feature/loan/getLoans/pages/GetLoans/GetLoans";
import ReaderPage from "../feature/reading/pages/ReaderPage";

export default function AppRoutes(){
    return(
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/admin/imports" element={<ImportBooksPage />}/>
                <Route path="/admin/details/:id" element={<ImportBookDetailsPage />}/>

                <Route path="/search-books" element={<SearchBooks />}/>
                <Route path="/book/:id" element={<BookDetails />}/>

                <Route path="/loan" element={<GetLoans />}/>

                <Route path="/reading/:idBook" element={<ReaderPage />}/>

            </Route>
        </Routes>
    );

}