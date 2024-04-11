
// import { useReducer } from 'react';

// function reducer(state: any, action: string) {
//     switch (action) {
//         case 'TANG': 
//             return state + 1;
//         case 'GIAM': 
//             return state - 1;
//         case 'XOA_TAT_CA':
//             return 0;
//         default:
//             return state;
//     }
// }

// type Action2 = {
//     type: string;
//     data?: number;
// }

// function reducer2(state: any, action: Action2){
//     switch(action.type) {
//         case 'GAN_GIA_TRI': 
//             return action.data;
//         default: 
//             return state;
//     }
// }

// const initState = {
//     loading: false,
//     data: null
// }

// type Type3 = Array<any> | string | unknown | Error;

// type Action3 = {
//     type: string;
//     data?: Type3;
// };

// function userReducer(state: any, action: Action3) {
//     switch (action.type) {
//         case 'GET_USER_REQUEST':
//             return {
//                 ...state,
//                 loading: true
//             };
//         case 'GET_USER_SUCCESS': 
//         case 'GET_USER_ERROR':
//             return {
//                 ...state,
//                 loading: false,
//                 data: action.data
//             }
//         default: 
//             return;
//     }
// }

// function UseReduce() {
//     const [count, dispatch] = useReducer(reducer, 0);
//     const [count2, dispatch2] = useReducer(reducer2, 0);
//     const [user, userDispatch] = useReducer(userReducer, initState);

//     async function getUsers() {
//         try {
//             const res = await fetch('https://reqres.in/api/users');
//             const resData = await res.json();

//             const timeoutPromise: Promise<Action3> = new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     const actionData: Action3 = {
//                         type: 'GET_USER_ERROR',
//                         data: 'Loi roi may oi!'
//                     };
//                     reject({
//                         type: 'GET_USER_ERROR',
//                         data: 'Loi roi may oi!'
//                     });

//                     // resolve({
//                     //     type: 'GET_USER_SUCCESS',
//                     //     data: resData.data
//                     // });
//                 }, 2000);
//                 userDispatch({
//                     type: 'GET_USER_REQUEST'
//                 });
//             });
//             const resolveData: Action3 = await timeoutPromise;
//             console.log('resolveData ', resolveData)
//             userDispatch(resolveData);

//             // setTimeout(() => {
//             //     // console.log('data ', data)
//             //     throw new Error('Loi roi may oi!');

//             //     userDispatch({
//             //         type: 'GET_USER_SUCCESS',
//             //         data: resData.data
//             //     });
//             // }, 2000);
            

//         } catch (err) {
//             console.log('er ', err);
//             console.log('type er ', typeof err);
//             userDispatch(err);

//             // setTimeout(() => {
//             //     userDispatch({
//             //         type: 'GET_USER_ERROR',
//             //         data: err
//             //     });
//             // }, 2000);
//             // userDispatch({
//             //     type: 'GET_USER_REQUEST'
//             // });
//         }

//         // setTimeout(() => {
//         //     fetch('https://reqres.in/api/users')
//         //         .then(res => res.json())
//         //         .then(res => {
//         //             throw new Error('Loi roi may oi!');
//         //             userDispatch({
//         //                 type: 'GET_USER_SUCCESS',
//         //                 data: res
//         //             });
                    
//         //         })
//         //         .catch(err => {
//         //             console.log('er ', err)
//         //             userDispatch({
//         //                 type: 'GET_USER_ERROR',
//         //                 data: err
//         //             });
//         //         }); 
//         // }, 2000);
        
//     }
    

//     return (
//         <>
//             {/* <button onClick={getUsers}>GET USERS</button> */}``
//             <p>Count: {count}</p>
//             <button onClick={() => dispatch('TANG')}>Tang</button>
//             <button onClick={() => dispatch('GIAM')}>Giam</button>
//             <button onClick={() => dispatch('XOA_TAT_CA')}>Xoa het</button>

//             <p>Count 2: {count2}</p>
//             <button
//                 onClick={() => 
//                     dispatch2({
//                         type: 'GAN_GIA_TRI',
//                         data: 10
//                     })
//                 }
//             >
//                 Gan Gia Tri
//             </button>

//             <button onClick={getUsers}>GET USERS</button>
//             <br />
//             <p>Loading state: {user.loading ? 'true': 'false'}</p>
//             {user.loading 
//                 ? <p>Loading...</p> 
//                 : <p>{JSON.stringify(user.data)}</p>
//             }

//         </>
//     )
// }

// export { UseReduce };