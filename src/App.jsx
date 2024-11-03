import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await fetch('https://www.course-api.com/react-tours-project');
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); 
      }
    };
    
    fetchData();
  }, []);

  const notInterested = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="app">
      <h1>Our Tours</h1>
      {isLoading ? (
        <div class="lds-dual-ring"></div>
      ) : (
        <div className="card-container">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              image={tour.image}
              title={tour.name}
              price={tour.price}
              description={tour.info}
              notInterested={() => notInterested(tour.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
