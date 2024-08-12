import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            setAuthUser({ ...authUser, user: null });
            localStorage.removeItem('users');
            toast.success('Logout successful');
            window.location.reload();
        }
        catch (err) {
            toast.error("Error" + err);
        }
    }
    return (
        <div>
            <button className="px-3.5 py-1.5 bg-red-600 text-white rounded-md cursor-pointer" onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}
export default Logout;
