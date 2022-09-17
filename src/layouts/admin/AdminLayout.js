import { Layout as ALayout } from "antd";
import {
    Header as AHeader,
    Content as AContent,
    Footer as AFooter,
} from "antd/lib/layout/layout";
import Footer from "../client/Footer";
import AdminNavBar from "./AdminNavBar";

export default function AdminLayout({ children }) {
    return (
        <ALayout className="main-theme">
            <AHeader className="main-theme h-auto p-0 m-0 flex sticky z-40 top-0 shadow-lg">
                <AdminNavBar />
            </AHeader>
            <AContent className="mt-12 pb-72 bg-gray-50 w-11/12 mx-auto">
                {children}
            </AContent>
            <AFooter className="m-0 p-0 mt-16">
                <Footer />
            </AFooter>
        </ALayout>
    );
}