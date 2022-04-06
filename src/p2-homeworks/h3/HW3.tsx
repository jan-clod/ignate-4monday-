import React, { useState } from 'react'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: number // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => { // need to fix any
        let newUsers = {
            _id: 1,
            name: name
        }
        setUsers([...users,newUsers]) // need to fix
    }
    //можно сделать onKeyPress по энтеру ввод
    return (
        <div>
            <hr />
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback} />
            <hr />
            <hr />
        </div>
    )
}

export default HW3
