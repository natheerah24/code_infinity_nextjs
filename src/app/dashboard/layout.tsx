import Link from "next/link";
import Container from "@/components/container";

export default function DashboardLayout({children}: { children: React.ReactNode; }) {
    return (
    <>
        <Container>
            <h1 className={"text-white font-bold text-2xl"}>Dashboard</h1>
            <nav>
                <Link href={"/dashboard/settings"}>Settings</Link>
            </nav>
            <div className={"bg-white text-slate-600"}>
                {children}
            </div>
        </Container>
    </>
    );

}