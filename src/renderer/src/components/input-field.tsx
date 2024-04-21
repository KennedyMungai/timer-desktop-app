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
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-20 font-semibold bg-transparent text-sky-600"
      />
    </div>
  )
}

export default InputField
