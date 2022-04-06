import React, { useState } from 'react'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType)=> void
    deleteAffairCallback: (id:number)=>void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a:AffairType) => (

        <Affair 
            affair={a}
            key={a._id}  
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    console.log(mappedAffairs);

    const setAll = () => {props.setFilter('all')  } 
    const setHigh = () => {props.setFilter('high')  }
    const setMiddle = () => {props.setFilter('low')  }
    const setLow = () => {props.setFilter('middle') }

    return (
        <div>
            {mappedAffairs}
            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs



/*     const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }
 */
/*     const cnAll = s.button + ' ' + (props.filter === 'all' ? s.activ : '')
    const cnHigh = s.button + ' ' + (props.filter === 'high' ? s.activ : '')
    const cnlow = s.button + ' ' + (props.filter === 'low' ? s.activ : '')
    const cnMiddle = s.button + ' ' + (props.filter === 'middle' ? s.activ : '') */
/*     const setClass =(filter: FilterType) => {        return s.button + (props.filter === filter ? ' ' + set.active : '')
    } */