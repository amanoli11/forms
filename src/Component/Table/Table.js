import React from 'react'
import './Table.css'

function Table(props) {
    return (
        
        <tr>
            <td>{props.name}</td>
            <td> {props.email} </td>
            <td> {props.age} </td>
            <td> {props.gender} </td>
            <td> {props.hobbies} </td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        
    )
}

export default Table
