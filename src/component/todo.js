import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])
    // const [edititem, setEditItem] = useState('')
    const [showModal, setShowModal] = useState(false)
    // const [specificind, setindex] = useState(0)
    const [showcheckedonly, setshowcheckedonly] = useState(false)
    const [deleteditems, setdeleteditems] = useState([])
    // const [timestamp, setTimestamp] = useState("")
    // const [canEdit,setCanEdit] = useState(false)




    // reteriving from local storage

    useEffect(() => {
        const gettedItems = localStorage.getItem('items')
        if (gettedItems) {
            setItems(JSON.parse(gettedItems))
        }

    }, [])
    useEffect(() => {
        const getteddeleteditems = localStorage.getItem('deleted')
        if (getteddeleteditems) {
            setdeleteditems(JSON.parse(getteddeleteditems))
        }

    }, [])



    // storing into local storage 
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
        console.log("data is updated")
    }, [items]);

    useEffect(() => {
        localStorage.setItem('deleted', JSON.stringify(deleteditems))
    }, [deleteditems]);





    const additem = () => {
        if (!inputData) {
            alert("please write something first")
            return
        } else {
            const newtodo = {
                text: inputData,
                checked: false,
                editing: false,
                timeCreation: new Date().toLocaleString(),
                timeDeletion:0
            }

            setItems([...items, newtodo]);
            setInputData('');
            setShowModal(false);
        }

    }


    const delTodo = (ind) => {
        const confirmDelete = window.confirm("are you sure you want to delete it")
        if (confirmDelete) {
            const newitems = items.filter((item, index) => index !== ind)
            const deleteitem ={...items[ind],timeDeletion: new Date().toLocaleString()}
            setItems(newitems)
            setdeleteditems([...deleteditems, deleteitem])
            console.log(items[ind].timeDeletion)

        }
    }

    const undo = (ind) => {
        const restoreditem = deleteditems[ind]
        const {timeDeletion,...restoredwithouttime} = restoreditem
        setItems([...items, restoredwithouttime])
        const updatedDeletedItems = deleteditems.filter((elem, key) => ind !== key)
        setdeleteditems(updatedDeletedItems)
    }

    // const editTodo = () => {
    //     const updatedItems = items.map((item, index) =>
    //         index === specificind ? { ...item, text: edititem } : item
    //     );
    //     // console.log(edititem)
    //     setItems(updatedItems);
    //     setEditItem('');
    //     setindex(null);
    //     setShowModalEdit(false);
    // };

    // const openModalEdit = (index) => {
    //     setEditItem(items[index].text);
    //     setindex(index);
    //     setShowModalEdit(true);
    // };



    const handleCheckboxChange = (index) => {
        const updatedItems = items.map((item, idx) =>
            idx === index ? { ...item, checked: !item.checked } : item
        );
        console.log(updatedItems)
        setItems(updatedItems);
    };


    const showcompletedtask = () => {
        setshowcheckedonly(true)
    }



    const showalltask = () => {
        setshowcheckedonly(false)
    }


    const handleEditclick = (index) => {
        const changeedit = items.map((elem, key) => key === index ? { ...elem, editing: true } : elem)
        setItems(changeedit)

    }
    const handleEditChange = (index, newText) => {
        const changedEdit = items.map((elem, key) => key === index ? { ...elem, text: newText } : elem)
        setItems(changedEdit)
    }

    const handleBlur = (index) => {
        const changeagain = items.map((elem, key) => key === index ? { ...elem, editing: false, timeCreation: new Date().toLocaleString() } : elem)
        setItems(changeagain)

    }


    const filteredItems = showcheckedonly ? items.filter(elem => elem.checked) : items;

    return (
        <>
            <div className="main">
                <div className="todoapp">
                    <div className='tab'>
                        <div className='list'><button onClick={() => showalltask()}><i class="fa fa-list"></i></button></div>
                        <div><button onClick={() => showcompletedtask()}><i className='fas fa-check-circle'></i></button></div>
                    </div>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Todo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='todo-creation-new'>
                                <div className='todo-input-new'>
                                    <input
                                        type='text'
                                        placeholder='Write your todo'
                                        value={inputData}
                                        onChange={(e) => setInputData(e.target.value)}
                                    />
                                </div>
                                <div className='todo-button-new'>
                                    <button onClick={additem}>Save</button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <div className='add'>
                        <button onClick={() => setShowModal(true)} >+</button>
                    </div>

                    <div className='todoitem'>
                        {
                            filteredItems.map((elem, ind) => {
                                return (
                                    <div>

                                        <div className='todo-item'>
                                            <div className='chkbox'><input type="checkbox" checked={elem.checked} onChange={() => handleCheckboxChange(ind)} /></div>
                                            <div className='item'>
                                                {
                                                    elem.editing ? (
                                                        <input type="text" value={elem.text} onChange={(e) => handleEditChange(ind, e.target.value)} onBlur={() => handleBlur(ind)} autoFocus />
                                                    ) : (
                                                        <>
                                                            <h4>{elem.text}</h4>
                                                            <button className='del' onClick={() => delTodo(ind)}><i className='fas fa-trash-alt'></i></button>
                                                            <button className='edit' onClick={() => handleEditclick(ind)}><i className="fas fa-edit"></i></button>
                                                            <button data-toggle="tooltip" data-placement="top" title={elem.timeCreation} className='info'><i className="fas fa-info-circle"></i></button>
                                                        </>

                                                    )
                                                }

                                                {/* <button className='edit' onClick={() => { openModalEdit(ind) }}><i className="fas fa-edit"></i></button> */}


                                            </div>
                                        </div>



                                    </div>

                                )
                            })

                        }


                    </div>

                </div>

                <div className='deleted-screen'>
                    <h2>Deleted-Items</h2>

                    <div className='todoitem'>
                        {
                            deleteditems.map((elem, ind) => {
                                return (
                                    <div>

                                        <div className='todo-item'>
                                            <div className='chkbox'><input type="checkbox" checked={elem.checked} /></div>
                                            <div className='item'>
                                                <h4>{elem.text}</h4>
                                                <button className='del' onClick={() => undo(ind)}><i className='fas fa-undo'></i></button>
                                                <button data-toggle="tooltip" data-placement="top" title={`created:${elem.timeCreation} deleted:${elem.timeDeletion}`} className='info'><i className="fas fa-info-circle"></i></button>

                                            </div>
                                        </div>



                                    </div>

                                )
                            })

                        }


                    </div>

                </div>


            </div>
        </>
    )
}


export default Todo






