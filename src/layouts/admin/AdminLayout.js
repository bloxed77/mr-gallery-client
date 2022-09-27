import { Layout as ALayout } from "antd";
import {
    Header as AHeader,
    Content as AContent,
    Footer as AFooter,
} from "antd/lib/layout/layout";
import Breadcrumb from "../client/Breadcrumb";
import Footer from "../client/Footer";
import AdminNavBar from "./AdminNavBar";

export default function AdminLayout({ children, className }) {
    return (
        <ALayout className="main-theme">
            <AHeader className="main-theme h-auto p-0 m-0 flex sticky z-10 top-0 shadow-lg">
                <AdminNavBar />
            </AHeader>
            <Breadcrumb />
            <AContent
                className={`${className} container bg-gray-50 px-2 mx-auto min-h-screen`}
            >
                {children}
            </AContent>
            <AFooter className="m-0 p-0 mt-16">
                <Footer />
            </AFooter>
        </ALayout>
    );
}
