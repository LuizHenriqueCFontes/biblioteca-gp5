import { Outlet } from "react-router-dom";

export default function ReaderLayout() {
    return(
        <main>
            <Outlet />
        </main>
    );
}