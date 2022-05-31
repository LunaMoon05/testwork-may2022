import React from 'react'
import { MainBtn } from '../Common/MainBtn'
import { Field } from './Field'
import s from './FormItem.module.scss'

export const FormItem = props => {
  const {register, errors, item, removeField, style, names} = props
  return (
    <div style={style} className={s.item}>
      <Field errors={errors} settings={{required: true, message: 'Обязательное поле'}} style={{marginRight: 20}} name={names.site_product} register={register} tip='В основное поле возможна передача ID модели или ссылки на модель с выбранными фильтрами на маркете' placeholder='Основое поле' />
      <Field style={{marginRight: 20}} name={names.custom_field_1} register={register} tip='В основное поле возможна передача ID модели или ссылки на модель с выбранными фильтрами на маркете' placeholder='Опциональное поле 1' />
      <Field style={{marginRight: 20}} name={names.custom_field_2} register={register} tip='В основное поле возможна передача ID модели или ссылки на модель с выбранными фильтрами на маркете' placeholder='Опциональное поле 2' />
      <Field style={{marginRight: 20}} name={names.custom_field_3} register={register} tip='В основное поле возможна передача ID модели или ссылки на модель с выбранными фильтрами на маркете' placeholder='Опциональное поле 3' />
      <Field style={{marginRight: 20}} name={names.custom_field_4} register={register} tip='В основное поле возможна передача ID модели или ссылки на модель с выбранными фильтрами на маркете' placeholder='Опциональное поле 4' />
      <Field style={{marginRight: 20}} name={names.custom_field_5} register={register} tip='В основное поле возможна передача ID модели или ссылки на модель с выбранными фильтрами на маркете' placeholder='Опциональное поле 5' />
      <MainBtn disabled={item === 1} onClick={() => removeField(item)} variant='alert' style={{width: '-webkit-fill-available'}} text='Удалить' />
    </div>
  )
}
