import { Slide } from "@/components/animations/Slide";
import { LinkPreview } from "../animations/link-preview";
import { ImagePreview } from "../animations/image-preview";

type HeadingType = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  image: string;
};

export default function PageHeading({
  title,
  description,
  children,
  image,
}: HeadingType) {
  return (
    <header className='mb-10'>
      <Slide>
        <h1 className='max-w-3xl font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]'>
          <ImagePreview image={image}>{title}</ImagePreview>
        </h1>
        <p className='max-w-2xl text-base text-zinc-400 leading-relaxed'>
          {description}
        </p>
        {children}
      </Slide>
    </header>
  );
}
