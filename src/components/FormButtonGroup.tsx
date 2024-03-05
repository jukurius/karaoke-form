import { useState } from "react";
import styles from "../assets/styles/components/form-button-group.module.css";

interface ButtonGroupProps {
  buttons: string[];
  label: string;
  onButtonClick: (buttonName: string) => void;
}

const FormButtonGroup = ({
  buttons,
  label,
  onButtonClick,
}: ButtonGroupProps) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-2);
  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
    onButtonClick(buttons[index]);
  };

  return (
    <div className={styles.button_wrapper}>
      {label && <label className={styles.button_label}>{label}</label>}
      <div className={styles.button_group}>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`${styles.button} ${
              index === activeButtonIndex ? styles.active : ""
            }`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormButtonGroup;
