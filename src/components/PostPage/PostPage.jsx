import React, { useState } from "react";
import axios from "axios";
import "./PostPage.scss";

import sellcat from "../../assets/mp3/sellcat.mp3";

function PostPage() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const sellkitty = () => {
    const audio = new Audio(sellcat);
    audio.play();
  };

  const handleSellCat = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:3001/post", {
        "Name:": name,
        "Breed:": breed,
        "Gender:": gender,
        "Age:": age,
        "Price:": price,
        "Description:": description,
      })
      .then((response) => {
        console.log(response);
        setName("");
        setBreed("");
        setGender("");
        setAge("");
        setPrice("");
        setDescription("");
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <h1>Are you looking to sell your cat?</h1>
        <h3>
          Well, you've come to the right place! We specialice in selling all
          kinds of kitties!
          <br />
        </h3>
        <h5>
          We ensure that your cat will be in good hands in its future forever
          home!
        </h5>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="form-submit"
        onClick={() => {
          sellkitty();
          handleSellCat();
        }}
      >
        Sell Cat
      </button>
    </form>
  );
}

export default PostPage;
