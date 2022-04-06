import React from 'react'
import { AffairType } from './HW2'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number)=>void 
}
 

function Affair(props: AffairPropsType) {
    const deleteCallback = () => (props.deleteAffairCallback(props.affair._id))

    return (
        <div>
            <div>
                <span>{props.affair.name}</span>
                <span> <button onClick={deleteCallback}>X</button></span>
            </div>
        </div>
    )
}

export default Affair
