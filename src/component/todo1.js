import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { falist } from '@fortawesome/free-solid-svg-icons';


const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])
    const [edititem, setEditItem] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [specificind, setindex] = useState(0)

    const additem = () => {
        if (!inputData) {
            alert("please write something first")
            return
        } else {
            setItems([...items, inputData]);
            setInputData('');
            setShowModal(false);
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

    // const edittodo = (specificind) => {

    //     let editnew = [...items]

    //     editnew[specificind] = edititem

    //     setEditItem(editnew)

    //     setEditItem('')
    //     setindex('')
    //     setshowmodal(false)

    // }

    const editTodo = () => {
        const updatedItems = items.map((item, index) =>
            index === specificind ? edititem : item
        );
        setItems(updatedItems);
        setEditItem('');
        setindex(null);
        setShowModal(false);
    };

    const openModalEdit = (index) => {
        setEditItem(items[index]);
        setindex(index);
        setShowModal(true);
    };
    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            {/* <div className='main'>
                <div className='todo-box'>
                    <div className='todo-head'>
                        <div className='list-btn'><button>list</button></div>
                        <div className='checklist'><button>check</button></div>
                    </div>
                    <div className='todo-creation'>
                        <div className='todo-input'>
                            <input type="text" placeholder='write your todo' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        </div>
                        <div className='todo-button'>
                            <button onClick={additem} contentEditable="false">+</button>
                        </div>
                    </div>

                    

                    <div className='showItem'>

                    {
                        items.map((elem, ind) => {
                            return (
                                <div>

                                    
                                            <div className="eachitem" key={ind}>
                                                <h4 contentEditable="false">{elem}</h4>
                                                <button className='del' contentEditable="false" onClick={() => delTodo(ind)}>del</button>
                                                <button className='edit' contentEditable="false" onClick = {() =>{ openModal(ind)  }}>edit</button>
                                            </div>
                                    
                                    

                                </div>

                            )
                        })

                    }
                    </div>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Todo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='todo-creation-new'>
                                <div className='todo-input-new'>
                                    <input
                                        type='text'
                                        placeholder='Write your todo'
                                        value={edititem}
                                        onChange={(e) => setEditItem(e.target.value)}
                                    />
                                </div>
                                <div className='todo-button-new'>
                                    <button onClick={editTodo} contentEditable="false">Save</button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>

                    


    



                    <div className='remove' >
                        <button contentEditable="false" className='remove-btn' onClick={removeList}>Remove list</button>
                    </div>

                </div>
            </div> */}

            <div className="main">
                <div className="todoapp">
                    <div className='tab'>
                        <div><button>a</button></div>
                        <div><button>b</button></div>
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
                                    <button onClick={additem} contentEditable="false">Save</button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <div className='add'>
                        <button onClick={() => { openModal() }} >+</button>
                    </div>

                    <div className='todoitem'>
                        {
                            items.map((elem, ind) => {
                                return (
                                    <div>

                                        <div className='todo-item'>
                                            <div className='chkbox'><input type="checkbox" /></div>
                                            <div className='item'>
                                                <h4>{elem}</h4>
                                                <button className='del'>del</button>
                                                <button className='edit' onClick={()=>openModalEdit()}>edit</button>
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







{/* <div className='showItem'>

                        {
                            items.map((elem, ind) => {
                                return (
                                    <div>

                                        
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
                                            ) 
                                        

                                    </div>

                                )
                            })

                        }
                    </div> */}




{/* <div className='showItem'>

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
                    </div> */}









// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const Todo = () => {
//     const [inputData, setInputData] = useState('');
//     const [items, setItems] = useState([]);
//     const [editItem, setEditItem] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(null);

//     const addItem = () => {
//         if (inputData) {
//             setItems([...items, inputData]);
//             setInputData('');
//         }
//     };

//     const removeList = () => {
//         setItems([]);
//     };

//     const delTodo = (index) => {
//         setItems(items.filter((_, ind) => ind !== index));
//     };

//     const editTodo = () => {
//         const updatedItems = items.map((item, index) =>
//             index === currentIndex ? editItem : item
//         );
//         setItems(updatedItems);
//         setEditItem('');
//         setCurrentIndex(null);
//         setShowModal(false);
//     };

//     const openModal = (index) => {
//         setEditItem(items[index]);
//         setCurrentIndex(index);
//         setShowModal(true);
//     };

//     return (
//         <>
//             <div className='main'>
//                 <div className='todo-box'>
//                     <div className='todo-name'>
//                         <h2>Todo List</h2>
//                     </div>
//                     <div className='todo-creation'>
//                         <div className='todo-input'>
//                             <input
//                                 type='text'
//                                 placeholder='Write your todo'
//                                 value={inputData}
//                                 onChange={(e) => setInputData(e.target.value)}
//                             />
//                         </div>
//                         <div className='todo-button'>
//                             <button onClick={addItem}>+</button>
//                         </div>
//                     </div>

//                     <div className='showItem'>
//                         {items.map((elem, ind) => (
//                             <div className='eachItem' key={ind}>
//                                 <h4>{elem}</h4>
//                                 <button className='del' onClick={() => delTodo(ind)}>
//                                     Del
//                                 </button>
//                                 <button
//                                     className='edit'
//                                     onClick={() => openModal(ind)}
//                                 >
//                                     Edit
//                                 </button>
//                             </div>
//                         ))}
//                     </div>

//                     <Modal show={showModal} onHide={() => setShowModal(false)}>
//                         <Modal.Header closeButton>
//                             <Modal.Title>Edit Todo</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                             <div className='todo-creation'>
//                                 <div className='todo-input'>
//                                     <input
//                                         type='text'
//                                         placeholder='Write your todo'
//                                         value={editItem}
//                                         onChange={(e) => setEditItem(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className='todo-button'>
//                                     <button onClick={editTodo}>Save</button>
//                                 </div>
//                             </div>
//                         </Modal.Body>
//                     </Modal>

//                     <div className='remove'>
//                         <button className='remove-btn' onClick={removeList}>
//                             Remove List
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Todo;

