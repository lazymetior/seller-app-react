import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const [carsData, setCarsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [searchInput, setSearchInput] = useState(""); // New state for search input

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/103ba518-adc0-4e03-8b4f-92105dad869c"
        );
        setCarsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Calculate currentPosts based on filtered data
  const filteredCars = carsData.filter((car) =>
    car.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredCars.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Cards carsData={currentPosts} searchData={searchInput} />
      <Footer
        totalPosts={filteredCars.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
