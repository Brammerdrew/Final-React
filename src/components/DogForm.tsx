import Button from "./Button"
import Input from "./Input"

import {useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseAge, chooseBreed, chooseGender, chooseName } from "../redux/slices/RootSlice"





interface DogFormProps {
  id?: string[]
}

const DogForm = (props: DogFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch()
    const store = useStore()

    const onSubmit = (data:any) => {
        console.log(`ID: ${typeof props.id }`)
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.first } ${ props.id }`)
        } else {
            dispatch(chooseName(data.name));
            dispatch(chooseBreed(data.breed));
            dispatch(chooseAge(data.age));
            dispatch(chooseGender(data.gender));

            server_calls.create(store.getState())
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Dog's Name</label>
                    <Input {...register("name")} name="name" placeholder="Dog's Name" />
                    </div>
                    <div>
                    <label htmlFor="breed">Breed</label>
                    <Input {...register('breed')} name='breed' placeholder="Breed" />
                    </div>
                    <div>
                    <label htmlFor="age">Age</label>
                    <Input {...register('age')} name='age' placeholder="Age" />
                    </div>
                    <div>
                    <label htmlFor="gender">Gender</label>
                    <Input {...register('gender')} name='gender' placeholder="Gender" />
                    </div>
                    <div className="flex p-1">
                    <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                    >
                        Submit
                    </Button>
                 </div>
            </form>
        </div>
    )
}

export default DogForm