
export interface UserState {
    list: Array<string>,
    activeId: string
}

const initialState: UserState = {
    list: [],
    activeId: '',
};

const userReducer = (state: UserState = initialState, action: any) => {
    return state;
}

export default userReducer;
