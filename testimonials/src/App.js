import './App.css';
import Testimonio from './components/testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <h1>This is our customers say about us:</h1>
        <Testimonio
          name='Shawn'
          country='Philippines'
          role='CEO'
          workplace='ABC Inc.'
          testimonial='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
          image='Shawn'
        />
        <Testimonio
          name='Sarah'
          country='Nigeria'
          role='HR Manager'
          workplace='ABC Inc.'
          testimonial='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
          image='Sarah'
        />
        <Testimonio
          name='Emma'
          country='Canada'
          role='Marketing Associate'
          workplace='ABC Inc.'
          testimonial='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
          image='Emma'
        />
      </div>
    </div>
  );
}

export default App;