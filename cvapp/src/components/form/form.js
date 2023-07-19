import PersonalDescription from './personal';
import Education from './education';
import WorkExperience from './workExperience';
import AdditionalAchievements from './additionalAchivements';
import { useState } from 'react';

export default function Form({ setInfo, activatePreviewPage }){
    const [personal, setPersonal] = useState([]);
    const [education, setEducation] = useState([]);
    const [workExp, setWorkExp] = useState([]);
    const [achievements, setAchievements] = useState([]);

    const updateInfo = () =>{
        setInfo({
            personal, education , workExp, achievements
        });
    }

    return (
        <form action="" onSubmit={function(e) {
            updateInfo();
            activatePreviewPage();
            e.preventDefault();
        }}>
            <PersonalDescription setPersonal={setPersonal}/>
            <Education education={education} setEducation={setEducation}/>
            <WorkExperience workExp={workExp} setWorkExp={setWorkExp}/>
            <AdditionalAchievements achievements={achievements} setAchievements={setAchievements}/>
            <button className="submitForm"> CONVERT </button> 
        </form>
    );
}