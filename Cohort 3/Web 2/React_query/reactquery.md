## useQuery hook is used to fetch data from server and cache it.
## It can also handle refetching, retrying, polling and many more.
## queryKey is the unique key for the data. It is used for caching.
## queryFn is the function that will be called to fetch the data.
## enabled is a boolean that determines whether the data should be fetched or not.
## It is used for optimization. If the data is not needed, it will not be fetched.

## Difference between useQuery and useMutation
### Purpose: useQuery is for reading data, while useMutation is for modifying data.

### Typical Use Case: useQuery is used when you want to fetch and display data, while useMutation is used when you want to make changes to that data.

### Return Values: useQuery returns { data, error, isLoading, isFetching }, while useMutation returns { mutate, data, error, isError, isLoading, isSuccess }.

### Error Handling: Both hooks handle errors, but useMutation provides additional features for handling optimistic updates and rollbacks in case of errors during mutations.

## React Query is a valuable addition to the React ecosystem, making data fetching and synchronization easier than ever.
