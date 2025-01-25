import React, { useState, useEffect } from "react";

// Sample car data (would typically come from a backend/database)
const initialCars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2019,
    price: 22000,
    mileage: 45000,
    color: "Silver",
    transmission: "Automatic",
    condition: "Excellent",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/2018-toyota-camry-mmp-1544816921.jpg?crop=0.938xw:0.859xh;0.0208xw,0.141xh&resize=2048:*",
    imageWidth: 400, // Width in pixels
    imageHeight: 300, // Height in pixels
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2020,
    price: 19500,
    mileage: 35000,
    color: "Blue",
    transmission: "CVT",
    condition: "Very Good",
    imageUrl:
      "https://www.heraldnet.com/wp-content/uploads/2020/09/22614427_web1_TSR-2020-Honda-Civic-front-EDH-200905.jpg",
    imageWidth: 400, // Width in pixels
    imageHeight: 300, // Height in pixels
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2018,
    price: 28000,
    mileage: 55000,
    color: "Red",
    transmission: "Manual",
    condition: "Good",
    imageUrl:
      "https://www.cnet.com/a/img/resize/6bb75f162a5bcd5af072e24783d7bb0668f0604f/hub/2018/08/01/b1a2ae23-437a-4902-8bd2-d4583cf8e7ec/003-2018-ford-mustang-gt-review.jpg?auto=webp&width=768",
    imageWidth: 400, // Width in pixels
    imageHeight: 300, // Height in pixels
  },
];

const CarDealershipApp: React.FC = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    // Sort cars by price (lowest to highest)
    const sortedCars = [...initialCars].sort((a, b) => a.price - b.price);
    setCars(sortedCars);
  }, []);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleCloseDetails = () => {
    setSelectedCar(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Convergent Car Dealership
      </h1>

      {/* Car Listing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleCarSelect(car)}
          >
            <img
              src={car.imageUrl}
              alt={`${car.year} ${car.make} ${car.model}`}
              width={car.imageWidth}
              height={car.imageHeight}
              style={{
                width: `${car.imageWidth}px`,
                height: `${car.imageHeight}px`,
              }}
              className="object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">
                {car.year} {car.make} {car.model}
              </h2>
              <p className="font-bold text-green-600">
                ${car.price.toLocaleString()}
              </p>
            </div>
            {/* Small Divider Line */}
            <hr className="w-50 border-gray-100 mx-auto my-2" />
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <hr className="my-6 border-gray-300" />

      {/* Car Details Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                {selectedCar.year} {selectedCar.make} {selectedCar.model}
              </h2>
              <img
                src={selectedCar.imageUrl}
                alt={`${selectedCar.year} ${selectedCar.make} ${selectedCar.model}`}
                width={selectedCar.imageWidth}
                height={selectedCar.imageHeight}
                style={{
                  width: `${selectedCar.imageWidth}px`,
                  height: `${selectedCar.imageHeight}px`,
                }}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <p>
                  <strong>Price:</strong> ${selectedCar.price.toLocaleString()}
                </p>
                <p>
                  <strong>Mileage:</strong>{" "}
                  {selectedCar.mileage.toLocaleString()} miles
                </p>
                <p>
                  <strong>Color:</strong> {selectedCar.color}
                </p>
                <p>
                  <strong>Transmission:</strong> {selectedCar.transmission}
                </p>
                <p>
                  <strong>Condition:</strong> {selectedCar.condition}
                </p>
              </div>
              <button
                onClick={handleCloseDetails}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDealershipApp;
