import React from "react";
import './Panel.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getNumbers, updateNumber, logout } from '../../redux/actions';


export default function Panel(){

    const dispatch = useDispatch()
    const Numbers = useSelector(state => state.numbers);

    useEffect(() => {

      dispatch(getNumbers());
        
      }, []);

      const [error, setError] = useState(false), 
            [succefull, setSuccesfull] = useState(false)
      

        const [number, setNumber] = useState("");

      
        const handlePasswordChange = (event) => {
          setNumber(event.target.value);
        }
      
        const handleUpdatePassword = (event) => {

          event.preventDefault();


          if (!/^549\d{10,}$/.test(number)) {

            setError(true);
            setSuccesfull(false)
  
          } else {

           dispatch(updateNumber(number))
          .then(() => {
            console.log("Number updated successfully");
            dispatch(getNumbers())
            setError(false);
            setSuccesfull(true)
            setNumber('')
            setTimeout(() => {
              setSuccesfull(false);
            }, 3000);
          })
          .catch((error) => {
            console.log("Error updating password: ", error);
            setNumber('')
          });

        }

      }

        const handleLogout = () => {
          dispatch(logout(false))
        }


      return (
      <section id="panel">
    <div className="panel-container">
      <div className="panel-content">
        <h1>Panel de control</h1>
        <div className="number">
          <h2>El número actual es <span>{Numbers}</span></h2>
        </div>
        <form onSubmit={handleUpdatePassword} className="modify-number-form">
          <label htmlFor="number">Cambiar número de teléfono:</label>
          <input type="text" name="number" value={number  } onChange={handlePasswordChange} />
          {error && <label className="error-label">
            ¡Error al guardar el número de teléfono!<br/>
            El numero de telefono debe tener al menos 13 digitos<br/>
            Ejemplo : "54935xxxxxxxx" 
          </label>}
          {succefull && <label className="succes-label">
            ¡El numero ha sido guardado corectamente!
          </label>}
          <button type="submit">Guardar</button>
        </form>
        <button onClick={handleLogout} className="logout-btn">Cerrar sesión</button>
      </div>
    </div>
</section>

      );
    }