import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name : 'Cart',
    initialState : [],
    reducers  : {
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter((item)=> item.id !== action.payload)
        }
    
    }
})

export const {add, remove} = cardSlice.actions;
export default cardSlice.reducer