import PersonalDescription from './personal';
import Education from './education';
import WorkExperience from './workExperience';
import AdditionalAchievements from './.additionalAchivements';
export default function Form({ info }){
    return (
        <form>
            <PersonalDescription />
            <Education />
            <WorkExperience />
            <AdditionalAchievements />
        </form>
    );
}