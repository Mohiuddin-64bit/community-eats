import { baseApi } from "../../api/baseApi";

const suppliesAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSupplies: builder.mutation({
      query: (data) => ({
        url: "/donations",
        method: "POST",
        body: data,
      }),
    }),
    getAllSupplies: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
    }),
    getSingleSupplies: builder.query({
      query: (id) => ({
        url: `/donations/${id}`,
        method: "GET",
      }),
    }),
    deleteSupplies: builder.mutation({
      query: (id) => ({
        url: `/donations/${id}`,
        method: "DELETE",
      }),
    }),
    editSupplies: builder.mutation({
      query: ({id, data}) => ({
        url: `/donations/${id}`,
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
