import Link from 'next/link';
import PostPreview from '../components/post-preview'
export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
        Posts Anteriores
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(({ node }) => {
            const indexOf = node.excerpt.search('href=');

            const excerpt = (indexOf==-1)? node.excerpt :node.excerpt.slice(0, indexOf) + 'href=\"https://home.levecriar.com.br/posts/' + node.slug +'/\">&hellip; Ler mais</a></p>\n'
          return <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node}
            date={node.date}
            author={node.author?.node}
            slug={node.slug}
            excerpt={excerpt}
          />
        }
          )}
      </div>
      <div className="grid grid-cols-1 text-center">
         <Link href='/archive/'>
           Ver mais...
           </Link>
      </div>
    </section>
  )
}
