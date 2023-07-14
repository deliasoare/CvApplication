import { useState, useEffect } from 'react';
export default function PersonalDescription({ setPersonal }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    
    const updatePersonal = () => {
        setPersonal({
            name, email, address, description
        });
    }
    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeAddress = (e) => {
        setAddress(e.target.value);
    }
    const changeDesc = (e) => {
        setDescription(e.target.value);
    }
    useEffect(() => {
        updatePersonal();
    }, [name, email, address, description])
    return (
        <fieldset>
            <legend>Personal</legend>
            <ul className="personalInfo field">
                <li>
                        <label htmlFor="name">Name</label>
                        <input type="text"  onChange={changeName} id="name" value={name}></input>
                    </li>
                    <li>
                        <label htmlFor="emailAddress">Email address</label>
                        <input type="text" onChange={changeEmail} id="emailAddress" value={email}></input>
                    </li>
                    <li>
                        <label htmlFor="address">Address</label>
                        <input type="text" onChange={changeAddress} id="address" value={address}></input>
                    </li>
                <li>
                    <label htmlFor="personalDescription">Personal description</label>
                    <textarea value={description} onChange={changeDesc} rows="2" cols="38" id="personalDescription"></textarea>
                </li>
            </ul>
        </fieldset>
    );
}