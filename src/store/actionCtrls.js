export const ADD_DATA = 'ADD_DATA'
export const DEL_DATA = 'DEL_DATA'


export const getAddAction = (value)=>({
    type:ADD_DATA,
    value
})

export const getDeltAction = (index)=>({
    type:DEL_DATA,
    index
})