
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
import { NextResponse } from "next/server";

interface Blog {
  id: number;
  title: string;
  content: string;
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const blogId = parseInt(params.id);
  const blog = blogs.find(b => b.id === blogId);
  
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
  
  return NextResponse.json(blog);
}



