function Work() {
    return (
        <ul className="educationInfo field">
            <li>
                <label htmlFor="institution">Institution</label>
                <input type="text" id="institution"></input>
            </li>
            <li>
                <label htmlFor="position">Position</label>
                <input type="text" id="position"></input>
            </li>
            <li>
                <label htmlFor="startYear">Starting year</label>
                <input type="number" id="startYear" value={Number(new Date().getFullYear())}></input>                </li>
            <li>
                <label htmlFor="endYear">Ending year</label>
                <input type="number" id="endYear" value={Number(new Date().getFullYear())}></input>
            </li>
        </ul>
    );
}
export default function WorkExperience() {
    return (
        <fieldset>
            <legend>Work experience</legend>
            <Work />
            <button class="addEducation">+</button>
        </fieldset>
    );
}