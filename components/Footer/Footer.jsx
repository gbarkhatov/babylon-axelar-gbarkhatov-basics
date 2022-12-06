import Logo from "../Logo/Logo"

const Footer = () => (
  <footer className='container flex mx-auto p-4 justify-between items-center'>
    <div className='flex gap-4 items-center'>
      <Logo />
      <a href='#' className='link link-info link-hover'>
        Core v0.29.0
      </a>
      <a href='#' className='link link-info link-hover'>
        SDK v0.11.4
      </a>
    </div>
    <p>
      Copyright © {new Date().getFullYear()} Babylonchain. All rights reserved
    </p>
  </footer>
)

export default Footer
