import NavBar from './components/navBar/NavBar'
import './globals.css'
import { Jua} from 'next/font/google'

const jua = Jua({ subsets: ['latin'] , weight: '400'})

export const metadata = {
  title: 'Look my Dog',
  description: 'Dog pictures of blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jua.className}>
        <NavBar/>
        <div className='pb-20 pt-48'>{children}</div>
      </body>
    </html>
  )
}
