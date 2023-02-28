import { Col, Container, Row} from "react-bootstrap";
import React, { useState } from "react";
import AnswerQuestion from './component/AnswerQuestion';
import AcordAnswer from './component/AcordAnswer';
import { data } from './component/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let App = () => {
    const [ state, setState ] = useState(data);

    const notify = (mes, type) => {
        if (type === 'error') {
            toast.error(mes)
        }else if (type === 'success') {
            toast.success(mes)
        }
    };

    const addData = () => {
        localStorage.setItem('items',JSON.stringify([...data]))
        // setState([data])
        setState([...data])
        notify("تم الاضافة بنجاح ", 'success')
    }

    const deleteAll = () => {
        localStorage.removeItem('items')
        data.splice(0, data.length)
        setState([])
        notify("تم ازالة الاسئلة ", 'success')
    }

    const newDelete = (items) => {
        localStorage.setItem('items',JSON.stringify([...items]))
        setState([...items])
        if (items <= 0) {
            deleteAll()
        }
        notify("تم حذف السؤال بنجاح ", 'success')
    }

    return (
        <div className="font p-5 text-center color-body">
        <Container>
            <Row className="">
                <Col sm='4'>
                    <div className="fs-4">أسئلة وأجوبة شائعة</div>
                </Col>
                <Col sm='8'>
                <AnswerQuestion onAdd={addData} notify={notify}/>
                <AcordAnswer info={data} onDelete={newDelete}/>
                {
                    localStorage.getItem('items') != null  ? (
                        <button 
                        className="button-style w-100 my-3" 
                        onClick={deleteAll}>مسح الكل</button>
                        )
                    : null
                }
                </Col>
            </Row>
            <ToastContainer />
        </Container>
        </div>
    )
}
export default App;