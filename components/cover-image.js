import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ isPreview, title, coverImage, slug }) {
  const src = isPreview ? coverImage?.mediaDetails.sizes[3].sourceUrl : coverImage?.sourceUrl;
  const image = (
    <Image
          src={src}
          device={580}
          quality={75}
          layout="intrinsic"
          loading='eager'
          alt="Picture of the author"
          width={coverImage?.mediaDetails.width}
          height={coverImage?.mediaDetails.height}
          className={cn('shadow-small rounded', {
            'max-h-img hover:shadow-medium transition-shadow duration-200': slug,
          })}
    
          />
  )
  return (
    <div className="sm:mx-auto max-w-xl">
      
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
