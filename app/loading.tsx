'use client'
import { useEffect } from 'react'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false, speed: 750 })

const NProgressHandler = () => {
  useEffect(() => {
    NProgress.start()

    const tt = setTimeout(() => {
      NProgress.done()
    }, 500)

    return () => clearTimeout(tt)
  })

  return null
}

export default NProgressHandler
