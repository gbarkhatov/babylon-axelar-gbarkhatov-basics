import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function GeneralLayout({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 bg-base-200 flex'>{children}</main>
      <Footer />
    </div>
  )
}
