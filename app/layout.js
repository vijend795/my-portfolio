import Header from './component/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Vijendra Singh | Full-Stack Developer",
  description: "Full-stack developer in Wellington, New Zealand, building web and mobile apps with Django, React, Next.js and PostgreSQL. Creator of Navya, a live AI-powered learning platform.",
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
