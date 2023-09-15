import logo from './logo.svg';
import FirstComponent from './modules/FirstComponent';
import NamedComponent from './modules/NamedComponent';
import Tweet from './modules/Tweet';
import Person from './modules/Person';
import './App.css';

function App() {
  return (
    <div>
      <div className="first container">
        <FirstComponent />
      </div>
      <div className="second container">
        <NamedComponent name='Theara Ya' />
      </div>

      <div className="third container">
        <Tweet username="tya033689" name="Theara Ya" date="9/15/2023" message="Today is Happy September 15th day! So pumped to get started!" />
        <Tweet username="tya033689" name="Theara Ya" date="9/15/2023" message="Just ate a large breakfast... I think I'm going to be sick..." />
        <Tweet username="tya033689" name="Theara Ya" date="9/15/2023" message="React is a breeze to learn." />
      </div>

      <div className="fourth container">
        <Person name="Alice" age={18} hobbies={['Walking']} />
        <Person name="Bob" age={19} hobbies={['Hiking']} />
        <Person name="Colt" age={25} hobbies={['Teaching', 'Coding']} />
        
      </div>
    </div>
  );
}

export default App;
