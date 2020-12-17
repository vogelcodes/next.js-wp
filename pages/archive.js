import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/container'
import Date from '../components/date'
import Header from '../components/header'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsWithSlug } from '../lib/api'

export default function Archive({ allPosts: { edges }, preview }) {
  

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>LeveCriar.com.br</title>
        </Head>
        <Container>
            <Header/>
            <div className="grid md:grid-cols-2">

             {edges.map(post=>(
                 <div className="m-2" key={post.node.slug}>
                             <Link as={`/posts/${post.node.slug}`} href="/posts/[slug]">
 {post.node.title}</Link>{' em '}<Date className="text-sm" dateString={post.node.date} />
                 </div>
             ))}
             </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPostsWithSlug()
  return {
    props: { allPosts },
  }
}
