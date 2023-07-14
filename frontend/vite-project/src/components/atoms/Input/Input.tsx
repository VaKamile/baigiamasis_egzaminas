export interface IInputProps {
  type: 'number' | 'text' | 'email';

  value?: string | number;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  width?: string;
}

const Input = ({ type, value, setValue }: IInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input value={value} onChange={handleChange} type={type} />;
};

export default Input;
