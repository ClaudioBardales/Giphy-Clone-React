import React, { useEffect, useState } from "react";
import axios from "axios";

function Giphy() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "bo7l8y4GctiRWvN7WQKm6NKC2TrmJEjc",
        },
      });
      console.log(results);
      setData(results.data.data);
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    return data.map((el) => {
      return (
        <div key={el.id}>
          <img src={el.images.fixed_height.url} />
        </div>
      );
    });
  };

  return <div>{renderGifs()}</div>;
}

export default Giphy;
