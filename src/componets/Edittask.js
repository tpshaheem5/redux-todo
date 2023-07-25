import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { update } from '../Redux/TodoSlice';






function Edittask() {
    const editRef = useRef()
    const navigate  = useNavigate();
    const {id} = useParams()

    console.log(id);
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todo.data)
    const edittask = list.filter((e)=>e.id ==id)

    const handleEdit = (id)=>{
        const updatetask = editRef.current.value
        console.log(updatetask);
        dispatch(update({id:id,name:updatetask}))
        navigate("/")
    }
  return (
    <div>
        <label>Edit Task </label>
        <input type='text' defaultValue={edittask[0].name} ref={editRef}/>
        <button onClick={()=>handleEdit(edittask[0].id)}>Okk</button>
    </div>
  )
}

export default Edittask