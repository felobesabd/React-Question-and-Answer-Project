import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { data } from './data'

const AnswerQuestion = ({onAdd, notify}) => {

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const addValue = () => {
        if (question === "" || answer === "") {
            notify("من فضلك ادخل البيانات صحيحة", 'error')
            return;
        }
        data.push({id: Math.floor(Math.random() * 20), ques: question, answ: answer})
        setQuestion(' ')
        setAnswer(' ')
        // console.log(question);
        // console.log(answer);
        // console.log(data);
        onAdd()
    }
  return (
    <Row className='align-items-center mb-3'>
        <Col sm='5'>
        <Form.Control type="text"
        value={question}
        onChange={(e)=>setQuestion(e.target.value)} 
        placeholder="ادخل السؤال" />
        </Col>

        <Col sm='5'>
            <Form.Control type="text"
            value={answer}
            onChange={(e)=>setAnswer(e.target.value)} 
            placeholder="ادخل الاجابة" />
        </Col>

        <Col sm='2'>
            <button onClick={addValue} className='w-100 button-style m-0' type='submit'>اضافة</button>
        </Col>
    </Row>
  )
}

export default AnswerQuestion;