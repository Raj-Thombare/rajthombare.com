export type ProjectProps = {
  name: string;
  logo: string;
  tagline: string;
  slug: string;
  coverImage: string;
};

export const post = {
  title: "title",
  content: "content",
  projectUrl: "sadad",
  githubUrl: "asdad",
  slug: "1",
};

export const PROJECT: ProjectProps[] = [
  {
    name: "Venmo Payments App",
    logo: "/icons/venmo.png",
    tagline:
      "Pay. Get paid. Shop. Share. Venmo is a digital wallet that makes money easier for everyone from students to small businesses.",
    slug: "venmo-app",
    coverImage: "/projectCover/noteme.png",
  },
  {
    name: "Medium Clone",
    logo: "/icons/medium.webp",
    tagline:
      "A blog posting app similar to Medium. Built using Next.js, Hono, Cloudflare Workers, Edge runtime",
    slug: "medium-clone",
    coverImage: "/projectCover/summarize.png",
  },
  {
    name: "Sociopedia",
    logo: "/icons/sociopedia.png",
    tagline:
      "A dynamic social media platform. Share photos, post updates, follow friends, and engage with a vibrant community.",
    slug: "sociopedia-app",
    coverImage: "/projectCover/traxpack.png",
  },
  {
    name: "Youtube Clone",
    logo: "/icons/yt.svg",
    tagline:
      "A full-featured YouTube clone built with React, TypeScript, and the YouTube API. Search, watch, and explore videos seamlessly.",
    slug: "youtube-clone",
    coverImage: "/projectCover/yt.png",
  },
  {
    name: "Dall-E AI",
    logo: "/icons/dalle.jpeg",
    tagline:
      "DALL·E is an AI Image Generation Full Stack App that creates realistic images and art from a description in natural language.",
    slug: "dalle-app",
    coverImage: "/projectCover/noteme.png",
  },
  {
    name: "Pokedex",
    logo: "/icons/pokedex.jpg",
    tagline:
      "It's a Pokedex where you can search your favorite Pokemons. (React.js, Typescript)",
    slug: "pokedex",
    coverImage: "/project-cover/pokedex.jpg",
  },
  {
    name: "HooBank",
    logo: "/icons/hoobank.svg",
    tagline:
      "The Modern UI/UX Website. The Next Generation Payment Method. (React.js, Typescript and Tailwind CSS)",
    slug: "hoobank",
    coverImage: "/project-cover/hoobank.png",
  },
];
