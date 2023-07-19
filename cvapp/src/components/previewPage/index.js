import personIcon from '../../assets/personIcon.svg';

export default function Preview({info}) {
    const exists = (obj) => obj;
    return (
        <div className="previewContainer">
            <div className="CV">
                <div className="cvHeader">
                    <div className="writtenHeader">
                        <p className="cvName">{info.personal.name}</p>
                        <p className="cvDescription"> {info.personal.description}</p>
                    </div>
                    <div className="iconHeader">
                        <img className="icon" src={personIcon}></img>
                    </div>
                </div>
                <div className="cvMain">
                    <div className="personal">
                        Personal
                        <p className="cvEmail">Email: {info.personal.email}</p>
                        <p className="cvAddress">Address: {info.personal.address}</p>
                    </div>
                    {info.education.some(exists) &&
                    <div className="education">
                        Education
                        {info.education.map(educationInstance => {
                            return (
                                <div className="educationPart">
                                    <p className="educationSpec">{educationInstance.specialization}</p>
                                    <p className="educationInstit minorWriting">{educationInstance.specialization}</p>
                                    <p className="educationYears minorWriting">{educationInstance.startYear} - {educationInstance.endYear}</p>
                                </div>
                            );
                        })}
                    </div>
                    }
                    {info.workExp.some(exists) &&
                    <div class="workExperience">
                        Work Experience
                        {info.workExp.map(workInstance => {
                            return (
                                <div className="workPart">
                                    <p className="workPosition">{workInstance.position}</p>
                                    <p className="workInstit minorWriting">{workInstance.institution}</p>
                                    <p className="workYears minorWriting">{workInstance.startYear} - {workInstance.endYear}</p>
                                </div>
                            );
                        })}
                    </div>
                    } 
                    {info.achievements.some(exists) &&
                    <div class="additionalAchievements">
                        Additional achievements
                        {info.achievements.map(achievement => {
                            return (
                                <p className="achievementPart">
                                    {achievement.achievementTitle} - 
                                    <span className="minorWriting">{achievement.achievementDescription}</span>
                                </p>
                            );
                        })}
                    </div>
                    }
                </div>
            </div>
            <button onClick={function() {window.print()}} class="printCV">Print</button>
        </div>
    )
}