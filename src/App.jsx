import { useEffect, useState } from "react";
import "./App.css";
import TourCard from "./components/TourCard/TourCard";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  const deleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  return (
    <div className="tourHome">
      <h2 className="heading" style={{ textAlign: "center" }}>
        Our Tours
      </h2>

      {isLoading ? (
        <h2>Loading</h2>
      ) : tours.length === 0 ? (
        <button onClick={fetchTours} className="refreshButton">
          Refresh
        </button>
      ) : (
        <div className="tourCardGrid">
          {tours.map((tour) => {
            return <TourCard {...tour} deleteTour={deleteTour} key={tour.id} />;
          })}
        </div>
      )}
    </div>
  );
};
export default App;
