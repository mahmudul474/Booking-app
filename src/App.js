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
  console.log(data)

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('myData'));

    if (localData) {
      setData(localData.data);
      setCategory(localData.category);
      setUserInfo(localData.userInfo);
    }
  }, []);









 
  return (
    <div className="m-auto">
      <DataContext.Provider
        value={{ data, setData, category, setCategory, userInfo, setUserInfo }}
      >
        <RouterProvider router={routers}></RouterProvider>
        <Toaster />
      </DataContext.Provider>
    </div>
  );
}

export default App;
