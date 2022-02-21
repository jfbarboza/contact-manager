import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact'
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import Test from './components/tests/Test';

function App() {
  
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager"/>
          <div className="container">
            <Routes>
              <Route  path="/" element={<Contacts/>} />
              <Route exact path="/contact/add" element={<AddContact/>}/>
              <Route exact path="/contact/edit/:id" element={<EditContact/>}/>
              <Route exact path="/about/:id" element={<About />}/>
              <Route exact path="/test" element={<Test />}/>
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </div>
          
      </div>
      </Router>
      
    </Provider>
    
  );
}

export default App;
