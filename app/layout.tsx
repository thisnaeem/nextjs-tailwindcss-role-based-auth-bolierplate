import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ReduxProvider } from "@/store/provider";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "NextAuth - Role-Based Authentication Boilerplate",
  description: "A production-ready Next.js boilerplate with role-based authentication, admin panel, and modern glassmorphic UI.",
  keywords: ["Next.js", "Authentication", "Role-based", "Admin Panel", "Boilerplate"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
