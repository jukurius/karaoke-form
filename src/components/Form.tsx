import { useState } from "react";
import styles from "../assets/styles/form.module.css";
import FormInput from "./FormInput";
import FormDropdown from "./FormDrowdown";
import FormImageInput from "./FormImageInput";
import FormButtonGroup from "./FormButtonGroup";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    image: "",
    song: "",
    songKey: "",
    isChecked: false,
  });

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

  const handleSelect = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      song: value,
    }));
  };

  const handleImageChange = (file: File | null) => {
    console.log("täällä käyty");
    if (file) {
      setFormData((prev) => ({ ...prev, image: file.name }));
    } else {
      setFormData((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleButtonGroupClick = (buttonName: string) => {
    console.log("Clicked button:", buttonName);
    setFormData((prev) => ({
      ...prev,
      songKey: buttonName,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const dropdownOptions = [
    { value: "1", label: "Kirka - Hetki lyö" },
    { value: "2", label: "Kari Tapio - Juna kulkee" },
    { value: "3", label: "Anna Puu - Säännöt rakkaudelle" },
  ];

  const buttons = ["-2", "-1", "0", "+1", "+2"];

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
          options={dropdownOptions}
          onChange={handleSelect}
        />
        <FormButtonGroup
          label="Sävellaji*"
          buttons={buttons}
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
      <button type="submit" className={styles.form_submit_button}>
        Ilmoittaudu
      </button>
    </form>
  );
};

export default Form;
