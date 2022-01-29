export default function AdminNavItem({title, iconTitle, url, isActive=false}) {
    return (
        <li className={`nav-item ${isActive ? 'active' : ''}`} >
            <a className="nav-link" href={url}>
                <i className="material-icons">{iconTitle}</i>
                <p>{title}</p>
            </a>
        </li>
    );
}