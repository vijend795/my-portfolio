import Header from './component/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Vijendra | Portfolio",
  description: "Welcome to Vijendra's Web Development Journey: Aspiring Full-Stack Developer Passionate about Django, Next.js, PostgreSQL, Tailwind, and React Native.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
