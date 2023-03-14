import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions';
import logo from '../Login/logo.png';



export default function LoginForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false)

  const [values, setValues] = useState({

    username: '',
    password: ''

  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
  
    try {
      
      await dispatch(loginUser(values));
      navigate('/panel');

    } catch (error) {
      console.error(error);
      setError(true)
      setTimeout(() => {
        setError(false);
      }, 3000);
    
    }
  };

  const handleGoToHome = () => {

    navigate('/');

  };

  return (
    <section className="login">
      <div className="login-container">
        <div className="logo-container">
          <img src={logo} alt="logo" width={200} height={200} className="logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label >Usuario:</label>
            <input type="text" name="username" id="username" placeholder="Ingrese su usuario" value={values.username} onChange={handleChange} />
          </div>
          <div className="input-container">
            <label>Contraseña:</label>
            <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" value={values.password} onChange={handleChange} />
          </div>
          {error && <p className="error-message">
             Usuario o contraseña incorrecto
          </p>}
          <button type="submit">Ingresar</button>
        </form>
        <button className='button-home' onClick={handleGoToHome}>Volver al inicio</button>
      </div>
    </section>
  );
}
