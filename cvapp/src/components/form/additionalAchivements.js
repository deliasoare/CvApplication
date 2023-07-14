import { useState, useEffect } from 'react';

function Achievement({achievements, setAchievements, index}) {
    const [achievementTitle, setAchievementTitle] = useState('');
    const [achievementDescription, setAchievementDescription] = useState('');

    const changeAchievements = () => {
        let aux = achievements;
        aux[index] = {achievementTitle, achievementDescription};
        setAchievements(aux);
    }
    const changeTitle = (e) => {
        setAchievementTitle(e.target.value);
    }
    const changeDesc = (e) => {
        setAchievementDescription(e.target.value);
    }

    useEffect(() => {
        changeAchievements();
    }, [achievementTitle, achievementDescription]);
    return (
        <ul className="addAchievements field">
            <li>
                <label htmlFor="achievementTitle">Title</label>
                <input value={achievementTitle} onChange={changeTitle} id="achievementTitle"></input>
            </li>
            <li>
                <label htmlFor="description">Description</label>
                <textarea value={achievementDescription} onChange={changeDesc} rows="2" cols="38" id="description"></textarea>
            </li>
        </ul>
    );
}
export default function AdditionalAchievements({achievements, setAchievements}) {
    const [fieldIndex, setFieldIndex] = useState(1);
    const [fields, setFields] = useState([<Achievement achievements={achievements} setAchievements={setAchievements} index={0}/>])

    const addField = (e) => {
        e.preventDefault();
        if (fields.length < 10) {
            setFields(fields.concat(<Achievement achievements={achievements} setAchievements={setAchievements} index={fieldIndex}/>))
            setFieldIndex(fieldIndex + 1);
        }
    }
    return (
        <fieldset>
            <legend>Additional Achievements</legend>
            {fields}
            <button onClick={addField} class="addAchievement addBtn">+</button>

        </fieldset>
    );
}