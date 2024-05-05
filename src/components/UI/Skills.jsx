export default function Skills(){
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'SQL',
        'PostgreSQL',
        'MongoDB',
        'React'
    ];

    const listItems = skills.map(skill => <li>{skill}</li>);
    return(
        <ul>{listItems}</ul>
    )
}