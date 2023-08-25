import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='text-center'>
      <p className='text-center'>
        Sorry, the requested pape does not exist
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
