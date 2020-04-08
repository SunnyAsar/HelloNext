import Link from 'next/link'
import Layout from '../components/Layout'

const PostLink = (props) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

const index = () => {
  return (
    <div>
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink id="Hello Next.js" />
          <PostLink id="Learn Next.js is awesome" />
          <PostLink id="Deploy apps with Zeit" />
        </ul>
      </Layout>
    </div>
  )
}

export default index
