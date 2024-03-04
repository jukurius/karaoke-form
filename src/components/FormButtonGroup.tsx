import styles from "../assets/styles/form-button-group.module.css";

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
  return (
    <div className={styles.button_wrapper}>
      {label && <label className={styles.button_label}>{label}</label>}
      <div className={styles.button_group}>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => onButtonClick(button)}
            className={`${styles.button} ${index === 0 ? "first" : ""} ${
              index === buttons.length - 1 ? "last" : ""
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
