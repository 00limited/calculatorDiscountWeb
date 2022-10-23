import TableUser from "./components/TableUser";
import TableProduct from "./components/TableProduct";
import UserInput from "./components/UserInput";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState();
  const [dataDiscount, setDataDiscount] = useState([]);
  console.log(dataDiscount);
  return (
    <div className="App">
      <TableProduct setData={setData} />
      <TableUser dataDiscount={dataDiscount} />
      <UserInput data={data} setDataDiscount={setDataDiscount} />
    </div>
  );
}

export default App;
