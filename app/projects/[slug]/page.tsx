import { getPageContent, getPageBySlug, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Post } from "@/components/shared/Posts";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPageBySlug(params.slug);
  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notion,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  return (
    <Post
      title={(post.properties.Name as any).title[0].plain_text}
      coverImage={(post.properties.CoverImage as any).files[0].file.url}
      projectUrl={(post.properties.ProjectUrl as any).url}
      githubUrl={(post.properties.GithubUrl as any).url}
      date={(post.properties.Date as any).date.start}
      content={html}
      slug={params.slug}
    />
  );
}
