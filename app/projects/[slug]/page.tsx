import { Post } from "@/components/shared/Posts";
import { post } from "@/components/data/projects";

export default async function Page({ post, params, html }) {
  return (
    <Post
      title={post.title}
      projectUrl={post.ProjectUrl}
      githubUrl={post.GithubUrl}
      content={html}
      slug={params.slug}
    />
  );
}
