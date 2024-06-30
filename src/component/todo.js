import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])
    const [edititem, setEditItem] = useState('')
    const [showmodal, setshowmodal] = useState(false)
    const [specificind, setindex] = useState(0)

    const additem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData('');
        }

        // if(showmodal === true){
        //     setshowmodal(false)
        // }
    }

    const removeList = () => {
        setItems([])
    }

    const delTodo = (ind) => {

        const newitems = [...items]
        const deleteditems = newitems.splice(ind, 1)
        const newarray = newitems.filter((e) => !deleteditems.includes(e))
        setItems(newarray)
    }

    const edittodo = (specificind) => {

        let editnew = [...items]

        editnew[specificind] = edititem

        setItems(editnew)

        setEditItem('')
        setindex('')
        setshowmodal(false)

    }



    return (
        <>
            <div className='main'>
                <div className='todo-box'>
                    <div className='todo-name'>
                        <h2> Todo List</h2>
                    </div>
                    <div className='todo-creation'>
                        <div className='todo-input'>
                            <input type="text" placeholder='write your todo' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        </div>
                        <div className='todo-button'>
                            <button onClick={additem}>+</button>
                        </div>
                    </div>

                    <div className='showItem'>

                        {
                            items.map((elem, ind) => {
                                return (
                                    <div>

                                        {
                                            showmodal === true ? (
                                                <div className="modal show" showmodal = {false} style={{ display: 'block', position: 'initial' }}>
                                                    <Modal.Dialog>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Edit Todo</Modal.Title>
                                                        </Modal.Header>

                                                        <Modal.Body>
                                                            <div className='todo-creation'>
                                                                <div className='todo-input'>
                                                                    <input type="text" placeholder='write your todo' value={edititem} onChange={(e) => setEditItem(e.target.value)} />
                                                                </div>
                                                                <div className='todo-button'>
                                                                    <button onClick={()=>edittodo(ind)}>+</button>
                                                                </div>
                                                            </div>
                                                        </Modal.Body>

                                                    </Modal.Dialog>
                                                </div>
                                            ) : (
                                                <div className="eachitem" key={ind}>
                                                    <h4>{elem}</h4>
                                                    <button className='del' onClick={() => delTodo(ind)}>del</button>
                                                    <button className='edit' onClick = {() =>{  setshowmodal(true); setindex(ind)}}>edit</button>
                                                </div>
                                            )
                                        }

                                    </div>

                                )
                            })

                        }
                    </div>
                    <div className='remove'>
                        <button className='remove-btn' onClick={removeList}>Remove list</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo
