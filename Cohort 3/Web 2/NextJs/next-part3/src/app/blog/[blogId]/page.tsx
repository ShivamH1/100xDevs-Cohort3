import axios from "axios";

export default async function BlogPage({ params }: { params: { blogId: string } }) {
  const postId = (await params).blogId;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = response.data;
  return (
    <div>
      Blog Page for {postId} <br />
      title - {data.title} <br />
      body - {data.body}
    </div>
  );
}
