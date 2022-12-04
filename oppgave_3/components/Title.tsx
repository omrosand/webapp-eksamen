type TitleTagTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

type TitleProps = {
  title: string
  Tag: TitleTagTypes
  className?: string
}

const Title = ({ title, Tag, className }: TitleProps) => {
  return <Tag className={className}>{title}</Tag>
}
export default Title
