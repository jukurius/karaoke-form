interface FormData {
  username: string;
  image: string;
  song: string;
  songKey: string;
  isChecked: boolean;
}

interface FormValdationProps {
  formData: FormData;
}

const FormValidation = ({ formData }: FormValdationProps) => {
  let valid = true;
  if (
    formData.username.trim() === "" ||
    formData.song.trim() === "" ||
    formData.songKey.trim() === "" ||
    !formData.isChecked
  ) {
    valid = false;
  }
  return valid;
};

export default FormValidation;
