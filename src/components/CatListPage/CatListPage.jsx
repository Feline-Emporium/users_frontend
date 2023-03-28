import React, { useState, useEffect } from "react";
import "./CatListPage.scss";
import CatData from "../CatListPage/CataData.json";

function CatListPage() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    setCats(CatData);
  }, []);

  const deleteCat = (catId) => {
    // Implement the delete cat functionality here
  };

  const rows = [];
  for (let i = 0; i < cats.length; i += 3) {
    rows.push(
      <div className="cat-row" key={i}>
        {cats.slice(i, i + 3).map((cat, j) => (
          <div className="cat-card" key={i + j}>
            <div className="cat-details">
              <h3>{cat.name}</h3>
              <p>Race: {cat.breed}</p>
              <p>Gender: {cat.gender}</p>
              <p>Age: {cat.age}</p>
              <p>{cat.description}</p>
              <p>{`DKK ${cat.price}`}</p>
              <p>Id: {cat.id}</p>
              <button
                className="delete-button"
                onClick={() => deleteCat(cat.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <div className="cat-list-page">{rows}</div>;
}

export default CatListPage;
