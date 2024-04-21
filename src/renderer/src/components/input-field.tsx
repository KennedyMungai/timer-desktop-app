type Props = {
  label: string
  onChange: any
  placeholder?: string
  value: number
}

const InputField = ({ label, onChange, value, placeholder }: Props) => {
  return (
    <div className="flex justify-center">
      <label className="font-bold text-neutral-200">{label}: </label>
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
