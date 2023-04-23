import { GetStaticPaths, GetStaticProps } from 'next'
import { convertToHtml, getFile, getSlugs, readFile } from "../libs/markdown";

// ページの props の型定義
type PostProps = {
  postData: {
    content: string
    data: {
      title: string
      date: string
    }
  }
}

// 動的ルーティングに必要なパスを返す関数
export const getStaticPaths: GetStaticPaths = async () => {
  // マークダウンファイルのファイル名からslugを取得して、paramsにセットする
  const paths = getSlugs().map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false, // fallbackをfalseにすると、存在しないパスへのアクセスは404エラーとなる
  }
}

// パスからデータを取得する関数
export const getStaticProps: GetStaticProps<PostProps, { slug: string }> = async ({ params }) => {
  // params.slugが存在すれば、slugに代入。存在しなければundefinedとなる。
  const slug = params?.slug
  // slugを元にマークダウンファイルのパスを取得する
  const file = getFile(slug as string)
  // ファイルからcontentとdataを取得する
  const { content, data } = readFile(file)
  // contentをHTMLに変換し、postDataにセットする
  const postData = {
    content: await convertToHtml(content),
    data,
  }
  // postDataをpropsとして返す
  return { props: { postData } }
}

// ポストコンポーネント
export default function Post({ postData }: PostProps) {
  const { title, date } = postData.data
  return (
    <div>
      <h1>{title}</h1>
      <div>{date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  )
}
