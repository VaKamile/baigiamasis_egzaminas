import { FormValue } from '../../molecules/Form/Form';

interface IButtonProps {
  text: string;
  action?: () => void;
  identifier?: string;
  className?: string;
  formValue?: FormValue;
  onSubmit?: () => Promise<void>;
}

const Button = ({ text, action, className }: IButtonProps) => {
  return (
    <button onClick={action} className={className}>
      {text}
    </button>
  );
};

export default Button;
