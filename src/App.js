
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./Routes/routers";
import DataContext from "./Context/BookingDataContex";
import { useEffect, useState } from "react";
import { loadState, saveState } from "./utilitis";
import { Toaster } from "react-hot-toast";

function App() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const initialState = loadState();
    if (initialState) {
      setData(initialState.data);
      setCategory(initialState.category);
      setUserInfo(initialState.userInfo);
    }
  }, []);
  //chekc data

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    if (data === null && category === null && userInfo === null) {
      console.log("please provide data");
    } else {
      saveState({ data, category, userInfo });
    }
  }, [data, category, userInfo]);

  return (
    <div className="m-auto bg-white">
      <DataContext.Provider
        value={{
          data,
          setData,
          category,
          setCategory,
          userInfo,
          setUserInfo,
          distance,
          setDistance
        }}
      >
        <RouterProvider router={routers}></RouterProvider>
        <Toaster />
      </DataContext.Provider>
    </div>
  );
}

export default App;
