const ExternalLink = ({
  href,
  content,
}: {
  href: string
  content: string
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {content}
  </a>
)

export default ExternalLink
