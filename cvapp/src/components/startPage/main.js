
export default function StartPage({ onButtonClick }) {
    return (
        <div className="startPage">
            <h1 className="startPageText">Create your perfect CV today!</h1>
            <button onClick={onButtonClick} className="startPageButton">START</button>
        </div>
    )
}