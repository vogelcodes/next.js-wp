import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <div className="mx-auto max-w-3xl flex flex-col justify-center">
          <PostTitle>{title}</PostTitle>
          <div className="hidden md:block md:mb-12">
            <Avatar author={author} dateString={date} />
            <div className="bg-bg px-1 rounded-md w-1/2">

            Postado em <Date dateString={date} />
            <Categories categories={categories} />
            </div>

          </div>
    
      </div>
        
      <div className="mb-8 md:mb-16 sm:mx-0 rounded">
        <CoverImage isPostPage={true} title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
          <div className="bg-bg px-1 rounded-md w-auto">

          Postado em <Date dateString={date} />
          <Categories categories={categories} />
          </div>
        </div>
        <div className="mb-6 text-lg">
        </div>
      </div>
    </>
  )
}
