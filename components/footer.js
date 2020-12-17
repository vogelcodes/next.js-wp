import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-accent-2">
      <Container>
        <div className="py-6 flex flex-col items-center">
            <Link
              href={'/'}
              className="text-center mx-3 font-bold hover:underline "
            >
              LeveCriar.com.br
            </Link>
          </div>
      </Container>
    </footer>
  )
}
