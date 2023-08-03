
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    fullName: "",
    courses: [],
    profileImage: "",
    role: "",
    email:""
}
const userDataSlice = createSlice({
    name:"user slice",
    initialState,
    reducers:{
        setUserData: (state,action)=>{
            state.email=action.payload.email
            state.fullName= action.payload.fullName
            state.courses= action.payload.courses
            state.profileImage= action.payload.profileImage
            state.role= action.payload.role
        }
    }
})

export const {setUserData} = userDataSlice.actions

export default userDataSlice.reducer