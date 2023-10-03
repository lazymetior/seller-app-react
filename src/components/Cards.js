import SingleCard from "./SingleCard";

const Cards = ({ carsData, searchData }) => {

  // Design of cards container and sending data to the single card. 
  return (
    <>
      <div className="album py-4" id="card-container">
        <div className="container" id="light-container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {carsData.map((car, index) => {
              return (
                <SingleCard
                  key={index}
                  image={car.image}
                  name={car.name}
                  price={car.price}
                  year={car.year}
                  people={car.people}
                  fuel={car.fuel}
                  mileage={car.mileage}
                  type={car.type}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
