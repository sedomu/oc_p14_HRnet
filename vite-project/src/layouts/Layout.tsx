import { Outlet } from "react-router-dom";
import Header from "@/components/Header.tsx";

export default function Layout() {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <Header />
            <Outlet />
        </div>
    );
}
