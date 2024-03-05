import { useRef, ChangeEvent } from "react";
import styles from "../assets/styles/components/form-image-input.module.css";

interface ImageInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (file: File | null) => void;
}

const ImageInput = ({
  label,
  placeholder,
  value,
  onChange,
}: ImageInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    onChange(file);
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageRemove = () => {
    onChange(null);
  };

  return (
    <div className={styles.input_wrapper}>
      <label className={styles.input_label}>{label}</label>
      <div className={styles.input_container}>
        {value ? (
          <div className={styles.image_preview}>
            <div>{value}</div>
            <button onClick={handleImageRemove}></button>
          </div>
        ) : (
          <>
            <input
              className={styles.input}
              type="file"
              ref={inputRef}
              accept="image/*"
              onChange={handleFileChange}
            />
            <button className={styles.button} onClick={handleButtonClick}>
              {placeholder}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
