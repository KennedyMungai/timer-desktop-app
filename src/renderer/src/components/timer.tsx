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
        <div className="flex justify-center">
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
            <button
              className="w-full px-2 mt-1 text-2xl border-2 rounded-lg border-slate-400 text-slate-400"
              onClick={() => setIsEditing(false)}
            >
              &#10004;
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="mt-4 text-6xl font-bold text-slate-200">{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
        </div>
      )}
    </div>
  )
}

export default Timer
