import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col lg:flex-row flex items-center md:justify-between mb-16 md:mb-12">
      <h1 className="font-sans lg:font-light text-4xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Levecriar.com.br
      </h1>
      <h4 className="md:text-4xl font-serif text-center md:text-left text-lg mt-5 md:pl-8">
      Um novo olhar para a criação de filhos com foco na criação com apego e no desenvolvimento de inteligência emocional
       e financeira. Conheça nossa página no Instagram {' '}
        <a
          href="https://instagram.com/levecriar"
          className="underline hover:text-type duration-200 transition-colors"
        >
          @levecriar
        
        </a>
        .
      </h4>
    </section>
  )
}
