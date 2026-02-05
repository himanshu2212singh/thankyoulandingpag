import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "Congratulations | CXO Summit 2026",
    description: "Success! You're registered for the next CXO-SummitSync.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${inter.variable} antialiased bg-background text-foreground`}
            >
                {children}
            </body>
        </html>
    );
}
