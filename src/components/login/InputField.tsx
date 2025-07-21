import "../../styles/InputField.css";

interface InputFieldProps {
  label: string;
  type: string; //text, email, password
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  icon?: React.ReactNode;
  rightText?: string;
  onRightTextClick?: () => void;
  className: string;
  onIconClick?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
  icon,
  rightText,
  onRightTextClick,
  className,
  onIconClick,
}) => {
  return (
    <div className={`InputField InputField_${className}`}>
      <label htmlFor={name} className="input-field-label">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field-input"
      />
      {icon && (
        <div className="input-field-icon" onClick={onIconClick}>
          {icon}
        </div>
      )}
      {rightText && (
        <span className="input-field-right-text" onClick={onRightTextClick}>
          {rightText}
        </span>
      )}
    </div>
  );
};

export default InputField;
