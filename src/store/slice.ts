import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGameData {
    name?:string
    gender?:string
    count:number
    winner:{human:number, mashine:number}
    suit:string
    content:boolean
}
const value:IGameData = {count:0, winner:{human:0, mashine:0}, suit:'', content:false}

const userDataSlice = createSlice({
    name: 'data',
    initialState: value,
    reducers: {
        addUserData(state, action:PayloadAction<Array<string>>) {
            return {
                ...state,
                name: action.payload[0],
                gender: action.payload[1],
                content: true
            }
        },
        addSuitData(state, action:PayloadAction<string>) {
            return {
                ...state,
                suit: action.payload,
            }
        },
        addWinnerData(state, action:PayloadAction<string>) {
            return {
                ...state,
                suit: '',
                winner: action.payload==='human' ? {...state.winner, human:state.winner.human+1} : {...state.winner, mashine:state.winner.mashine+1},
                count: state.count+1
            }
        },

    }
})

export const { addUserData, addSuitData, addWinnerData } = userDataSlice.actions;
export default userDataSlice.reducer