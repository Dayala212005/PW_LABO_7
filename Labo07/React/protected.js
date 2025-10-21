import React, { useEffect, useState } from "react";
import API from "./api";

const Protected = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/protected");
        setMessage(response.data.message);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Unauthorized");
      }
    };
    fetchData();
  }, []);

  if (error) return <h1 style={{ color: "red" }}>{error}</h1>;
  return <h1>{message}</h1>;
};

export default Protected;
