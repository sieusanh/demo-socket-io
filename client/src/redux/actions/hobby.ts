
import {Hobby} from '../reducers/hobby';

const addNewHobby = (hobby: Hobby) => {
    return {
        type: 'ADD_HOBBY',
        payload: hobby
    }
}

const setActiveHobby = (hobby: Hobby) => {
    return {
        type: 'SET_ACTIVE_HOBBY',
        payload: hobby
    }
}

export {  addNewHobby, setActiveHobby };