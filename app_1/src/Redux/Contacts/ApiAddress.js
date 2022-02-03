import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiAddress = createApi({
  reducerPath: "ApiAddress",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61faf24687801d0017a2c37a.mockapi.io/contacts/",
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
      query: (info) => {
        return {
          url: "/contacts",
          method: "POST",
          body: {
            ...info,
          },
        };
      },
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = ApiAddress;
