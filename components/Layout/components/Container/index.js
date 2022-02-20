import React from 'react'

const WrapperContainer = ({ children }) => {
  return (
    <div className="bg-base-200 w-full">
      <div className="w-full max-w-[1360px] mx-auto my-5 md:my-10">
        {children}
      </div>
    </div>
  )
}

export default WrapperContainer
