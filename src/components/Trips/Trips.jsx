import Card from "../Card/Card";
import Title from "../Title/Title";
import "./Trips.css";
import trips from "../../data/trips";
const Trips = () => {
  return (
    <div>
      <Title
        title=" Recent Trips"
        subTitle=" you can discover your unique destination using google maps"
      />

      <div className="tripcards">
        {trips.map((item) => (
          <Card 
          key={item.id}
          title={item.title}
          descriptions={item.description}
          image={item.image} />
        ))}

       


      </div>
    </div>
  );
};

export default Trips;
