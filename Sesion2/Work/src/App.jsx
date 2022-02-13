import './App.css';
import HeroBox from './components/HeroBox';
import ImgS from './assets/img/superman.png';
import ImgB from './assets/img/batman.png';
import ImgF from './assets/img/flash.png';
import ImgW from './assets/img/wonder-woman.png';

function App() {
  return (
    <div className="App">
      <HeroBox className="Superman" name="Clark Kent" hero="Superman">
        <img src={ImgS} alt="Batman" />
        <h2>Biografia</h2>
        <p>
          Clark Kent, también conocido por su nombre de nacimiento Kal-El o por su nombre de superhéroe Superman, es un personaje ficticio y superhéroe de las películas del Universo extendido de DC...
        </p>
        <a href="https://es.wikipedia.org/wiki/Clark_Kent_(Universo_extendido_de_DC)">Mas ...</a>
      </HeroBox>
      <HeroBox className="Batman" name="Bruce Wayne" hero="Batman">
        <img src={ImgB} alt="Batman" />
        <h2>Biografia</h2>
        <p>
          Batman (conocido inicialmente como Bat-Man y en español como el Hombre Murciélago) es un personaje de cómic creado por los estadounidenses Bob Kane y Bill ...
        </p>
        <a href="https://es.wikipedia.org/wiki/Batman">Mas ...</a>
      </HeroBox>
      <HeroBox className="Flash" name="Barry Allen" hero="Flash">
        <img src={ImgF} alt="Flash" />
        <h2>Biografia</h2>
        <p>
          Flash (conocido también como The Flash y traducido en español: Destello) es el nombre de varios superhéroes ficticios que aparecen en los cómics ...
        </p>
        <a href="https://es.wikipedia.org/wiki/Flash_(historieta)">Mas ...</a>
      </HeroBox>
      <HeroBox className="Wonder-Woman" name="Diana" hero="Wonder Woman">
        <img src={ImgW} alt="Wonder Woman" />
        <h2>Biografia</h2>
        <p>
          La Mujer Maravilla (en inglés: Wonder Woman) es una superheroína ficticia creada por William Moulton Marston para la editorial DC Comics...
        </p>
        <a href="https://es.wikipedia.org/wiki/Mujer_Maravilla">Mas ...</a>
      </HeroBox>
    </div>
  );
}

export default App;
