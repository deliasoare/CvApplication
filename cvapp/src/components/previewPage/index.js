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
                    <div className="mainSection personal">
                        <span className="sectionText">Personal</span>
                        <div class="secondarySection">
                            <p className="cvEmail">Email: {info.personal.email}</p>
                            <p clasprintName="cvAddress">Address: {info.personal.address}</p>
                        </div>
                    </div>
                    {info.education.some(exists) &&
                    <div className="mainSection education">
                        <span className="sectionText">Education</span>
                        <div class="secondarySection">
                            {info.education.map(educationInstance => {
                                return (
                                    <div className="educationPart">
                                        <p className="educationSpec lineUnder">{educationInstance.specialization}</p>                                    <p className="educationInstit minorWriting">{educationInstance.institution}</p>
                                        <p className="educationYears minorWriting">{educationInstance.startYear} - {educationInstance.endYear}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    }
                    {info.workExp.some(exists) &&
                    <div class="mainSection workExperience">
                        <span className="sectionText">Work Experience</span>
                        <div class="secondarySection">
                            {info.workExp.map(workInstance => {
                                return (
                                    <div className="workPart">
                                        <p className="workPosition lineUnder">{workInstance.position}</p>
                                        <p className="workInstit minorWriting">{workInstance.institution}</p>
                                        <p className="workYears minorWriting">{workInstance.startYear} - {workInstance.endYear}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    } 
                    {info.achievements.some(exists) &&
                    <div class="mainSection additionalAchievements">
                        <span className="sectionText">Additional Achievements</span>
                        <div class="secondarySection">
                            <ul>
                                {info.achievements.map(achievement => {
                                    return (
                                        <li className="achievementPart">
                                            {achievement.achievementTitle} -
                                            <span className="minorWriting">{achievement.achievementDescription}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <button onClick={function() {window.print()}} class="printCV">PRINT</button>
        </div>
    )
}