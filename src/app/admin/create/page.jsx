import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1>This is my create blog page</h1>
      <Link href={"/admin"}>Go Back</Link>
    </div>
  )
}

export default Page
