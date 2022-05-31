import React from 'react'
import { ListItem } from './ListItem'
import s from './List.module.scss'
import { Container } from '../Common/Container'

export const List = props => {
  const {resultData} = props
  return (
    <Container>
      <div className={s.list}>
      {resultData?.length ? 
      resultData.map((item, index) => {
        return <ListItem key={index} pos={index + 1} data={item} />
      }) : 'Пусто...'}
    </div>
    </Container>
  )
}
