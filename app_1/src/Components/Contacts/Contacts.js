import ContactDetails from "../Contacts/ContactDetails";
import { useGetContactsQuery } from "../../Redux/Contacts/ApiAddress";
import { useSelector } from "react-redux";
import { selectors } from "../../Redux/Contacts";
import styles from "../Contacts/Contacts.module.css";

export default function Contacts() {
  const filter = useSelector(selectors.getFilter);
  const { data, error, isFetching } = useGetContactsQuery();
  const filteredContacts = () => {
    return data.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  if (error) return <p>Error: {error.data}.</p>;

  return (
    <div className={styles.box}>
      <ul>
        {data && !isFetching ? (
          filteredContacts().map((contact) => (
            <ContactDetails key={contact.id} contact={contact} />
          ))
        ) : (
          <h2>Preparing...</h2>
        )}
      </ul>
    </div>
  );
}
