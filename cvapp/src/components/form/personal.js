
export default function PersonalDescription() {
    return (
        <fieldset>
            <legend>Personal</legend>
            <ul className="personalInfo field">
                <li>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name"></input>
                    </li>
                    <li>
                        <label htmlFor="emailAddress">Email address</label>
                        <input type="text" id="emailAddress"></input>
                    </li>
                    <li>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address"></input>
                    </li>
                <li>
                    <label htmlFor="personalDescription">Personal description</label>
                    <textarea rows="2" cols="38" id="personalDescription"></textarea>
                </li>
            </ul>
        </fieldset>
    );
}