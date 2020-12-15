import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col">
            <a
              href={'https://levecriar.com.br'}
              className="text-center mx-3 font-bold hover:underline "
            >
              LeveCriar.com.br
            </a>
          </div>
      </Container>
    </footer>
  )
}
