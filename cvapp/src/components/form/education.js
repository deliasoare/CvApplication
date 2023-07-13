
export default function Education() {
    return (
        <fieldset>
            <legend>Education</legend>
            <ul>
                <li>
                    <label for="institution">Institution</label>
                    <input type="text" id="institution"></input>
                </li>
                <li>
                    <label for="specialization">Specialization</label>
                    <input type="text" id="specialization"></input>
                </li>
                <li>
                    <label for="startYear">Starting year</label>
                    <input type="number" id="startYear" value={Number(new Date().getFullYear())}></input>
                </li>
                <li>
                    <label for="endYear">Ending year</label>
                    <input type="number" id="endYear" value={Number(new Date().getFullYear())}></input>
                </li>
            </ul>
        </fieldset>
    );
}