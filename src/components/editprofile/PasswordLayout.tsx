interface PasswordLayoutProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const PasswordLayout: React.FC<PasswordLayoutProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="PasswordLayout">
      <div className="InformationLayout">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className={className}
        />
      </div>
    </div>
  );
};

export default PasswordLayout;
