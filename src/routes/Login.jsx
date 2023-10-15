import styles from '../css/login.module.css'
import { useRef, useState } from 'react';
import Produtos from './Produtos';

function Login() {
    const user = useRef();
    const password = useRef();
    const getUser = sessionStorage.getItem('userData');
    const getSenha = sessionStorage.getItem('senhaData');
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleSubmit = () => {
        if (user.current.value === 'admin' && password.current.value === '12345') {
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);
            sessionStorage.setItem('userData', 'admin');
            sessionStorage.setItem('senhaData', token);
        } else {
            alert('Usuário e senha inválidos !!!');
        }
        setButtonClicked(true);
    };

    return (
        <section className={styles.loginContainer}>
            <h1>Login</h1>
            {getUser && getSenha ? (
                <Produtos />
            ) : (
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputText}>USUÁRIO:</label>
                        <input type="text" ref={user} className={styles.inputField} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputText}>SENHA:</label>
                        <input type="password" ref={password} className={styles.inputField} />
                    </div>
                    <button type="submit" className={` ${buttonClicked ? 'clicked' : ''}`}>
                        {buttonClicked ? 'Logado' : 'Login'}
                    </button>
                </form>
            )}
        </section>
    );
}

export default Login;
