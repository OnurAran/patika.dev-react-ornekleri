import React, { Component, useState } from 'react'

function Users({users}) {

    const [user, setUser] = useState({ name: "", phoneNumber: "" });

    //console.log(user.name)

    //setUser({ ...user, name: props.userName, phoneNumber: props.phoneNumber })


    return (
        <div>


            <ul>
                {
                    users.map((user,index) => (
                        <li key = {index}>{user.name +" "+ user.phoneNumber}</li>
                    ))
                }

            </ul>

        </div>
    )
}




export default Users;