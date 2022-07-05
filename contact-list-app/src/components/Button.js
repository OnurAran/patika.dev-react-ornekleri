import { render } from '@testing-library/react';
import React, { useState } from 'react'
import '../App.css';
import Users from './Users';


function Button(props) {

    const [isPushedButton, setIsPushedButton] = useState(false);
    const [user, setUser] = useState({ name: "", phoneNumber: "" });
    const [userArray, setUserArray] = useState([]);

    const handleSaveClick = (e) => {

        setUser({ ...user, name: props.name, phoneNumber: props.phoneNumber });

        setIsPushedButton(true);

        setUserArray([...userArray,user]);

    }
    console.log(user.name + user.phoneNumber)
    console.log(userArray);

    return (
        <div >


            <div className='button'>
                <button className="button" onClick={handleSaveClick} >Save</button>
            </div>
            <h1>{user.name + user.phoneNumber}</h1>

            <Users users = {userArray} />

        </div>
    )
}

export default Button;