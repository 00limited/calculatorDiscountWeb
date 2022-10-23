import React, { useState } from "react";
import swal from "sweetalert";
import { API } from "../config/api";

const UserInput = ({ data, setDataDiscount }) => {
  const [totalInput, setTotalInput] = useState([
    {
      name: "",
      arrOrder: [
        { price: "", qty: "" },
        { price: "", qty: "" },
        { price: "", qty: "" },
      ],
    },
  ]);
  const [totalProduct, setTotalProduct] = useState([""]);

  const handleChange = (index, input) => {
    let searchIndex = input.target.className.split(" ");
    let findIndex = searchIndex[searchIndex.length - 1];
    let dataArr = [...totalInput];
    if (input.target.name === "name") {
      dataArr[index][input.target.name] = input.target.value;
    } else {
      dataArr[index]["arrOrder"][findIndex][input.target.name] =
        input.target.value;
    }
    setTotalInput(dataArr);
  };
  const handlePostOrders = async () => {
    try {
      let totalOrderPerPerson = totalInput.map((item) => {
        let totalPrice = [];
        item?.arrOrder.map((e) => {
          let qty = e.qty;
          let price = e.price;
          if (price !== "" && qty !== "") {
            totalPrice.push(qty * price);
          } else {
            return;
          }
        });

        let totalHarga = totalPrice.reduce((e, i) => i + e, 0);
        return {
          name: item.name,
          price: totalHarga,
        };
      });

      const post = await API.post("user", totalOrderPerPerson);
      console.log(post);
      setDataDiscount(post.data);
    } catch (error) {
      swal("Error", error, "error");
    }
  };
  return (
    <div
      className="shadow p-5 rounded-sm flex flex-col justify-center"
      style={{ width: "60%", margin: "auto", marginBottom: "50px" }}
    >
      <h1 className="font-bold text-xl text-center mb-4">
        fill in the form to buy the products
      </h1>
      <div className="flex flex-col justify-between">
        {totalInput.map((value, i) => (
          <div key={i} className="flex flex-row justify-around mt-3">
            <div className="mr-3 mt-2">
              <label htmlFor="userInp" className="mr-4">
                Customer
              </label>
              <input
                placeholder="User"
                id="userInp"
                name="name"
                className="border-solid border-2 rounded border-gray-600 p-1 text-sm"
                required={true}
                onChange={(userName) => handleChange(i, userName)}
              />
            </div>
            {totalProduct.map((e, idx) => (
              <div className="flex flex-col" key={idx}>
                <div className="flex flex-row mt-2">
                  <div>
                    <label htmlFor="prouctInp" className="mr-4">
                      Product
                    </label>
                    <select
                      className="justify-center border-solid rounded border-2 text-sm border-black-700 p-1 text-black-600 font-medium 0"
                      onChange={(product) => handleChange(i, product)}
                      name="price"
                      required
                    >
                      <option value={null}>{null}</option>
                      {data?.map((e, idx) => (
                        <option value={e.price} key={idx}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="prouctInp" className="mr-4">
                      Qty
                    </label>
                    <input
                      id="productInp"
                      placeholder="qty"
                      type="number"
                      min="1"
                      name="qty"
                      className="border-solid rounded border-2 border-gray-600 p-1 text-sm 0"
                      value={value.qty}
                      onChange={(qty) => handleChange(i, qty)}
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-2">
                  <div>
                    <label htmlFor="prouctInp" className="mr-4">
                      Product
                    </label>
                    <select
                      className="justify-center border-solid rounded border-2 text-sm border-black-700 p-1 text-black-600 font-medium 1"
                      onChange={(product) => handleChange(i, product)}
                      name="price"
                    >
                      <option value={null}>{null}</option>
                      {data?.map((e, idx) => (
                        <option value={e.price} key={idx}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="prouctInp" className="mr-4">
                      Qty
                    </label>
                    <input
                      id="productInp"
                      placeholder="qty"
                      type="number"
                      min="1"
                      name="qty"
                      className="border-solid rounded border-2 border-gray-600 p-1 text-sm 1"
                      value={value.qty}
                      onChange={(qty) => handleChange(i, qty)}
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-2">
                  <div>
                    <label htmlFor="prouctInp" className="mr-4">
                      Product
                    </label>
                    <select
                      className="justify-center border-solid rounded border-2 text-sm border-black-700 p-1 text-black-600 font-medium 2"
                      onChange={(product) => handleChange(i, product)}
                      name="price"
                    >
                      <option value={null}>{null}</option>
                      {data?.map((e, idx) => (
                        <option value={e.price} key={idx}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="prouctInp" className="mr-4 2">
                      Qty
                    </label>
                    <input
                      id="productInp"
                      placeholder="qty"
                      type="number"
                      min="1"
                      name="qty"
                      className="border-solid rounded border-2 border-gray-600 p-1 text-sm 2"
                      value={value.qty}
                      onChange={(qty) => handleChange(i, qty)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <hr style={{ marginTop: "10px" }} />
      <div className="flex flex-row justify-end">
        <button
          className="mt-8 justify-center border-solid rounded border-2 text-sm border-blue-700 p-1 text-blue-600 font-medium mr-3"
          onClick={() =>
            setTotalInput([
              ...totalInput,
              {
                name: "",
                arrOrder: [
                  { price: "", qty: "" },
                  { price: "", qty: "" },
                  { price: "", qty: "" },
                ],
              },
            ])
          }
        >
          ADD USER
        </button>
        <button
          className="mt-8 justify-center border-solid rounded border-2 text-sm border-green-600 p-1 text-green-600 font-medium"
          onClick={handlePostOrders}
        >
          ORDER
        </button>
      </div>
    </div>
  );
};

export default UserInput;
