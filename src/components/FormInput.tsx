import { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "../assets/styles/components/form-input.module.css";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapperClass?: string;
  labelClassName?: string;
  inputClassName?: string;
  value: string | number;
}

const FormInput = ({
  label,
  value,
  labelClassName,
  inputClassName,
  onChange,
  ...rest
}: FormInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`${styles.input_container}`}>
      {label && (
        <label
          htmlFor={rest["name"]}
          className={`${styles.input_label} ${
            labelClassName ? styles[labelClassName] : ""
          }`}
        >
          {label}
        </label>
      )}
      <input
        value={value}
        onChange={handleChange}
        className={`${styles.input_field} ${
          inputClassName ? styles[inputClassName] : ""
        }`}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
