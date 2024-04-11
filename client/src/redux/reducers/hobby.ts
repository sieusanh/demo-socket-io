
export interface Hobby {
    id: number;
    title: string;
}

export interface HobbyState {
    list: Array<Hobby>,
    activeId: string
}

const initialState: HobbyState = {
    list: [],
    activeId: '',
};

const hobbyReducer = (state: HobbyState = initialState, action: any) => {
    switch(action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList
            };
        }
        case 'SET_ACTIVE_HOBBY': {
            return state;
        }
        default:
            return state;
    }
}

export default hobbyReducer;

// const hobbyList = useSelector((state: HobbyState) => state.hobby.list);
