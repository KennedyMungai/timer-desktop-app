import { useState } from 'react'
import InputField from './input-field'

type Props = {
  isOverlay: boolean
}

const Timer = ({ isOverlay }: Props) => {
  // TODO: Set Editing to false
  const [isEditing, setIsEditing] = useState<boolean>(true)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(1)
  const [seconds, setSeconds] = useState<number>(0)

  return (
    <div>
      {isEditing ? (
        <div>
          <InputField
            label="Hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            placeholder="Hours"
          />
          <InputField
            label="Minutes"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="Minutes"
          />
          <InputField
            label="Seconds"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            placeholder="Seconds"
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Timer
