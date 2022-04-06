import React, { ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string | any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: any
    onKeyPress: (event:KeyboardEvent<HTMLInputElement> )=> void
}

const Greeting: React.FC<GreetingPropsType> =
({ name, setNameCallback, addUser, error, totalUsers, onKeyPress } /*деструктуризация пропсов*/) => {
    const inputClass = s.error // если ошибка есть присвоить стиль тернарным

    return (
        <div>
            <input value={name} onKeyPress={onKeyPress}  onChange={setNameCallback} className={error ? inputClass : ''} />
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>
            {error && <div className="error-message">{error}</div>}

            </div>
        </div>
    )
}



export default Greeting
