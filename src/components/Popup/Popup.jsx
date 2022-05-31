import React from 'react'
import s from './Popup.module.scss'

export const Popup = props => {
  const {children} = props
  return (
    <div className={s.container}>
      <div className={s.popup}>
        {children}
      </div>
    </div>
  )
}
