import Link from 'next/link';

export default function ReadMore (slug) {
    return <section>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <span>Ler Mais</span>
        </Link>
    </section>
}