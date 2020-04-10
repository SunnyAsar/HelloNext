import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const PostLink = (props) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

const index = (props) => {
  return (
    <div>
      <Layout>
        <h1>The Batman Show </h1>
        <ul>
          {props.shows.map((show) => (
            <li key={show.id}>
              <Link href="/p/[id]" as={`/p/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <style jsx>{`
          h1 {
            font-family: cursive;
            color: #b284be;
            font-size: 40px;
            text-align: center;
          }
          li {
            list-style: none;
          }
          li a {
            list-style: none;
            text-decoration: none;
            color: gray;
            font-size: 24px;
          }
        `}</style>
      </Layout>
    </div>
  )
}
index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map((entry) => entry.show)
  }
}

export default index
