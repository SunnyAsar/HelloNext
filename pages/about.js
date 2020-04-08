import Link from 'next/link'

const index = () => {
  return (
    <div>
      <p>Hello About.js</p>

      <Link href="/">
        <a title="About Page">About</a>
      </Link>
    </div>
  )
}

export default index
