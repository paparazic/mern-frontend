import { createSlice } from '@reduxjs/toolkit'

export interface UserInfo {
    name?: string,
    email?: string,
}

export interface RootState {
    auth: {
        userInfo: UserInfo
    }
}

interface authState {
    userInfo: UserInfo | null
}


const initialState:{ userInfo:UserInfo } = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') || '') : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state: authState, action) => {
            console.log(action.payload)
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state: authState) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        }
    }
})

export const { setCredentials, logout} = authSlice.actions
export default authSlice.reducer;