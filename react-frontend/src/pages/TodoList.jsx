import React, {useState, useEffect} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ClipLoader from "react-spinners/ClipLoader";
import ClearIcon from '@material-ui/icons/Clear';
import axios from 'axios';
import swal from 'sweetalert';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const TodoList = () => {

    const [loading,setLoading] = useState(false);
    const [editLoading,setEditLoading] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [addvalue, setAddvalue] = useState('');
    const [modalInputVal, setModalInputVal] = useState('');
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('access');
        const config = {
            headers :{
                Authorization : `Bearer ${token}`
            }
        }
        axios.get(`${process.env.REACT_APP_URL}/main/todo/`,config)
        .then(res => {
            setTodos(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    },[])

    const handleChange = (e) => {
        setAddvalue(e.target.value)
    }

    const addItem = async(e) => {

        setLoading(true)

        const token = localStorage.getItem('access');
        const config = {
            headers :{
                Authorization : `Bearer ${token}`
            }
        }

        const data = {
            'todo_text':addvalue
        }

        await axios.post(`${process.env.REACT_APP_URL}/main/todo/`,data,config)

        .then (res => {
            setTodos(initVal => {
                return [res.data,...initVal]
            })
            setLoading(false)
            setAddvalue('')

        })
        .catch(err => {
            setLoading(false)
        })
    }

    const deleteFunc = async(e) => {
        const todoId = e.target.dataset.id;

        if (todoId === undefined)
            return;

        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this item?",
            icon: "warning",
            dangerMode: true,
          })
      
          .then(yesDelete => {
            if (yesDelete) {
      
              const token = localStorage.getItem('access');
              const config = {
                  headers :{
                      Authorization : `Bearer ${token}`
                  },
                  data : {
                    'todo_id':todoId
                  }
              }

              axios.delete(`${process.env.REACT_APP_URL}/main/todo/`,config)
              .then (res => {
                
                swal("Deleted!", "Item has been deleted", "success")
                const afterDeleteList = todos.filter(item => item.id !== parseInt(todoId) )
                console.log(afterDeleteList)
                setTodos(afterDeleteList)

            })
            .catch (err => {
                swal("Sorry!", "Couldn't perform the given operation", "error");
            })
            }
          })
    }

    const modalInputChange = (e) => {
        setModalInputVal(e.target.value)

    }

    const editFunc = (e) => {
        const todoId = e.target.dataset.id
        if (todoId === undefined)
            return;
        
        setEditLoading(true);
        const token = localStorage.getItem('access');
        const config = {
            headers :{
                Authorization : `Bearer ${token}`
            }
        }

        const data = {
            'todo_id':todoId,
            'todo_text':modalInputVal
        }

        axios.patch(`${process.env.REACT_APP_URL}/main/todo/`,data,config)
        .then(res => {
            const responseList = [res.data]
            const afterEditList = todos.filter(item => item.id !== parseInt(todoId) )
            setTodos([...responseList,...afterEditList])
            
            swal("Edited!", "Item has been edited", "success")
            .then (res => {
                if(res){
                    setShowModal(false);
                    setEditLoading(false)
                }
            })
        })
        .catch(err => {
            swal("Sorry!", "Couldn't perform the given operation", "error");
            setEditLoading(false)
        })
    }

    return (

        <div className="todo_wrapper">

            <div className="todo_form_wrapper">
                <div className="todo_form table_input_search">
                    <input type="text" name="username" className="formStyle todo_input"  style = {{backgroundColor:"rgb(247, 247, 247)"}} 
                    onChange = {handleChange} value = {addvalue} placeholder="Enter the item" autoComplete="off"  required />

                    {
                        !loading ? <button className = "simple_button" 
                        onClick = {addItem} disabled = {addvalue === ''} > Add <ExitToAppIcon /> </button>
                        :
                        <ClipLoader color="rgb(207, 52, 52)" size={60}/>
                    }
                </div>
                
            </div>

            <div className="todo_list">
                
            {
                todos.map((item,index) => {
                    return (
                        <div className="list" key = {index}>
                            <p> {item.todo_text} </p>

                            <Modal 
                                isOpen = {showModal}
                                style={{
                                    overlay: {
                                    backgroundColor: 'rgba(17, 13, 14, 0.507)',

                                    },
                                    content: {
                                    top :'50%',
                                    left :'50%',
                                    right : 'auto',
                                    bottom : 'auto',
                                    marginRight : '-50%',
                                    transform : 'translate(-50%, -50%)',
                                    }
                                }}
                                >   
                                <div className="modal_form">
                                    <button className = "simple_button" onClick = {()=> setShowModal(false)}> <ClearIcon /> </button>
                                    
                                    <input type="text" name="username" className="formStyle"  style = {{backgroundColor:"rgb(247, 247, 247)"}} 
                                    value = {modalInputVal} onChange = {modalInputChange}
                                    placeholder="Enter the item" autoComplete="off"  required />
                                    
                                    {
                                        editLoading ? <ClipLoader color="rgb(207, 52, 52)" size={60}/>
                                        :
                                        <button className = "simple_button" disabled = {modalInputVal === ''} data-id = {item.id} onClick = {editFunc}
                                        > Update <ExitToAppIcon /> </button>
                                    }

                                </div>
                            </Modal> 

                            <div className="todo_buttons">
                                <button className = "todo_button" data-id = {item.id} onClick = {()=> {setShowModal(true); setModalInputVal(item.todo_text)}}> 
                                    <EditIcon style = {{fontSize:"30"}} color = "secondary" 
                                    onClick = {()=> {setShowModal(true); setModalInputVal(item.todo_text)}} /> 
                                </button>
                            
                                <button className = "todo_button" data-id = {item.id} onClick = {deleteFunc} > 
                                    <DeleteOutlineIcon style = {{fontSize:"30"}} color = "primary" data-id = {item.id} onClick = {deleteFunc}/> 
                                </button>
                            </div>
                        </div>
                    )
                })
            }

            </div>


        </div>
    )
}

export default TodoList