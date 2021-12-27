export default function ListMenuIcon ({onClick}) {
    return (
        <div className="list-icon" onClick={(e) => {e.preventDefault(); onClick && onClick();}}>
            <div className="list-icon-container">
                <div className="list-icon-rectangle"></div>
                <div className="list-icon-circle"></div>
            </div>
            <div className="list-icon-container">
                <div className="list-icon-rectangle"></div>
                <div className="list-icon-circle"></div>
            </div>
            <div className="list-icon-container">
                <div className="list-icon-rectangle"></div>
                <div className="list-icon-circle"></div>
            </div>
        </div>
    );
}