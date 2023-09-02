import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Products from "../components/Products";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(12);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://thronesapi.com/api/v2/Characters"
      );

      setData(data);
    } catch (error) {}
  };
  useEffect(() => {
    getData(1);
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="container">
      <h1 className="text-center mt-10 font-bold text-3xl text-white">
        Games of Thrones Characters
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
        {currentRecords.map((item, index) => (
          <Products {...item} />
        ))}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
