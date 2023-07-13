
export default function StartPage({ onButtonClick }) {
    return (
        <div className="startPage">
            <h1 className="startPageText">Create your perfect CV today with our app!</h1>
            <div class="startPageButton"onClick={onButtonClick} className="startPageButton">
                <a>START</a>
            </div>
        </div>
    )
}