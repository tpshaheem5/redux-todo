    import { createSlice } from '@reduxjs/toolkit'




const TodoSlice = createSlice({
    name:'todo',
    initialState:{
        data:[]
    },
    reducers:{

        add:(state,action)=>{
            state.data =[...state.data,{id:Date.now(),name:action.payload.name}]
        },
        remove:(state,action)=>{
            const id = action.payload.id;
            state.data = state.data.filter((e)=>e.id!==id)
        }
        // update:(state,action)=>{
        //     const {id,name} =action.payload
        //     state.data = state.data.map((e)=> {

        //     })
        // }

    }
})
export const {add,remove} = TodoSlice.actions

export default TodoSlice.reducer