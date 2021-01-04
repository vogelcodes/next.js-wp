import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/container'
import Date from '../components/date'
import Header from '../components/header'
import Intro from '../components/intro'
import Layout from '../components/layout'

export default function Ebook() {
  

  return (
    <>
      <Layout>
        <Head>
          <title>LeveCriar.com.br</title>
        </Head>
        <Container>
            <Header/>
            
        </Container>
      </Layout>
    </>
  )
}

