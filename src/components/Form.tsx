import { useState } from "react";
import styles from "../assets/styles/components/form.module.css";
import FormInput from "./FormInput";
import FormDropdown from "./FormDrowdown";
import FormImageInput from "./FormImageInput";
import FormButtonGroup from "./FormButtonGroup";
import FormValidation from "../utils/FormValidation";
import { songs } from "../data/Songs";
import { songKeys } from "../data/SongKeys";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    image: "",
    song: "",
    songKey: "",
    isChecked: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle dropdown change
  const handleSelect = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      song: value,
    }));
  };

  // Handle image change
  const handleImageChange = (file: File | null) => {
    if (file) {
      setFormData((prev) => ({ ...prev, image: file.name }));
    } else {
      setFormData((prev) => ({ ...prev, image: "" }));
    }
  };

  // Handle button group click
  const handleButtonGroupClick = (buttonName: string) => {
    setFormData((prev) => ({
      ...prev,
      songKey: buttonName,
    }));
  };

  // Handle form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ((event.nativeEvent as any).submitter?.name === "submitButton") {
      if (FormValidation({ formData })) {
        console.log("Form is valid");
        console.log(formData);
        setIsLoading(true);
      } else {
        console.log("Form is invalid");
      }
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form_wrapper}>
      <h2 className={styles.form_title}>Ilmoittautumislomake</h2>
      <div className={styles.form_group_column}>
        <FormInput
          name="username"
          type="text"
          label="Nimi tai nimimerkki*"
          value={formData.username}
          onChange={handleChange}
          disabled={false}
        />
        <FormImageInput
          label="Kasvokuva"
          placeholder="+ Tuo kasvokuva"
          value={formData.image}
          onChange={handleImageChange}
        />
        <FormDropdown
          label="Biisi*"
          initialOption="Valitse alta"
          options={songs}
          onChange={handleSelect}
        />
        <FormButtonGroup
          label="Sävellaji*"
          buttons={songKeys}
          onButtonClick={handleButtonGroupClick}
        />
        <label className={styles.form_checkbox}>
          <input
            type="checkbox"
            checked={formData.isChecked}
            onChange={() =>
              setFormData((prev) => ({ ...prev, isChecked: !prev.isChecked }))
            }
          />
          Sallin tietojeni tallennuksen karaokejärjestelmään
        </label>
      </div>
      <div>
        <button
          type="submit"
          name="submitButton"
          disabled={FormValidation({ formData }) ? false : true}
          className={`${styles.form_submit_button} ${
            isLoading ? styles.isLoading : ""
          }`}
        >
          <span className={styles.submit_spinner}></span>
          {isLoading ? "Lähetetään..." : "Ilmoittaudu"}
        </button>
      </div>
    </form>
  );
};

export default Form;
