import React from 'react'
import s from './MainBtn.module.scss'

export const MainBtn = props => {
  const {text, style, disabled, onClick, variant = 'default'} = props
  const styleClass = variant === 'default' ? s.btn_default : variant === 'main' ? s.btn_main : variant === 'alert' ? s.btn_alert : null
  return (
    <button disabled={disabled} onClick={onClick} style={style} className={`${s.btn} ${styleClass}`}>{text}</button>
  )
}
