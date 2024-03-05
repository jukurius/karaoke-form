import { useState, ChangeEvent } from "react";
import styles from "../assets/styles/components/form-dropdown.module.css";

interface DropdownProps {
  options: { label: string; value: string }[];
  initialOption?: string;
  label: string;
  onChange?: (value: string) => void;
}

const FormDropdown = ({
  options,
  label,
  initialOption,
  onChange,
}: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    initialOption ?? ""
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={styles.dropdown_container}>
      <label className={styles.dropdown_label}>{label}</label>
      <select
        className={styles.dropdown_input}
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">{initialOption}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormDropdown;
