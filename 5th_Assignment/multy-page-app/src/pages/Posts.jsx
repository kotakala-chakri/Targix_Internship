import { useQuery } from "@tanstack/react-query";
import { Title, Container, Card } from "../Layouts";
export const Posts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json(),
      ),
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts</p>;

  return (
    <Container>
      <Title>Posts</Title>
      {data.slice(0, 10).map((post) => (
        <Card key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </Card>
      ))}
    </Container>
  );
};
