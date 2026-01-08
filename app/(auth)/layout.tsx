export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-gradient-to-b from-violet-600/10 via-transparent to-transparent pointer-events-none" />
            <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-md">
                {children}
            </div>
        </div>
    );
}
