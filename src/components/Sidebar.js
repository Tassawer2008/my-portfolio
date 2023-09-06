import { Link } from "react-router-dom";

function Sidebar() {
    const sidebarmenuitems = [
        {
            id: "1",
            name: "Persnol Information",
            link: "/persnol-information"
        },
        {
            id: "2",
            name: "Skills",
            link: "/skills"
        },
        {
            id: "3",
            name: "Awards",
            link: "/awards"
        },
        {
            id: "4",
            name: "Experience",
            link: "/experience"
        },
        {
            id: "5",
            name: "Education & Certification",
            link: "/education"
        },
        {
            id: "6",
            name: "Services",
            link: "/services"
        }
    ];
    const sidebarmenulist = sidebarmenuitems.map((sidebarmenuitem) =>
        <li key={sidebarmenuitem.id} className={`sidebarmenuitem${sidebarmenuitem.id} py-1`}>
            <Link to={sidebarmenuitem.link}>{sidebarmenuitem.name}</Link>
        </li>
    )
    return (
        <div className="sidebar py-3">
            <div className="logo_menu">
                <Link to="/"> <img src="../logo-symbol-dark.png" alt="logo" /></Link>
            </div>
            <div className="sidebarmenulist py-3">
                <ul className="m-0 list-unstyled">
                    {sidebarmenulist}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;