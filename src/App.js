//importing necessary files

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  // setting up the varibales
  const [carsData, setCarsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [searchInput, setSearchInput] = useState(""); 

  // setting up the api and fetching data from it

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/103ba518-adc0-4e03-8b4f-92105dad869c"  // mock api
        );
        setCarsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Number of currentPosts by filtered data using this for search bar
  const filteredCars = carsData.filter((car) =>
    car.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // getting value of diffrent post and pages, using this to code pagination

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
