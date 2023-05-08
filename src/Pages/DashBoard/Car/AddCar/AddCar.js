import React, { useContext, useState } from "react";
import { UserinfoContext } from "../../../../Context/AuthContext/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


export default function AddCar() {
  const { user } = useContext(UserinfoContext);

  const [carimg, setCarImg] = useState("");
  console.log(carimg);
  //handleimage
  const handleimg = e => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("image", img);
    const url =
      "https://api.imgbb.com/1/upload?key=1378f6494e6b39ad2fd39769a2d2ffef";

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        const img = imgData.data.url;
        setCarImg(img);
      })
      .catch(e => {
        alert("internet  problem");
      });
  };
const navigate=useNavigate()
  const handleAddCar = event => {
    event.preventDefault();

    const from = event.target;
    const carName = from.name.value;
    const seat = from.seat.value;
    const bag = from.bag.value;
    const price = from.price.value;
    const carImg = carimg;
    const author = user?.email;

    const carinfo = { carName, seat, bag, price, carImg, author };

    savecar(carinfo);
  };

  const savecar = carinfo => {
    fetch(`https://booking-server-devsobuj910.vercel.app/car`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(carinfo)
    })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          toast.success("car added successfully")
          navigate("/dashboard/allcars")
        };
      });
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-xl my-7  text-green-950  font-bold">
          Add Car
        </h1>

        <form onSubmit={handleAddCar}>
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <div className="mb-6 w-full mx-2">
              <label
                for="username-success"
                className="block mb-2 text-lg font-medium text-green-700 dark:text-green-500"
              >
                Car Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="username-success"
                className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-lg rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-5 dark:bg-green-100 dark:border-green-400"
                placeholder="BMW"
              />
            </div>

            <div className="mb-6 w-full mx-2">
              <label
                for="username-success"
                className="block mb-2 text-lg font-medium text-green-700 dark:text-green-500"
              >
                Seat's
              </label>
              <input
                required
                name="seat"
                type="number"
                id="username-success"
                className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-lg rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-5 dark:bg-green-100 dark:border-green-400"
                placeholder="seat: 4"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <div className="mb-6 w-full mx-2">
              <label
                for="username-success"
                className="block mb-2 text-lg font-medium text-green-700 dark:text-green-500"
              >
                Luggages & Hand Bags
              </label>
              <input
                required
                type="number"
                name="bag"
                id="username-success"
                className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-lg rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-5 dark:bg-green-100 dark:border-green-400"
                placeholder="Luggages & Hand Bags : 2"
              />
            </div>

            <div className="mb-6 w-full mx-2">
              <label
                for="username-success"
                className="block mb-2 text-lg font-medium text-green-700 dark:text-green-500"
              >
                Price-per K.M
              </label>
              <input
                required
                type="number"
                name="price"
                id="username-success"
                className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-lg rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-5 dark:bg-green-100 dark:border-green-400"
                placeholder="10"
              />
            </div>
          </div>

          <div></div>

          {carimg && (
            <div className="flex justify-start items-center  w-52 ">
              <img
                className="h-auto max-w-full rounded-lg object-cover"
                src={carimg}
                alt="image description"
              />
            </div>
          )}

          <div>
            <label
              for="username-success"
              className="block mb-2 text-lg font-medium text-green-700 dark:text-green-500"
            >
              Upload car Img
            </label>

            <input
              required
              onChange={handleimg}
              accept="image/*"
              type="file"
              name="image"
              id="image"
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-lg rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-5 dark:bg-green-100 dark:border-green-400"
              placeholder="Bonnie Green"
            />
          </div>

          <div className="my-7   flex justify-center">
            <button
              type="submit"
              className="btn w-40 bg-green-950 hover:bg-green-950"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
