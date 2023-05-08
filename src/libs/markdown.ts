import fs from "fs";
import path from "path";
import matter from "gray-matter";
import html from 'remark-html'
import { remark } from 'remark'
import { sanitize } from 'isomorphic-dompurify';
import remarkImages from 'remark-images';

export const getFiles = () => {
  return fs.readdirSync(path.join(process.cwd(), 'contents'))
}

export const getSlugs = () => {
  return getFiles().map((fileName) => fileName.replace(/\.md$/, ''))
}

export const getFile = (slug: string) => {
  return fs.readFileSync(path.join(process.cwd(), 'contents', `${slug}`, 'README.md'), 'utf-8')
}

export const readFile = (file: string): { data: any; content: string } => {
  const { data, content } = matter(file)
  return { data, content }
}

export const convertToHtml = async (content: string): Promise<string> => {
  const processedContent = await remark().use(html).use(remarkImages).process(content)
  const sanitizedHtml = sanitize(processedContent.toString())
  return sanitizedHtml
}

export const getPosts = () => {
  const slugs = getSlugs()
  const posts = slugs.map((slug) => {
    const file = getFile(slug)
    const { data, content } = readFile(file)
    return {
      slug,
      title: data.title,
      tags: data.tags,
    }
  })
  return posts
}
