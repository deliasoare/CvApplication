import PersonalDescription from './personal';
import Education from './education';
import WorkExperience from './workExperience';
import AdditionalAchievements from './additionalAchivements';
import { useState } from 'react';

export default function Form({ info, activatePreviewPage }){
    const [personal, setPersonal] = useState([]);
    const [education, setEducation] = useState([]);
    const [workExp, setWorkExp] = useState([]);
    const [achievements, setAchievements] = useState([]);

    const updateInfo = () =>{
        info.setInfo({
            personal, education, workExp, achievements
        });
        console.log(personal);
    }
    

    return (
        <form onSubmit={function(e) {
            updateInfo();
            activatePreviewPage();
            return false;
        }}>
            <PersonalDescription setPersonal={setPersonal}/>
            <Education onChangeFields={setEducation}/>
            <WorkExperience onChangeFields={setWorkExp}/>
            <AdditionalAchievements onChangeFields={setAchievements}/>
            <button className="submitForm" > SUBMIT</button> 
        </form>
    );
}