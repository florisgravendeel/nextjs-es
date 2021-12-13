import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: 'rating', label: 'Hoogst aantal sterren' },
    { value: 'rating_reverse', label: 'Laagst aantal sterren' },
    { value: 'strawberry', label: 'Naam' },
    { value: 'vanilla', label: 'Dag' }
]

const ICTSelect = () => {
    return (
        <form className='Form'>
            <div>
                <div className='Form--field'>
                    <Select options={options} />
                </div>
            </div>
        </form>
    )
}

export default ICTSelect