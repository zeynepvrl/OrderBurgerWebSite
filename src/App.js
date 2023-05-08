import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { ContactUs } from './components/ContactUs';
import { AboutUs } from './components/AboutUs';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path='/menu' exact element={<Menu/>}/>
        <Route path='/contactUs' exact element={<ContactUs/>} />
        <Route path='/aboutUs' exact element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
/*
React Router'da <Route /> componenti, URL'nin belirli bir yoluyla eşleştiğinde bir component render etmek için kullanılır.
 exact keywordü, URL'nin tam olarak belirtilen yol ile eşleşmesi gerektiğini söyler.

Normalde, bir <Route /> componenti, URL'nin başka bir yolunun belirtilen yola dahil olması durumunda bile eşleşme 
yapacaktır. Örneğin, <Route path="/about" component={About} /> gibi bir kodda, /about/contact veya /about/us gibi URL'ler
de eşleşebilir.

exact keywordü, tam olarak belirtilen yola eşleşmek için kullanılır. Yani, <Route exact path="/about" component={About} /> 
gibi bir kodda, sadece /about URL'si belirtilen component ile eşleşecektir. /about/contact veya /about/us gibi URL'ler 
eşleşmeyecektir. Bu sayede, tam olarak belirtilen yolun yanı sıra alt yollarla eşleşmenin önüne geçilir ve yanlış
yönlendirmelerin önüne geçilebilir.*/ 