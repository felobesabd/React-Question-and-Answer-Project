import React from 'react'
import { Accordion, Row } from 'react-bootstrap'
import { data } from './data'

const AcordAnswer = ({info, onDelete}) => {
  const dataLocal = JSON.parse(localStorage.getItem('items'))
  const oneDeleteData = (item) => {
    if (  localStorage.getItem('items') != null) {
          const index = data.findIndex((e) => e.id === item)
          data.splice(index, 1)
          onDelete(data)
    }
  }
  return (

    <Row>
<Accordion>    
{
  localStorage.getItem('items') != null ? (dataLocal.map((e, index) => {
            return (
                    <Accordion.Item eventKey={e} key={index}> 
                    <Accordion.Header>
                    <div className='m-auto'>{e.ques}</div>
                    </Accordion.Header>
                    <Accordion.Body className='text-end'>
                    <div className='d-inline ms-3 fs-4'>{e.answ}</div>
                    <button 
                    onClick={()=> oneDeleteData(e.id)} 
                    className='button-style'>مسح</button>
                    </Accordion.Body>
                    </Accordion.Item>
            )
        })) : (<h1 className='p-5 text-center fs-4'>لا يوجد اسئلة تم اضافتها</h1>)
    }
</Accordion>
    </Row>
  )
}

export default AcordAnswer;