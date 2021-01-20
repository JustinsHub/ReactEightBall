import React, {useState} from 'react'

const EightBall = ({answers}) =>{
    const [color, setColor] = useState('black')
    const [message, setMessage] = useState('Think of a Question.')
    return (
        <>
        {answers.map(a => {return (a.msg)})}
        </>
    )
}

export default EightBall