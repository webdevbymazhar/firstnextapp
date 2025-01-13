"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    let params = useParams()

    
  return (
    <div>
      {JSON.stringify(params.id)}
    </div>
  )
}

export default Page
