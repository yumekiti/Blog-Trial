import { GetStaticPaths, GetStaticProps } from 'next'
import Image from "next/image";
import { convertToHtml, getFile, getSlugs, readFile } from "../libs/markdown";
import ReactMarkdown from 'react-markdown'

type PostProps = {
  postData: {
    content: string
    data: {
      title: string
      date: string
    }
  },
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostProps, { slug: string }> = async ({ params }) => {
  const slug = String(params?.slug)
  const file = getFile(slug)
  const { content, data } = readFile(file)
  const postData = {
    content: content,
    data,
  }
  return { props: { postData, slug } }
}

const components = (slug: string) => ({
  img: (image: any) => {
    const src = `/contents/${slug}/${image.src}`;
    const metaString = image.alt;
    const alt = metaString.replace(/ *{[\d:\/]+} */g, "");
    const matchResult = metaString.match(/{((\d+):)?(\d+\/\d+)}/);
    const aspectRatio = matchResult?.[3] || "16/9";
    const maxWidth = matchResult?.[2] || "600";
    const [aspectW, aspectH] = aspectRatio.split("/").map((str: any) => Number(str));
    const width = Math.min(Number(maxWidth), 640);
    const height = width * (aspectH / aspectW);

    return <Image src={src} alt={alt} width={width} height={height} />;
  },
})

export default function Post({ postData, slug }: PostProps) {
  const { title, date } = postData.data
  const renderers = components(slug);
  return (
    <ReactMarkdown children={postData.content} components={renderers} />
  )
}
