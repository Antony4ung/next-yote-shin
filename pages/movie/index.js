import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Index() {

    const router = useRouter()

    useEffect(()=>{
        router.push('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div>

    </div>
  )
}
