import fs from "fs";
import path from "path";
import matter from "gray-matter";
import html from 'remark-html'
import { remark } from 'remark'

// contents ディレクトリ内のファイル名を返す関数
export const getFiles = () => {
  return fs.readdirSync(path.join(process.cwd(), 'contents'))
}

// contents ディレクトリ内のファイル名から拡張子を取り除いた文字列を返す関数
export const getSlugs = () => {
  return getFiles().map((fileName) => fileName.replace(/\.md$/, ''))
}

// 指定された slug を持つファイルの内容を返す関数
export const getFile = (slug: string) => {
  return fs.readFileSync(path.join(process.cwd(), 'contents', `${slug}.md`), 'utf-8')
}

// ファイルをパースして matter から抽出された data と内容を返す関数
export const readFile = (file: string): { data: any; content: string } => {
  const { data, content } = matter(file)
  return { data, content }
}

// Markdown を HTML に変換する関数
export const convertToHtml = async (content: string): Promise<string> => {
  const processedContent = await remark().use(html).process(content)
  return processedContent.toString()
}
