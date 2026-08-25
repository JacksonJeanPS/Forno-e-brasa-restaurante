import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = { metadataBase:new URL("https://forno-e-brasa-restaurante.vercel.app"), title:"Forno & Brasa | Cozinha brasileira", description:"Fogo, tempo e sabor em uma cozinha brasileira contemporânea.", openGraph:{title:"Forno & Brasa",description:"Fogo, tempo e sabor.",images:["/restaurant-og.webp"]}, icons:{icon:"/favicon.svg"} };

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${inter.variable} ${playfair.variable}`}>{children}</body></html>}
