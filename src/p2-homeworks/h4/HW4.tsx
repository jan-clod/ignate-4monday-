import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '  ' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(error) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const [checked2, setChecked2] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked2(e.currentTarget.checked) 

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={s.testSpanError}
                />

                <SuperInputText className={s.blue} // проверьте, рабоет ли смешивание классов
                />

                {/*-------------------------BUTTON---------------------------*/}

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*-----------------------СHECKED-----------------------------*/}

                <SuperCheckbox checked={checked} onChangeChecked={setChecked}>
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                    {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked2} onChange={testOnChange} onChangeChecked={setChecked2}>
                    twoo  text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>
            </div>
            <hr/>
        </div>
    )
}

export default HW4
