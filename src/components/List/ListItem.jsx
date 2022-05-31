import React from 'react'
import s from './List.module.scss'

export const ListItem = props => {
  const {pos, data} = props
  return (
    <div className={s.listItem}>
      <div className={s.pos}>{pos}.</div>
      <div className={s.text}>Название товара: <span>{data?.site_product_name}</span></div>
      <div className={s.text}>Минимальная цена: <span>{data?.price_min}</span></div>
      <div className={s.text}>Средняя цена: <span>{data?.price_avg}</span></div>
      <div className={s.text}>Максимальная цена: <span>{data?.price_max}</span></div>
    </div>
  )
}
