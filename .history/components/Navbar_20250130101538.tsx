import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex-between max-container padding-container relative z-30 py-5'>
        <Link href="/">
          <Image src="/hilink-logo.sv" alt='logo' width={74} height={29} />
        </Link>
    </nav>
  )
}

export default Navbar