import { Sidebar } from "@/components";
import { Suspense } from "react";

export default function DashboardLayout({
    children
}: LayoutProps<"/dashboard">) {
    return (
        <div className="bg-slate-100 w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

            <div className="flex">

                <Sidebar />

                <div className="w-full text-slate-900">
                    <Suspense fallback={
                        <div>
                            Loading...
                        </div>
                    }>
                        {children}
                    </Suspense>
                </div>


            </div>
        </div>
    );
}