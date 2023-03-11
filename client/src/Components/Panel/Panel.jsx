import React from "react";
import './Panel.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllNumbers, postNumber, putNumber, logout } from '../../redux/actions';


export default function Panel(){

    const dispatch = useDispatch()

    const Numbers = useSelector(state => state.numbers);

  
    useEffect(() => {

      dispatch(getAllNumbers());
        
      }, [dispatch]);

      const [values, setValues] = useState({
        name: "number",
        number: ""
      });

      const [error, setError] = useState(false);

      const handleChange = (event) => {

        setValues({ ...values, [event.target.name]: event.target.value });

       };


      const createNumber = async (event) => {

        event.preventDefault()

        if (!/^549\d{10,}$/.test(values.number)) {

          setError(true);

        } else {

          try {

          await dispatch(postNumber(values))
          await dispatch(getAllNumbers())
          setError(false);
          setValues({
            name: "number",
            number: ""
        })
          } catch (error) {

            console.error(error);

          }
        }
      }
      
      const modifyNumber = async (event) => {

        event.preventDefault();

        if (!/^549\d{10,}$/.test(values.number)) {

          setError(true);

        } else {
          try {
            await dispatch(putNumber(values));
            await dispatch(getAllNumbers());
            setError(false);
            setValues({
              name: "number",
              number: "",
            })
            
          } catch (error) {

            setError(true);
            console.error(error);

          }
        }
        
    }

    

      const handleLogout = () => {
        dispatch(logout(false))
      }

      


      return (
      <section id="panel">
  {Numbers?.length === 0 ? (
    <div className="panel-container">
      <div className="panel-content">
        <h1>Panel de control</h1>
        <form onSubmit={createNumber} className="modify-number-form">
          <label htmlFor="number">Crear número de teléfono:</label>
          <input type="text" name="number" value={values.number} onChange={handleChange} />
          {error && <label className="error-label">
            ¡Error al guardar el número de teléfono!<br/>
            El numero de telefono debe tener al menos 13 digitos<br/>
            Ejemplo : "54935xxxxxxxx" 
          </label>}
          <button type="submit">Guardar</button>
        </form>
        <button onClick={handleLogout} className="logout-btn">Cerrar sesión</button>
      </div>
    </div>
  ) : (
    <div className="panel-container">
      <div className="panel-content">
        <h1>Panel de control</h1>
        <div className="number">
          <h2>El número actual es <span>{Numbers.number}</span></h2>
        </div>
        <form onSubmit={modifyNumber} className="modify-number-form">
          <label htmlFor="number">Cambiar número de teléfono:</label>
          <input type="text" name="number" value={values.number} onChange={handleChange} />
          {error && <label className="error-label">
            ¡Error al guardar el número de teléfono!<br/>
            El numero de telefono debe tener al menos 13 digitos<br/>
            Ejemplo : "54935xxxxxxxx" 
          </label>}
          <button type="submit">Guardar</button>
        </form>
        <button onClick={handleLogout} className="logout-btn">Cerrar sesión</button>
      </div>
    </div>
  )}
</section>

      );
    }