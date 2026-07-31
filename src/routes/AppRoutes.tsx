import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ImportBooksPage from "../feature/books/admin/importBooks/pages/ImportBooksPage";
import ImportBookDetailsPage from "../feature/books/admin/importBooksDetails/pages/ImportBookDetailsPage";
import SearchBooks from "../feature/books/user/searchBooks/pages/SearchBooks";
import BookDetails from "../feature/books/user/bookDetails/pages/SearchBookDetails";
import GetLoans from "../feature/loan/user/getLoans/pages/GetLoans";
import ReaderPage from "../feature/reading/reader/pages/ReaderPage";
import SearchCategories from "../feature/category/search/pages/SearchCategories/SearchCategories";
import RegisterCategory from "../feature/category/register/pages/Register";
import EditCategory from "../feature/category/edit/pages/EditCategory";
import SearchBooksAdmin from "../feature/books/admin/searchBooksAdmin/pages/SearchBooksAdmin";
import ManageCategories from "../feature/bookCategories/manageCategories/pages/ManageCategories";
import EditBookPage from "../feature/books/admin/editBook/pages/EditBookPage";
import ListUsers from "../feature/user/admin/listUsers/pages/ListUsers";
import EditData from "../feature/user/user/editData/EditData";
import HomeUser from "../feature/home/user/pages/HomeUser";
import HomeAdmin from "../feature/home/admin/pages/HomeAdmin";
import Login from "../feature/auth/login/pages/Login";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import RegisterValidate from "../feature/auth/register/RegisterValidate/pages/RegisterValidate";
import RegisterPassword from "../feature/auth/register/RegisterPassword/pages/RegisterPassword";
import ReaderLayout from "../layout/ReaderLayout/ReaderLayout";

export default function AppRoutes(){
    return(
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/admin/imports" element={<ImportBooksPage />}/>
                <Route path="/admin/details/:id" element={<ImportBookDetailsPage />}/>
                <Route path="/admin/search/books" element={<SearchBooksAdmin />}/>
                <Route path="/admin/manage/categories/:idBook" element={<ManageCategories />}/>
                <Route path="/admin/edit/book/:idBook" element={<EditBookPage />}/>

                <Route path="/admin/list/users" element={<ListUsers />}/>

                <Route path="/admin/home" element={<HomeAdmin />}/>

                <Route path="/search/books" element={<SearchBooks />}/>
                <Route path="/book/:id" element={<BookDetails />}/>

                <Route path="/loan" element={<GetLoans />}/>

                <Route path="/categories" element={<SearchCategories />}/>
                <Route path="/categories/create" element={<RegisterCategory />}/>
                <Route path="/categories/edit/:idCategory" element={<EditCategory />}/>

                <Route path="/user/edit/data" element={<EditData />}/>

                <Route path="/" element={<HomeUser />}/>
            </Route>

            <Route element={<ReaderLayout />}>
                <Route path="/reading/:idBook" element={<ReaderPage />}/>
            </Route>

            <Route element={<AuthLayout />}>
                <Route path="auth/login" element={<Login />}/>
                <Route path="auth/register" element={<RegisterValidate />}/>
                <Route path="auth/register/password" element={<RegisterPassword />}/>
            </Route>
        </Routes>
    );

}