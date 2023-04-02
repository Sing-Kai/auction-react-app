import React from "react"

const PageContainer = ({children}) => {
  return (
    <div className= 'bg-cyan-50 min-h-screen mx-10 p-10'>
      {children}
    </div>
  )
}

export default PageContainer