import { baseApi } from "../../api/baseApi";

const suppliesAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSupplies: builder.mutation({
      query: (data) => ({
        url: "/supplies",
        method: "POST",
        body: data,
        // mode: "no-cors",
      }),
    }),
    getAllSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
        // mode: "no-cors",
      }),
    }),
    getSingleSupplies: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
        // mode: "no-cors",
      }),
    }),
    deleteSupplies: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
        // mode: "no-cors",
      }),
    }),
    editSupplies: builder.mutation({
      query: ({id, data}) => ({
        url: `/supplies/${id}`,
        method: "PATCH",
        body: data,
        // mode: "no-cors",
      }),
    }),
  }),
});

export const {
  useCreateSuppliesMutation,
  useGetAllSuppliesQuery,
  useGetSingleSuppliesQuery,
  useDeleteSuppliesMutation,
  useEditSuppliesMutation,
} = suppliesAPI;
