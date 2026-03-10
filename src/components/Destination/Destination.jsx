import "./Destination.css";
import Title from "../Title/Title";
import DesSection from "../DesSection/DesSection";
import destinations from "../../data/destinations";

const Destination = () => {
  return (
    <div>
      <Title
        title="Popular Destination"
        subTitle="Tours give you the opportunity to see a lot, within a time frame "
      />
     
      {destinations.map((item) => (
        <DesSection
          key={item.id}
          title={item.title}
          description={item.description}
          firstImage={item.firstImage}
          secondImage={item.secondImage}
          reverse={item.reverse}
        />
      ))}
      
    </div>
  );
};

export default Destination;
