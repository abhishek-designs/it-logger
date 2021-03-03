import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";

const Techs = () => {
  // Techs state
  const [techs, setTech] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load the technicians from the server
    loadTechs();
    // eslint-disable-next-line
  }, []);

  // Function to fetch all the registered technicians
  const loadTechs = async () => {
    try {
      // Set the loading
      setLoading(true);
      const res = await fetch("/techs");
      const data = await res.json();

      // Store the techs into the state
      setTech(data);
      // Remove loading
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <ul className="collection">
      {!loading && techs.length === 0
        ? "No Technician Registered"
        : techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
    </ul>
  );
};

export default Techs;
