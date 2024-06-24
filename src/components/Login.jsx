import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { getToken } from "../Api";

export default function Login({ setCurrentToken }) {
    const [username, setUsername]  = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const token = await getToken(username, password);
        setCurrentToken(token);
        navigate('/dashboard');
    }

    return (
        <>
            <input
                type="text" 
                placeholder="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
             />
            <input 
                type="password" 
                placeholder="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Sign In</button>
        </>
    )
}