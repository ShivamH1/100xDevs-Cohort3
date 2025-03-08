export default function InnerPostPage({ params }: { params: { postIds: string[] } }) {
  return <div>{JSON.stringify(params.postIds)} This handles routes after /post</div>;
}
