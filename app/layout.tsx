import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Assingment! Practicing Form",
	description: "by Nulnu",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} max-w-screen-sm min-h-screen mx-auto bg-neutral-100 bg-gradient-to-b from-slate-300 to-blue-900  text-black `}>
				{children}
			</body>
		</html>
	);
}
