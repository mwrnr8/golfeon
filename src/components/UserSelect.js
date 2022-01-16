import '../css/UserSelect.css';
import { MdOutlineGolfCourse, MdCreate } from 'react-icons/md';
import { IoIosClipboard } from 'react-icons/io';
import { IoPlayForward } from 'react-icons/io5';

let cards = [
    {
        "name": "Create a Tournament",
        "icon": <MdCreate/>
    },
    {
        "name": "Sign Up for Tournament",
        "icon": <IoIosClipboard/>
    },
    {
        "name": "In Progress Tournament",
        "icon": <IoPlayForward/>
    },
    {
        "name": "Add a Course",
        "icon": <MdOutlineGolfCourse/>
    }
]

function HomePage() {  
    return (
        <div>
            {displayAppTitle()}
            {createCards()}
        </div>
    );  
}

const displayAppTitle = () => {
    return (
        <div className='appName'>GOLFEON</div>
    );
}

const createCards = () => {
    return (
        <div className='card_container'>
            { cards.map((value, index) => (
                <div className = 'menuCard'>
                    <div>{value.name}</div>
                    {value.icon}
                </div>
            ))}
        </div>
    );
}

export default HomePage;
