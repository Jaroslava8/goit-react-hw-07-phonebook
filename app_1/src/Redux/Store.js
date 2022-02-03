import { configureStore } from '@reduxjs/toolkit';
import { ApiAddress, contacts } from './Contacts';

export default configureStore({
  reducer: contacts,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    ApiAddress.middleware,
  ],
});