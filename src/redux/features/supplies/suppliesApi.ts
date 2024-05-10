import { baseApi } from "../../api/baseApi";

const suppliesAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSupplies: builder.mutation({
      query: (data) => ({
        url: "/supplies",
        method: "POST",
        body: data,
      }),
    }),
    getAllSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
    }),
    getSingleSupplies: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
      }),
    }),
    deleteSupplies: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
      }),
    }),
    editSupplies: builder.mutation({
      query: ({id, data}) => ({
        url: `/supplies/${id}`,
        method: "PATCH",
        body: data
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
