"use client";
import Link from 'next/link';
import React from 'react'

const Navigation = () => {
  return (
  <nav>
    <Link href="/" className='m-4'>Home</Link>
    <Link href="/Blog" className='m-4'>Blog</Link> 
    <Link href="/Blog/1" className='m-4'>Blog 1</Link>
    <Link href="/Blog/2" className='m-4'>Blog 2</Link> 
  </nav>
  )
}

export default Navigation