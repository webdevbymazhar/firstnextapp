
import Counter from '@/components/Counter'
import Image from 'next/image'
import React from 'react'

const Page = () => {

  return (
    <div>
      <h1>This is admin dashboard</h1>
      <Counter/>
      <Image src={"globe.svg"} width={100} height={100} alt='Image'/>

    </div>
  )
}

export default Page
