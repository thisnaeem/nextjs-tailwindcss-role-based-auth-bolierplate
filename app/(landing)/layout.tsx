import { Navbar, Footer } from "@/components/shared";

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-950">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
