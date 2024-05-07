export default function Skills(){
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'SQL',
        'PostgreSQL',
        'MongoDB',
        'React',
        'Node.js',
        'Express'
    ];

    const listItems = skills.map(skill => <li>{skill}</li>);
    return(
        <ul>{listItems}</ul>
    )
}