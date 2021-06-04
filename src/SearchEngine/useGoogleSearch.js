import React, { useEffect, useState } from "react";
import API_KEY from "../Data/keys";

// content key from engine
const CONTENT_KEY = "f66d560b6f9f83e30";

const useGoogleSearch = (term) => {
  // initially search data is empty
  const [data, setData] = useState(null);

  //   Refreshing for every search item whenever input changes
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTENT_KEY}&q=${term}`
      )
        // convert results into json format
        .then((response) => response.json())
        // update the data
        .then((results) => {
          setData(results);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
