type ButtonTypes = 'submit' | 'button'

type ButtonProps = {
  title: string
  type?: ButtonTypes
  onClick?: () => void
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className="appButton" onClick={onClick}>
      {title}
    </button>
  )
}
export default Button
