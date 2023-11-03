import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Login from "./views/Login/Login";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate();

  //Estados y variables del inicio de sesion
  const [access, setAccess] = useState(false);

  const EMAIL = "pjcastil03@gmail.com";
  const PASSWORD = "senaida19";

  // FUNCION LOGIN EN PROMESAS
  // function login(userData) {
  //    const { email, password } = userData;
  //    const URL = 'http://localhost:3001/rickandmorty/login/';
  //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //       const { access } = data;
  //       setAccess(data);
  //       access && navigate('/home');
  //    });
  // }

  // FUNCION LOGIN EN ASYNC AWAIT
  async function login(userData) {
    const URL = "http://localhost:3001/rickandmorty/login/";

    try {

      const { email, password } = userData
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      setAccess(data.access);
      // access && navigate('/home');

    } catch (error) {
      window.alert('Datos Incorrectos')
    }
  }

  useEffect(() => {
   access? navigate('/home') : navigate('/')
  }, [access]);

  //Estado para chequear ubicacion
  const { pathname } = useLocation();

  //Estado de los personajes de las Cards
  const [characters, setCharacters] = useState([]);

  //Funcion para la busqueda por ID

//   function onSearch(id) {
//     axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
//       ({ data }) => {
//         if (data.name) {
//           setCharacters((oldChars) => [...oldChars, data]);
//         } else {
//           window.alert("¡No hay personajes con este ID!");
//         }
//       }
//     );
//   }

//FUNCION ONSEARCH CON ASYNC AWAIT

  async function onSearch(id){

   try {
      
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

      if(data.name) {
         setCharacters((oldChars) => [...oldChars, data])
      } 

   } catch (error) {
      window.alert('No hay personajes con ese ID')
   }
  }

  //Funcion para cerrar las Cards
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path={"/"} element={<Login login={login} />} />
        <Route
          path={"/home"}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={"/about"} element={<About />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        <Route path={"/favorites"} element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
