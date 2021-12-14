import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: 'rating', label: 'Hoogst aantal sterren' },
    { value: 'rating_reverse', label: 'Laagst aantal sterren' },
    { value: 'strawberry', label: 'Naa2m' },
    { value: 'vanilla', label: 'Dag' }
]

const ICTSelect = () => {
    return (
        <form className='Form'>
            <div>
                <div className='Form--field'>
                    <Select options={options} instanceId={"as25jbba422apq"} />
                </div>
            </div>
        </form>
    )
}

export default ICTSelect