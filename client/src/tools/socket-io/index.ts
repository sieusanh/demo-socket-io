import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:9001';

export const socket = io(URL, {
    autoConnect: false,
	transports: ['websocket'],
    reconnectionDelayMax: 10000,
    auth: {
        token: "abc123"
    }
});


