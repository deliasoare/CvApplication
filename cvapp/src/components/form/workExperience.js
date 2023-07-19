import { useState, useEffect } from 'react';

function Experience({workExp, setWorkExp, index}) {
    const [institution, setInstitution] = useState('');
    const [position, setPosition] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');

    const changeCurrentExperience = () => {
        let aux = workExp;
        if (institution === '' && position === '' && startYear === '' && endYear === '' )
            aux[index] = '';
        else
            aux[index] = {institution, position, startYear, endYear};
        setWorkExp(aux);
    }
    const changeInstitution = (e) => {
        setInstitution(e.target.value);
    }
    const changePosition = (e) => {
        setPosition(e.target.value);
    }
    const changeStartYear = (e) => {
        setStartYear(e.target.value);
    }
    const changeEndYear = (e) => {
        setEndYear(e.target.value);
    }
    useEffect(() => {
        changeCurrentExperience();
    }, [institution, position, startYear, endYear]);

    return (
        <ul className="educationInfo field">
            <li>
                <label htmlFor="institution">Institution</label>
                <input type="text" id="institution" onChange={changeInstitution} value={institution}></input>
            </li>
            <li>
                <label htmlFor="position">Position</label>
                <input type="text" id="position" onChange={changePosition} value={position}></input>
            </li>
            <li>
                <label htmlFor="startYear">Starting year</label>
                <input type="number" onChange={changeStartYear} value={startYear} id="startYear" min="1900" max="2099" step="1" ></input>                
                </li>
            <li>
                <label htmlFor="endYear">Ending year</label>
                <input type="number" onChange={changeEndYear} value={endYear} id="endYear" min="1900" max="2099" step="1" ></input>
            </li>
        </ul>
    );
}
export default function WorkExperience({workExp, setWorkExp}) {
    const [fieldIndex, setFieldIndex] = useState(1);
    const [fields, setFields] = useState([<Experience workExp={workExp} setWorkExp={setWorkExp} index={0}/>]);

    const addField = (e) => {
        e.preventDefault();
        if (fields.length < 5) {
            setFields(fields.concat(<Experience workExp={workExp} setWorkExp={setWorkExp} index={fieldIndex} />))
            setFieldIndex(fieldIndex + 1);
        }
    }
    return (
        <fieldset>
            <legend>Work experience</legend>
            {fields}
            <button onClick = {addField} class="addEducation addBtn">+</button>
        </fieldset>
    );
}