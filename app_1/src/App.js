import React from "react";
import Form from "./Components/Form/Form";
import PhonebookFilter from "./Components/Phonebook/PhonebookFilter";
import Contacts from "./Components/Contacts/Contacts";

export default function App() {
  return (
    <>
      <Form />
      <PhonebookFilter />
      <Contacts />
    </>
  );
}
