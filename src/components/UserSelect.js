import '../css/UserSelect.css';
import { MdOutlineGolfCourse } from 'react-icons/md';
import { IoIosClipboard} from 'react-icons/io';

let cards = [
    {
        "name": "Enter a Tournament",
        "icon": <IoIosClipboard/>
    },
    {
        "name": "Add a Course",
        "icon": <MdOutlineGolfCourse/>
    }
]

function HomePage() {  
    
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
    // return (
    //     <div className = 'menuCard'>
    //         <div>{row.name}</div>
    //         <div>{row.icon}</div>
    //     </div>
    // );    
}

export default HomePage;
