import React, { useState } from 'react'
import Table from '../Table/Table'
import './Form.css'

function Form() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState('')
    const [gender, setgender] = useState('')

    const [cricket, setcricket] = useState(false)
    const [football, setfootball] = useState(false)
    const [gym, setgym] = useState(false)

    const [edit, setedit] = useState(false)

    const [data, setdata] = useState([])

    function hobbyHandler() {
        return (
            cricket || football || gym ?
                <ul>
                    {cricket && <li>Cricket</li>}
                    {football && <li>Football</li>}
                    {gym && <li>Gym</li>}
                </ul> :
                '--Null--'
        )
    }

    const listItems = () => {
        setdata((oldData) => {
            return (
                [...oldData, ({ id: Date.now(), name, email, age, gender, hobby: hobbyHandler() })]
            )
        })
        setname('')
        setemail('')
        setage('')
    }
    console.log(data)

    // const post = data.map((datas) => {
    //     return (
    //         <div key={datas.id}>
    //             <Table name={datas.name} email={datas.email} age={datas.age} gender={datas.gender} hobbies={datas.hobby} />
    //         </div>
    //     )
    // })

    // const show = data.map((dataaa) => {
    //     return (
    //         <tbody key={dataaa.key}>
    //             <td>{data.map((dataaa) => dataaa.name)}</td>
    //             <td>{data.map((dataaa) => dataaa.email)}</td>
    //             <td>{data.map((dataaa) => dataaa.age)}</td>
    //             <td>{data.map((dataaa) => dataaa.gender)}</td>
    //             <td>{data.map((dataaa) => dataaa.hobby)}</td>
    //         </tbody>

    //     )
    // })

    function deleteHandler() {
        const list = [...data]
        list.splice(list.id, 1)
        setdata(list)
    }

    // function editHandler() {
    //     const editData = data.map((editmap) =>
    //         <div key={editmap.id}>
    //             {setname(editmap.name),
    //                 setemail(editmap.email),
    //                 setage(editmap.age)}
    //         </div>
    //     )
    //     return (
    //         editData
    //     )
    // }

    const editHandler = () => {
        const editData = data.map((editmap) => (
            <div key={editmap.id}>
                {setname(editmap.name),
                setemail(editmap.email),
                setage(editmap.age)}
            </div>
        ))
        return(editData)
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Name:</label><br />
                <input type='text' required={true} autoComplete='false' onChange={(e) => setname(e.target.value)} value={name}></input> <br />

                <label>Email:</label><br />
                <input type='email' required={true} autoComplete='false' onChange={(e) => setemail(e.target.value)} value={email}></input> <br />

                <label>Age:</label><br />
                <input type='number' required={true} autoComplete='false' onChange={(e) => setage(e.target.value)} value={age}></input> <br />
                <br />
                <input type='radio' name='gender' onChange={(e) => setgender(e.target.value)} value='Male'></input>
                <label>Male</label>

                <input type='radio' name='gender' onChange={(e) => setgender(e.target.value)} value="Female"></input>
                <label>Female</label>
                <br />
                <br />
                Your Hobbies
                <br />
                <input type='checkbox' checked={cricket} onChange={() => setcricket(!cricket)} />Cricket
                <input type='checkbox' checked={football} onChange={() => setfootball(!football)} /> Football
                <input type='checkbox' checked={gym} onChange={() => setgym(!gym)} /> Gym
                <br />
                <br />
                <button onClick={listItems}>Submit</button>
            </form>

            <table>
                <Table />
                <tbody>
                    {data.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.age}</td>
                            <td>{contact.gender}</td>
                            <td>{contact.hobby}</td>
                            <td>
                                <button onClick={editHandler}>Edit</button>
                                <button onClick={deleteHandler}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Form
