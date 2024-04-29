interface InputProps {
  name: string;
  type?: string;
  value?: string;
  onChange: (value: string) => void;
  className?: string,
}

const Input = (
{
  name, type = 'text', value, onChange, className
}: InputProps) => {

  return (
    <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
        style={{color: '#000000'}}
    />
  )

}

export default Input