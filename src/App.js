import NavBar from './components/NavBar/NavBar';
import Contenido from './components/Contenido/Contenido';
import Login from './components/Login/Login';
import LoginForm from "./components/Login/LoginForm";


function App() {
  return (
    <body>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Contenido>
         
            <Login id="info">
              
                <LoginForm></LoginForm>
              
            </Login>
        </Contenido>
      </main>
    </body>
  );
}

export default App;
