import Logo from '../Logo/Logo'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const links = [
  { name: 'Validators', href: '#' },
  { name: 'EVM Polls', href: '#' },
  { name: 'Blocks', href: '#' },
  { name: 'Transactions', href: '#' },
  { name: 'Transfers', href: '#' },
  { name: 'GMP', href: '#' },
  { name: 'TVL', href: '#' },
  { name: 'Batches', href: '#' },
  { name: 'Assets', href: '#' }
]

const Navbar = () => (
  <nav className='container flex mx-auto p-4 justify-between items-center'>
    <Logo variant='full' />
    <div className='flex gap-4'>
      {links.map(({ name, href }) => (
        <a key={name} href={href} className='link link-hover'>
          {name.toUpperCase()}
        </a>
      ))}
    </div>
    <div className='flex items-center gap-4'>
      <input type='text' placeholder='Search' className='input' />
      <ThemeSwitcher />
    </div>
  </nav>
)

export default Navbar
