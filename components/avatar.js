import Date from '../components/date'
import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'




export default function Avatar({ author, dateString }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

  return (
    <>
      {author && (
        <div className="flex items-center">
          <img
            src={author.avatar.url}
            className="w-12 h-12 rounded-full mr-4"
            alt={name}
          />
          <div className="text-xl bg-bg px-1 rounded-md text-roxo font-bold">{name}</div>

        </div>
      )}
    </>
  )
}
