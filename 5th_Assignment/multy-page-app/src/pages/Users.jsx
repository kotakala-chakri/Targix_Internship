import { useQuery } from "@tanstack/react-query";
import { Title, Container, Box } from "../Layouts";

export const Users = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://randomuser.me/api/?results=10").then((res) => res.json()),
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error loading users</p>;

  return (
    <Container>
      <Title>Users</Title>
      {data?.results?.map((user) => (
        <Box key={user.login.uuid}>
          <img src={user.picture.thumbnail} />
          <p>
            {user.name.first} {user.name.last}
          </p>
        </Box>
      ))}
    </Container>
  );
};
