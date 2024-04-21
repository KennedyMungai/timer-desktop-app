import { useState } from 'react'
import InputField from './input-field'

type Props = {
  isOverlay: boolean
}

const Timer = ({ isOverlay }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <InputField label="Minutes" />
      <InputField />
      <InputField />
    </div>
  )
}

export default Timer
