import React, { useState } from 'react'
import Affairs from './Affairs'

export type AffairPriorityType = 'low' | 'high' | 'middle' 
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
} 
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs : AffairType[] = [ 
    { _id: 1, name: 'React', priority: 'high' },
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { 
   return filter === 'all' ? affairs : affairs.filter(a=> a.priority === filter)
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { 
    return affairs.filter(a=>a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) 
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) 
    
    return (
        <div>
            <hr />
            homeworks 2
            <Affairs
                filter={filter}
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr />
            <hr />
        </div>
    )
}

export default HW2
