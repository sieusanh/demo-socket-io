import { terminal } from 'virtual:terminal';
import { Hobby } from '@/redux/reducers/hobby';
import { HobbyState } from '@/redux/reducers/hobby';
import { useState } from 'react';
import './style.css';

terminal.log('Hey terminal! A message from the browser')

// HobbyList.propTypes = {
//     list: Array<Hobby>,
//     activeId:  
// }

function HobbyList(props: HobbyState) {
    const { list: hobbyList, activeId } = props;
    const [checked, setChecked] = useState(0);

    return (
        <ul className='hobby-list'>
            {hobbyList.map(({id, title}: Hobby) => (
                <li 
                    key={id} style={{ padding: '50px'}}
                    className={id === checked ? 'active' : ''}
                    onClick={() => setChecked(id)}
                >
                    Id: {id}&nbsp;&nbsp;&nbsp;&nbsp;Title: {title}
                    <br />
                </li>
            ))}
        </ul>
    )
}

export { HobbyList };
