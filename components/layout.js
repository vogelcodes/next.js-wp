import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-full bg-gradient-to-b from-roxo to-verde">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
