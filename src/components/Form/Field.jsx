import React, { useState } from 'react'
import s from './Field.module.scss'

export const Field = props => {
  const {placeholder, errors, style, register, name, settings} = props
  const keyNames = Object.keys(errors ? errors : {});
  return (
    <div style={style} className={s.container}>
      <label className={s.error} htmlFor={name}>{keyNames[0] === name ? settings?.message : null}</label>
      <input id={name} {...register(name, { required: settings?.required })} placeholder={placeholder} className={`${s.field} ${keyNames[0] === name ? s.field_error : null}`} type="text" />
    </div>
  )
}
