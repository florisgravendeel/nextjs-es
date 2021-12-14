import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: 'rating', label: 'Hoogst aantal sterren' },
    { value: 'rating_reverse', label: 'Laagst aantal sterren' },
    { value: 'name', label: 'Naam' },
    { value: 'day', label: 'Dag' }
]

const ICTSelect = () => {
    return (
        <form className='Form'>
            <div>
                <div className='Form--field'>
                    <Select options={options} instanceId={"as25jbba422apq"} onChange={(e) => console.log(e)}/>
                </div>
            </div>
        </form>
    )
}

export default ICTSelect