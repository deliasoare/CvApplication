import { useState } from 'react';

function EducationPart() {
    const [institution, setInstitution] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [startYear, setStartYear] = useState(Number(new Date().getFullYear()));
    const [endYear, setEndYear] = useState(Number(new Date().getFullYear()));   

    const changeEducationPart = () => {
        
    }
    const changeInstitution = (e) => {
        setInstitution(e.target.value);
        changeEducationPart();
    }
    const changeSpecialization = (e) => {
        setSpecialization(e.target.value);
        changeEducationPart();
    }
    const changeStartYear = (e) => {
        setStartYear(e.target.value);
        changeEducationPart();
    }
    const changeEndYear = (e) => {
        setEndYear(e.target.value);
        changeEducationPart();
    }
    return (
        <ul className="educationInfo field">
            <li>
                <label htmlFor="institution">Institution</label>
                <input type="text" onChange={changeInstitution} id="institution" value={institution}></input>
            </li>
            <li>
                <label htmlFor="specialization">Specialization</label>
                <input type="text" onChange= {changeSpecialization} id="specialization" value={specialization}></input>
            </li>
            <li>
                <label htmlFor="startYear">Starting year</label>
                <input type="number" onChange={changeStartYear} id="startYear" min="1900" max="2099" step="1" value={startYear}></input>
            </li>
            <li>
                <label htmlFor="endYear">Ending year</label>
                <input type="number" onChange={changeEndYear} id="endYear" min="1900" max="2099" step="1"  value={endYear}></input>
            </li>
        </ul>
    );
}
export default function Education({education, setEducation }) {
    const [edFields, setEdFields] = useState([<EducationPart />]);

    const addField = (e) => {
        e.preventDefault();
        if (edFields.length < 5)
            setEdFields(edFields.concat(<EducationPart />));
    }

    return (
        <fieldset >
            <legend>Education</legend>
            {edFields}
            <button onClick={addField} class="addEducation addBtn">+</button>
        </fieldset>
    );
}