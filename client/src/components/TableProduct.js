import React, { useEffect, useState } from "react";
import data from "../data.json";
import swal from "sweetalert";
import { useQuery, useMutation } from "react-query";
import { API } from "../config/api";

const TableProduct = ({ setData }) => {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    const getDataProduct = async () => {
      try {
        const response = await API.get("products");
        setDataProducts(response.data?.data);
        setData(response.data?.data);
      } catch (error) {
        swal("Error", "error aja", "error");
      }
    };
    getDataProduct();
  }, []);

  return (
    <div
      className=" shadow p-5 rounded-sm"
      style={{ width: "90%", margin: "auto", marginTop: "50px" }}
    >
      <div className="flex flex-col text-center mb-3 text-red-600 font-bold">
        <h1>DISCOUNT 11/11</h1>
        <h5>GET DISCOUNT 30% MAX TO Rp30.000 MINIMUM ORDER Rp40.000</h5>
      </div>
      <table className="table-auto " style={{ width: "90%", margin: "auto" }}>
        <thead>
          <tr>
            <th className="w-1/4 px-4 py-2">Name</th>
            <th className="w-1/4 px-4 py-2">Price</th>
          </tr>
        </thead>
        {dataProducts.map((e, i) => (
          <tbody key={i}>
            <tr>
              <td className="border px-4 py-2">{e.name}</td>
              <td className="border px-4 py-2 flex justify-center">
                RP{e.price}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default TableProduct;
