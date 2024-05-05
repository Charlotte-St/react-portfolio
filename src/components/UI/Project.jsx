export default function Project(){
    const projects = [
        {key: 'a', title: 'Book Lister', image: './src/assets/book-lister.gif', github:'https://github.com/Charlotte-St/book-lister', live: 'https://project-2-2nvv.onrender.com/'},
        {key: 'b', title: 'Tech Blog', image: '', github:'', live: ''},
        {key: 'c', title: 'Note Taker', image: './src/assets/note-taker-app.png', github:'https://github.com/Charlotte-St/note-taker', live: 'https://note-taker-g07d.onrender.com/'},
        {key: 'd', title: 'Weather Dashboard', image: './src/assets/weather-dashboard.png', github:'https://github.com/Charlotte-St/weather-dashboard', live: 'https://charlotte-st.github.io/weather-dashboard/'},
        {key: 'e', title: 'Workday Scheduler', image: './src/assets/Work Day Scheduler Screenshot.png', github:'https://github.com/Charlotte-St/work-day-scheduler', live: 'https://charlotte-st.github.io/work-day-scheduler/'},
        {key: 'f', title: 'Timed Coding Quiz', image: './src/assets/timed-coding-quiz.png', github:'https://github.com/Charlotte-St/timed-coding-quiz', live: 'https://charlotte-st.github.io/timed-coding-quiz/'}
    ];

    return (
        projects.map((project) => (
            <div className="card project-card" key={project.key}> 
                <img className="card-img-top" src={project.image} alt={project.title} />
                <div className="card-body">
                    {project.title}
                </div>
                <div className="card-footer">
                    <a href={project.github} target="new">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1200 1200"><path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m0 65.332c295.289 0 534.668 239.379 534.668 534.668S895.289 1134.668 600 1134.668S65.332 895.289 65.332 600S304.711 65.332 600 65.332M334.644 221.924c-15.228 44.26-20.507 92.298-6.885 134.253c-16.457 18.264-29.235 39.243-38.379 62.988c-24.371 77.026-18.418 175.425 34.937 234.961c18.743 20.548 44.172 37.441 76.172 50.684c31.999 13.241 73.127 21.688 123.413 25.343c-33.751 15.771-57.543 25.406-65.846 60.277c-37.646 25.156-83.427 19.153-116.602-8.203c-26.217-19.143-38.094-53.164-67.163-65.771c-1.828-1.826-7.539-3.188-17.139-4.103c-9.6-.913-17.146 1.811-22.632 8.203c-2.743 2.739-2.541 5.666.659 8.862c22.006 17.897 43.187 36.867 55.591 59.619c11.886 24.657 24.188 42.711 36.987 54.126c35.507 23.993 83.126 36.476 124.806 21.24c-4.86 29.329 8.252 75.13-1.393 101.367c-3.658 7.306-8.89 13.71-15.747 19.188c-6.111 5.962-25.06 13.42-21.24 22.56c1.828 4.108 8.219 6.631 19.189 7.544c24.151-.616 48.193-10.382 62.402-29.443c5.028-6.85 7.544-15.774 7.544-26.733V846.607c0-12.785 2.717-21.913 8.203-27.394c5.484-5.479 11.471-9.16 17.87-10.985v147.948c0 12.785-1.155 23.753-3.441 32.886c-2.286 9.134-4.324 15.536-6.152 19.189c-4.197 7.039-12.221 13.535-12.378 21.899c0 2.738 1.635 4.305 4.834 4.761c24.021-1.042 51.889-15.133 61.67-34.938c7.771-16.438 11.646-33.736 11.646-52.002V802.734h30.176v145.238c0 18.266 4.149 35.563 12.378 52.002s21.962 27.002 41.162 31.567c10.057 2.74 16.85 3.826 20.508 3.369c3.657-.457 5.291-2.021 4.834-4.761c-2.202-8.299-6.791-15.397-11.646-21.899c-6.4-8.219-9.596-25.591-9.596-52.075V808.229c6.4 1.825 12.588 5.507 18.53 10.985c5.942 5.479 8.862 14.607 8.862 27.394v112.279c0 10.959 2.515 19.885 7.544 26.733c15.283 19.437 38.314 29.297 62.401 29.443c10.973-.913 17.361-3.436 19.189-7.544c1.828-4.109.47-7.516-4.102-10.255s-10.281-6.824-17.14-12.305c-6.857-5.479-12.09-11.884-15.747-19.188c-4.104-47.109-.104-97.608-3.441-145.239c-6.589-51.979-26.597-69.079-66.504-88.989c47.543-3.653 86.633-12.376 117.261-26.074c91.558-44.484 116.875-113.258 117.261-205.443c-1.444-59.33-18.57-111.086-57.642-150.732c5.484-21.004 7.12-42.867 4.834-65.698c-2.286-22.831-7.115-43.405-14.43-61.67c-33.824 1.826-62.174 8.635-85.033 20.508c-22.857 11.873-39.31 21.957-49.365 30.176c-81.016-18.393-167.743-18.503-245.436 2.71c-39.748-32.517-89.018-50.632-135.784-53.396"/></svg>
                    </a>
                    <a href={project.live} target="new">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 56 56"><path fill="currentColor" d="M28.023 51.273c12.727 0 23.25-10.546 23.25-23.273C51.274 15.297 40.727 4.727 28 4.727S4.727 15.297 4.727 28c0 12.727 10.57 23.273 23.296 23.273m-6.75-35.414c1.383-3.492 3.282-6 5.368-6.773v7.312a34.078 34.078 0 0 1-5.368-.539m8.063-6.773c2.086.773 4.008 3.281 5.367 6.773a33.77 33.77 0 0 1-5.367.54Zm4.945.656c2.508.867 4.782 2.203 6.68 3.961c-1.031.586-2.227 1.078-3.563 1.5c-.843-2.18-1.922-4.031-3.117-5.46m-19.265 3.961a19.54 19.54 0 0 1 6.703-3.96c-1.219 1.429-2.274 3.28-3.14 5.46c-1.313-.422-2.509-.914-3.563-1.5m24.609 12.938c-.117-3.258-.61-6.282-1.383-8.953c1.758-.54 3.305-1.22 4.617-2.016c2.485 3 4.102 6.797 4.383 10.969Zm-30.867 0a19.049 19.049 0 0 1 4.383-10.97c1.289.798 2.859 1.477 4.593 2.017c-.773 2.671-1.242 5.695-1.359 8.953Zm20.578 0v-7.547a36.856 36.856 0 0 0 6.234-.727a36.181 36.181 0 0 1 1.29 8.274Zm-10.195 0a33.778 33.778 0 0 1 1.289-8.274c1.922.399 4.03.656 6.21.727v7.547ZM8.758 29.336h7.617c.094 3.305.586 6.398 1.36 9.094c-1.712.539-3.258 1.195-4.547 1.992a19.289 19.289 0 0 1-4.43-11.086m10.36 0h7.523v7.687c-2.18.07-4.29.305-6.211.727c-.727-2.531-1.196-5.414-1.313-8.414m10.218 7.687v-7.687h7.523c-.093 3-.562 5.883-1.289 8.414c-1.945-.422-4.031-.656-6.234-.727m8.906 1.407c.797-2.696 1.266-5.79 1.383-9.094h7.617a18.918 18.918 0 0 1-4.43 11.086c-1.289-.774-2.835-1.453-4.57-1.992m-16.969 1.828a34.078 34.078 0 0 1 5.368-.54v7.313c-2.086-.773-3.985-3.281-5.368-6.773m8.063-.54c1.945.048 3.727.235 5.367.54c-1.36 3.492-3.281 6-5.367 6.773Zm-14.25 2.65a19.059 19.059 0 0 1 3.492-1.454c.844 2.11 1.852 3.89 3.024 5.32a19.088 19.088 0 0 1-6.516-3.867m22.312-1.454c1.313.398 2.485.89 3.516 1.477a19.189 19.189 0 0 1-6.539 3.867c1.172-1.43 2.203-3.235 3.023-5.344"/></svg>

                    </a>
                </div>
            </div>
            )
        )
    )
}