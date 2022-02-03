import propTypes from "prop-types";
import { useDeleteContactMutation } from "../../Redux/Contacts/ApiAddress";
import styles from "../Contacts/Contacts.module.css";

export default function ContactDetails({ contact }) {
  const [deleteContact, { isError, error }] = useDeleteContactMutation();
  const { id, name, phone } = contact;

  if (isError) alert(`We can't delete the card. Error: ${error.data}.`);

  return (
    <div>
      <p className={styles.name}>{name}:</p>
      <p>{phone}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
}

ContactDetails.propTypes = {
  contact: propTypes.object.isRequired,
};
