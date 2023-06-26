import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    origin: "",
    price: 0,
    quantity: 1,
    // createdAt: Date.now(),
  });

  const [veggieArray, setVeggieArray] = useState([]);

  useEffect(() => {
    axios("/veggies").then((response) => {
      console.log(response.data);
      setVeggieArray(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.price > 0) {
      axios({
        method: "POST",
        url: "/create_veggie",
        data: formData,
      }).then((response) => {
        console.log(response.data);
      });
      setFormData({ name: "", color: "", origin: "", price: 0, quantity: 1 });
    } else {
      console.log("Price should be greater than 0");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  let veggieJSX = veggieArray.map((veggie) => {
    return <div key={veggie._id}> {veggie.name} </div>;
  });

  return (
    <>
      <form id="veggie_creation_form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Veggie Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Veggie color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="origin"> Veggie Origin </label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price"> Veggie Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity"> Veggie quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label htmlFor="date"> Date </label>
          <input
            type="date"
            name="Date"
            value={formData.Date}
            onChange={handleChange}
          />
        </div> */}
        <button>Submit</button>
      </form>

      <section>{veggieJSX}</section>
    </>
  );
}

export default App;
