import React from "react";
export interface IGameData {
    name?:string
    gender?:string
    count:number
    winner:{human:number, mashine:number}
    suit:string
    content:boolean
}
//export type TypeSetState<T> = Dispatch<SetStateAction<T>>
export interface ISetState {
    data:IGameData
    setData:(data:IGameData) => void
}
export const value = {count:0, winner:{human:0, mashine:0}, suit:'', content:false}
export const userContext = React.createContext<ISetState>({
    data: value,
    setData: () => {},
})


