import { Link } from 'react-router-dom';

export function Dashboard() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
}
