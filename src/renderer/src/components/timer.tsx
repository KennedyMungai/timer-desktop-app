import { useEffect, useState } from 'react'
import InputField from './input-field'

type Props = {
  isOverlay: boolean
}

const Timer = ({ isOverlay }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(1)
  const [seconds, setSeconds] = useState<number>(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let intervalId

    if (isActive)
      intervalId = setInterval(() => {
        if (seconds > 0) setSeconds((seconds) => seconds - 1)
        else {
          if (minutes === 0 && hours === 0) {
            // TODO: Play audio
            clearInterval(intervalId)
            setIsActive(false)
          } else {
            if (minutes === 0) {
              setHours((hours) => hours - 1)
              setMinutes(59)
            } else {
              setMinutes((minutes) => minutes - 1)
            }
            setSeconds(59)
          }
        }
      }, 1000)
    else clearInterval(intervalId)

    return () => clearInterval(intervalId)
  }, [hours, seconds, minutes, isActive])

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
        <div>
          <div className="flex items-center justify-center">
            <h1 className="mt-4 text-6xl font-bold text-slate-200">{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
          </div>
          <div id="timer-buttons" className="flex justify-around font-semibold text-slate-300">
            {isActive ? (
              <>
                <button onClick={() => setIsActive(false)}>Pause</button>
                <button onClick={() => console.log('Something else')}>Stop</button>
              </>
            ) : (
              <>
                <button onClick={() => setIsActive(true)}>&#9658;</button>
                <button onClick={() => setIsEditing(true)}>&#9998;</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Timer
