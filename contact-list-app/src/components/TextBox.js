import React, { useState } from 'react'
import Button from './Button';
import '../App.css';


function TextBox(props) {


    const [nameTextBoxContent, setNameTextBoxContent] = useState();
    const [phoneNumberTextBoxContent, setphoneNumberTextBoxContent] = useState();

    return (
        <div className='buttons'>
            <input type="text" className="Name"
                placeholder="Name"
                
                onChange={e => setNameTextBoxContent(e.target.value)} />
            <input type="text" className="phoneNumber"
                placeholder="Phone Number"
                
                onChange={e => setphoneNumberTextBoxContent(e.target.value)} />

            <Button name={nameTextBoxContent}
                phoneNumber={phoneNumberTextBoxContent} />
        </div>
    )
}

export default TextBox;