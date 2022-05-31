import React from 'react'
import '../../global.scss'

export const Container = props => {
  const {children} = props
  return (
    <div className='container'>
      {children}
    </div>
  )
}
