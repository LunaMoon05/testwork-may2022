import React from 'react'
import preload from '../../../assets/preload.svg'
import { Popup } from '../Popup'

export const PopupPreload = () => {
  return (
    <Popup>
      <div>Идет обработка сервера, примерное время ожидания 10-30 секунд</div>
      <img style={{width: 200, height: 200}} src={preload} alt="" />
    </Popup>
  )
}
