import { Form } from "react-bootstrap";

export default function FormInput({
  value,
  type,
  placeholder,
  onChange,
  className,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={className}
    />
  );
}
