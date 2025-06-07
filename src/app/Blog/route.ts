import { NextResponse } from "next/server";

interface Blog {
  id: number;
  title: string;
  content: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Blog 1",
    content: "This is the content of blog 1",
  },
  {
    id: 2,
    title: "Blog 2",
    content: "This is the content of blog 2",
  },
  {
    id: 3,
    title: "Blog 3",
    content: "This is the content of blog 3",
  },
  {
    id: 4,
    title: "Blog 4",
    content: "This is the content of blog 4",
  },
  {
    id: 5,
    title: "Blog 5",
    content: "This is the content of blog 5",
  },
];

export async function GET() {
  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  const body: Blog = await request.json();
  blogs.push(body);
  return NextResponse.json(blogs);
}
