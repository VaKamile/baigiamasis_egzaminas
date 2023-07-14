export interface ILabelProps {
  // theme?: IColorTheme;
  targetinput?: string;
  size?: string;
  weight?: string;
  text?: string;
  className?: string;
}

const Label = ({ text, targetinput, className }: ILabelProps) => {
  return (
    <label htmlFor={targetinput} className={className}>
      {text}
    </label>
  );
};

export default Label;
