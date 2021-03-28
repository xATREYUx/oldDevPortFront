import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.salesGraph";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
// import "../../styles/salesGraph.css";

// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const SalesGraph = () => {
  const [retrievedData, setretrievedData] = useState();
  const [unitsByCountry, setUnitsByCountry] = useState();

  useEffect(() => {
    if (retrievedData !== undefined) {
      console.log(retrievedData);
      byCountry();
    }
  }, [retrievedData]);

  const getData = async () => {
    try {
      const salesData = await axios.get("http://localhost:5001/sales");
      setretrievedData(salesData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const byCountry = () => {
    const groupBy = (array, selector) => {
      return array.reduce((groups, value) => {
        const key = selector(value);
        const group = groups.get(key);

        if (group == null) {
          groups.set(key, [value]);
        } else {
          group.push(value);
        }

        return groups;
      }, new Map());
    };
    const sum = (array, selector) => {
      return array.reduce((s, value) => {
        return s + selector(value);
      }, 0);
    };
    const groups = groupBy(retrievedData, (v) => v["Country"]);
    const unitsSoldByCountry = Array.from(groups.entries()).map(
      ([country, sales]) => {
        return {
          Country: country,
          "Units Sold": sum(sales, (s) => s["Units Sold"]),
        };
      }
    );
    console.log(unitsSoldByCountry);
    setUnitsByCountry(
      unitsSoldByCountry.sort((a, b) => (a.Country > b.Country ? 1 : -1))
    );
  };

  return (
    <div style={styles.graphContainer}>
      <div style={styles.header}>
        <h1 className="title">Sales Data</h1>
        <h3>Get 5000 sales enteries from MongoDB, reduce() and chart</h3>
        <p>
          https://data.world/bobmajor/sales/workspace/file?filename=5000+Sales+Records.csv
        </p>

        <button className="ui button green" onClick={getData}>
          Get Sales Overview
        </button>
      </div>

      {retrievedData ? (
        <BarChart width={900} height={300} data={unitsByCountry}>
          {unitsByCountry ? (
            <Tooltip wrapperStyle={{ width: 200, backgroundColor: "#ccc" }} />
          ) : null}
          <XAxis dataKey="Country" />
          <YAxis />
          <Bar dataKey="Units Sold" fill="#8884d8" />
        </BarChart>
      ) : null}
    </div>
  );
};
export default SalesGraph;
