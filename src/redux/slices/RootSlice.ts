import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "name",
        breed: "breed",
        age: "age",
        gender: "gender",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseBreed: (state, action) => { state.breed = action.payload },
        chooseAge: (state, action) => { state.age = action.payload },
        chooseGender: (state, action) => {state.gender = action.payload}
        
    }
})

export const reducer = rootSlice.reducer;
export const { chooseAge, chooseBreed, chooseGender, chooseName } = rootSlice.actions