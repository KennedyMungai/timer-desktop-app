import InputField from './input-field'

type Props = {
  isOverlay: boolean
}

const Timer = ({ isOverlay }: Props) => {
  return (
    <div>
      <InputField></InputField>
    </div>
  )
}

export default Timer
