import '../styles/App.scss';
import logo from '../images/adalab-logo-155x61.png'

function App() {
  return (
    <div className="App">
        <header className="header">
        <a className="header__logo--link" href="https://adalab.es/"><img src={logo} alt="Logo Adalab" title ="Logo Adalab" className="header__logo--img"/></a>
        <nav>
            <ul className="menu">
                <li className="menu__items"><a href="https://adalab.es/blog/" title="Blog">Blog</a></li>
                <li className="menu__items"><a href="https://adalab.es/contacto-inscribete/" title="Contact">Contacto</a></li>
            </ul>
        </nav>
    </header>
    <main className="main">
        <h1><span className="claim">Creando</span><span className="claim">diversidad</span><span className="claim">digital</span></h1>
    </main>
    </div>
  );
}

export default App;
