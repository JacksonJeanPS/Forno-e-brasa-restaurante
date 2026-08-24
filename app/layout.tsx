import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase:new URL("https://forno-e-brasa-restaurante.vercel.app"), title:"Forno & Brasa | Cozinha brasileira", description:"Fogo, tempo e sabor em uma cozinha brasileira contemporânea.", openGraph:{title:"Forno & Brasa",description:"Fogo, tempo e sabor.",images:["/restaurant-og.webp"]}, icons:{icon:"/favicon.svg"} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
