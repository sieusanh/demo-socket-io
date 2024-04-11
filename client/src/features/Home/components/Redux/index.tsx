import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { IReducer } from '@/redux/reducers';
import { HobbyList } from '../HobbyList';
import { addNewHobby } from '@/redux/actions/hobby';
import {Hobby} from '@/redux/reducers/hobby';

export function Redux() {
    const hobbyList = useSelector((state: IReducer) => state.hobby.list);
    const activeId = useSelector((state: IReducer) => state.hobby.activeId);
    // useSelector use strict comparison (=== between new and old state)
    // not shallow comparison: 
    // strict compare: obj1 ==== obj2
    // shallow comparison: {a: a1, b: b2} == { a: a2, b: b2 } => a1 === a2, b1 === b2

    // const hobbyState = useSelector((state: IReducer) => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.activeId
    // }), shallowEqual);
    const dispatch = useDispatch();

    const randomize = () => {
        const num = Math.floor(Math.random() * 100) + 1;
        return num;
    }

    const handleAddHobbyClick = () => {
        // Random a hobby object: id + title
        const num = randomize();
        const newHobby: Hobby = {
            id: num,
            title: `New Hobby ${num}!`
        };

        // Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    };

    // const handleHobbyClick = (hobby: Hobby) => {

    // }

    return (
        <div>
            <h1>REDUX HOOKS EXAMPLES</h1>

            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList 
                list={hobbyList}
                activeId={activeId}
                // onClick={handleHobbyClick}
            />
        </div>
    );
}