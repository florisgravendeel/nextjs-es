import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: 'rating', label: 'Hoogst aantal sterren' },
    { value: 'rating_reverse', label: 'Laagst aantal sterren' },
    { value: 'strawberry', label: 'Naam' },
    { value: 'vanilla', label: 'Dag van de week' }
]

const ICTSelect = () => {
    return (
        <Select options={options} />
    )
}

export default ICTSelect