import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({handleRegister}) {

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
        let { password, email } = data;
        console.log(password, email)
        handleRegister({password, email})
    }

    return(
        <div className="register">
            <h2 className="register__title">Регистрация</h2>
            <form onSubmit={handleSubmit} className="register__form">
                <fieldset className="register__fieldset">
                    <input value={data.email} onChange={handleChange} type="email" name="email" className="register__input register__input_email" placeholder="Email" minLength="2" maxLength="40" required />
                    <span className="register__error register__error_email" id="email-error"> </span>
                    <input value={data.password} onChange={handleChange} type="password" name="password" className="register__input register__input_password" placeholder="Пароль" minLength="2" maxLength="40" required />
                    <span className="register__error register__error_password" id="password-error"> </span>
                </fieldset>
                <button type="submit" className="register__button">Зарегистрироваться</button>
            </form>
            <p className="register__content">Уже зарегистрированы? <Link className="register__link" to="/sign-in">Войти</Link></p>
        </div>
    )
}

export default Register;