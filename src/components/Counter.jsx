"use client"
import React, { useState } from 'react'

const Counter = () => {
    let [count,setcount] = useState(0)
  return (
    <div>
      <h1>This is admin dashboard</h1>
      {count}

    </div>
  )
}

export default Counter
