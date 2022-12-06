import Image from 'next/image'

import logoFull from '../../assets/logo-full.jpeg'
import logoSquare from '../../assets/logo-square.jpg'

const Logo = ({ variant }) => {
  const isFull = variant === 'full'

  return (
    <a href='#' className='bg-primary01 px-4 py-2 rounded-xl'>
      <Image
        src={isFull ? logoFull : logoSquare}
        alt='Babylonchain'
        className={`${isFull ? 'w-48' : 'w-10'}`}
      />
    </a>
  )
}

export default Logo
