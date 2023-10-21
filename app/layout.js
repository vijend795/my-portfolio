import Header from './component/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Vijendra | Personal Portfolio",
  description: "Vijendra is a fresher in Web and development and his goal is to become a full-stack developer. Interest technologies are  Djnago,Next.js,Postgres,Tailwind,React Native.",
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
