import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (n: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string | null>('')

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(event.currentTarget.value)  //проверка если имя нормальное set-аем в name и очещаем ошибку иначе в error  
    }

    const addUser = () => { //нажатие на кнопку
        /* alert(`Hello ${name} !`) */ //здороваемся с юзером
        console.log(name);
        if (name.trim() !== '') {
            addUserCallback(name)//по нажатию на кнопку содержимое отправляем в users
            setName(' ')
        } else {
            setError("name is required");
        }
    }

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addUser();
        }
    }

    const totalUsers = users.length
    return (
        <>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
                onKeyPress={onKeyPress}
            />
        </>
    )
}

export default GreetingContainer
