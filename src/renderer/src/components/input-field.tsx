type Props = {
  label: string
  onChange: any
  placeholder?: string
  value: number
}

const InputField = ({ label, onChange, value, placeholder }: Props) => {
  return (
    <div>
      <label>{label}: </label>
      <input type="number" value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default InputField
