import Link from './Link'

const Footer = () => {
  return (
    <footer className='text-center h-full border-t border-gray-100 flex gap-4 items-center justify-center'>
      <Link href='https://github.com/WilmerRS/upa-ux' external>
        GitHub
      </Link>
      <Link href='https://www.linkedin.com/in/wilmerrs' external>
        LinkedIn
      </Link>
    </footer>
  )
}

export default Footer
