export default function PostTitle({ children }) {
  return (
    <h1
      className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
