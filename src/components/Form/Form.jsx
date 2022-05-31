import React, { useEffect, useState } from 'react'
import s from './Form.module.scss'
import Select from 'react-select';
import axios from 'axios';
import { baseURL } from './../../helpers/baseURL';
import { FormItem } from './FormItem';
import { useForm } from 'react-hook-form'
import { MainBtn } from '../Common/MainBtn';
import { Container } from '../Common/Container';

export const Form = props => {
  const {token, resultData, setResultData, setCurrentPopup} = props
  const [city, setCity] = useState(null)
  const [citiesOptions, setCitiesOptions] = useState(null)
  const [taskId, setTaskId] = useState(null)
  const [taskFlag, setTaskFlag] = useState(false)
  const header = {headers: {Authorization: token}}
  useEffect(() => {
    axios.get(`${baseURL}regions/`, header).then(resp => {
      setCitiesOptions(resp.data.map(item => {
        return {value: item.name, label: item.name, id: item.id}
      }))
    })
  }, [])
  useEffect(() => {
    setValue('city', city)
  }, [city])
  const onCitySelect = val => {
    setCity(val)
  }
  const { register, handleSubmit, setValue, getValues, formState:{ errors } } = useForm()
  const onSubmit = () => {
    const objLength = Object.keys(getValues()).length / 6
    const values = getValues()
    const site_products = []
    for(let i = 0; i < objLength; i++) {
      const obj = {}
      for(const key in values) {
        if(getValues()[key]) {
          obj[key.slice(0, key.length - 1)] = getValues()[key]
        }
      }
      site_products.push(obj)
    }
    const data = {
      region_ids: city.map(item => item.id),
      site_products
    }
    axios.post(`${baseURL}/task/create/`, data, header).then(taskResp => {
      setTaskId(taskResp?.data?.task_id)
    })
  }
  useEffect(() => {
    if(taskId) {
      if(resultData?.length === 0) {
        setTaskFlag(!taskFlag)
      }
      setCurrentPopup('preload')
      setTimeout(() => {
        axios.get(`${baseURL}task/${taskId}/products/?page=1`, header).then(dataResp => {
          if(dataResp.data.status === 'DONE') {
            setResultData(dataResp?.data?.results)
            setCurrentPopup(null)
          } else {
            setTaskFlag(!taskFlag)
          }
        })
      }, 5000)
    }
  }, [taskId, taskFlag])
  const onError = () => {
    console.log('errors:', errors)
  }
  const [fields, setFields] = useState([1])
  const addField = () => {
    const newFields = [...fields]
    newFields.push(fields.length + 1)
    setFields(newFields)
  }
  const removeField = item => {
    if(fields.length > 1) {
      const newFields = fields.filter(field => field !== item)
      setFields(newFields)
    }
  }
  return (
    <header className={s.header}>
      <Container>
        <div style={{marginBottom: 40}} className={s.row}>
          <div className={s.selectWrapper}>
            <label className={s.error} htmlFor='city'>{errors?.city ? 'Обязательное поле' : null}</label>
            <Select {...register("city", {required: true})} isMulti={true} onChange={val => onCitySelect(val)} placeholder='Выбрать город...' options={citiesOptions} className={s.select} />
          </div>
          <button onClick={() => setCurrentPopup('tip')} className={s.tipBtn}>?</button>
        </div>
        {fields.map((item, index) => {
          const names = {
            site_product: `site_product${index}`,
            custom_field_1: `custom_field_1${index}`,
            custom_field_2: `custom_field_2${index}`,
            custom_field_3: `custom_field_3${index}`,
            custom_field_4: `custom_field_4${index}`,
            custom_field_5: `custom_field_5${index}`,
          }
          return <FormItem errors={errors} item={item} removeField={removeField} style={fields.length === (index + 1) ? null : {marginBottom: 20}} key={index} names={names} register={register} />
        })}
        <div className={s.btnsWrapper}>
          <MainBtn onClick={handleSubmit(onSubmit, onError)} style={{marginRight: 10}} text='Получить данные' />
          <MainBtn onClick={() => addField()} text='Добавить поле' />
        </div>
      </Container>
    </header>
  )
}
