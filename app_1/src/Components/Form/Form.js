import React, { useState } from "react";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../../Redux/Contacts/ApiAddress";
import styles from "../Form/Form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addContact, { isLoading, isError, error }] = useAddContactMutation();
  const {
    data,
    isError: isErrorQuery,
    error: errorQuery,
  } = useGetContactsQuery();

  const handleContactInput = ({ currentTarget }) => {
    const { value, name } = currentTarget;

    switch (name) {
      case "name":
        setName(value);
        return;
      case "phone":
        setPhone(value);
        return;
      default:
        return;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (isErrorQuery) return reset();

    if (
      data.find((contact) => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }

    addContact({ name, phone });
    reset();
  };

  const reset = () => {
    setName("");
    setPhone("");
  };

  if (isError || isErrorQuery)
    return <h2>Error: {error?.data || errorQuery.data}.</h2>;

  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.name}>
          Name
          <input
            className={styles.inputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleContactInput}
          />
        </label>

        <div>
          Number
          <input
            className={styles.input}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleContactInput}
          />
        </div>

        <button
          className={styles.formButton}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Preparing..." : "Add contact"}
        </button>
      </form>
    </div>
  );
}
