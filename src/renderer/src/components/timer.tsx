import { useState } from 'react'
import InputField from './input-field'

type Props = {
  isOverlay: boolean
}

const Timer = ({ isOverlay }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)

  return (
    <div>
      {isEditing ? (
        <div>
          <InputField label="Hours" value={hours} onChange={setHours} placeholder="Hours" />
          <InputField label="Minutes" value={minutes} onChange={setMinutes} placeholder="Minutes" />
          <InputField label="Seconds" value={seconds} onChange={setSeconds} placeholder="Seconds" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Timer
