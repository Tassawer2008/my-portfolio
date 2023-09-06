function Menu(){
    const menulists = [
        {
            id : "1",
            menu_name : "Home",
            menu_link : "#home"
        },
        {
            id : "2",
            menu_name : "About",
            menu_link : "#about"
        },
        {
            id : "3",
            menu_name : "Service",
            menu_link : "#service"
        },
        {
            id : "4",
            menu_name : "Portfolio",
            menu_link : "#portfolio"
        },
        {
            id : "5",
            menu_name : "Blog",
            menu_link : "#blog"
        },
        {
            id : "6",
            menu_name : "Contact",
            menu_link : "#contact"
        }
    ];
    const menulist_items = menulists.map((menulist) =>
        <li key={menulist.id}><a href={menulist.menu_link}>{menulist.menu_name}</a></li>
    ); 
    return (
        <div className="menu">
            <ul>
                {menulist_items}
            </ul>
        </div>
    );
}

export default Menu;