import Link from 'next/link'

const index = () => {
  return (
    <div>
      <p>Hello Next.js</p>

      <Link href='/about'>
        <a>About</a>
      </Link>
    </div>
  )
}

export default index
