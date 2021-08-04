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
    
    const [data, setdata] = useState([])
    


    const [hobby, sethobby] = useState('')

    function hobbyHandler () {
        return(
            cricket || football?
                <ul>
                    {cricket && <li>Cricket</li>}
                    {football && <li>Football</li>}
                </ul>:
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

    const post = data.map((datas) => {
        return (
            <div key={datas.id}>
                <Table name={datas.name} email={datas.email} age={datas.age} gender={datas.gender} hobbies={datas.hobby} />
            </div>
        )
    })

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Name:</label><br />
                <input type='text' onChange={(e) => setname(e.target.value)} value={name}></input> <br />

                <label>Email:</label><br />
                <input type='email' onChange={(e) => setemail(e.target.value)} value={email}></input> <br />

                <label>Age:</label><br />
                <input type='number' onChange={(e) => setage(e.target.value)} value={age}></input> <br />
                <br />
                <input type='radio' name='gender' onChange={(e) => setgender(e.target.value)} value='Male'></input>
                <label>Male</label>

                <input type='radio' name='gender' onChange={(e) => setgender(e.target.value)} value="Female"></input>
                <label>Female</label>
                <br />
                <br />
                    <input type='checkbox' checked={cricket} onChange={() => setcricket(!cricket)} />Cricket
                    <input type='checkbox' checked={football} onChange={() => setfootball(!football)} /> Football
                <br />
                <br />
                <button onClick={listItems}>Submit</button>
            </form>

            <table>
                <tr>
                    {post}
                </tr>
            </table>
        </div>
    )
}

export default Form
