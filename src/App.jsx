import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'





function App() {
  const [tours, setTours] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.course-api.com/react-tours-project');
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [])
 
  

  return (
    <div className="app">
      <h1>Our Tours</h1>
      <div className="card-container">
        {tours.map((tour) => (
          <Card
            key={tour.id}
            image={tour.image}
            title={tour.name}
            price={tour.price}
            description={tour.info}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


