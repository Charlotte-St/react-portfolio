export default function Nav({ links }){
    return (
        <ul className="nav nav-tabs">
            {links.map((link)=> link)}
        </ul>
    )
}