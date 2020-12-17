import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <Image
          src={coverImage?.sourceUrl}
          device={580}
          quality={75}
          layout="responsive"
          //loading='eager'
          alt="Picture of the author"
          width={coverImage?.mediaDetails.width}
          height={coverImage?.mediaDetails.height}
          className={cn('shadow-small rounded', {
            'max-h-img hover:shadow-medium transition-shadow duration-200': slug,
          })}
    
          />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
