function Achievement() {
    return (
        <ul className="addAchievements field">
            <li>
                <label htmlFor="achievementTitle">Title</label>
                <input id="achievementTitle"></input>
            </li>
            <li>
                <label htmlFor="description">Description</label>
                <textarea rows="2" cols="38" id="description"></textarea>
            </li>
        </ul>
    );
}
export default function AdditionalAchievements() {
    return (
        <fieldset>
            <legend>Additional Achievements</legend>
            <Achievement />
            <button class="addAchievement addBtn">+</button>

        </fieldset>
    );
}