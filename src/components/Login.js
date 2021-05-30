import React, { useState } from 'react';

function Login({handleLogin}) {

    const [data, setData] = useState({
        password: '',
        email: '',
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setData({...data, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!data.password || !data.email) {
            return
        }
        let { password, email } = data;
        handleLogin({password, email});
    }
    return(
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form onSubmit={handleSubmit} className="login__form">
                <fieldset className="login__fieldset">
                    <input value={data.email} onChange={handleChange} type="email" name="email" className="login__input login__input_email" placeholder="Email" minLength="2" maxLength="40" required />
                    <span className="login__error login__error_email" id="email-error"> </span>
                    <input value={data.password} onChange={handleChange} type="password" name="password" className="login__input login__input_password" placeholder="Пароль" minLength="2" maxLength="40" required />
                    <span className="login__error login__error_password" id="password-error"> </span>
                </fieldset>
                <button type="submit" className="login__button">Войти</button>
            </form>
        </div>
    )
}

export default Login;