import React from "react";

const TableUser = ({ dataDiscount }) => {
  let tes = dataDiscount.data?.map((e) => e.name);
  console.log(tes);
  return (
    <div
      className=" shadow p-5 rounded-sm"
      style={{
        width: "90%",
        margin: "auto",
        marginTop: "100px",
        marginBottom: "50px",
      }}
    >
      <table className="table-auto" style={{ width: "90%", margin: "auto" }}>
        <thead>
          <tr>
            <th className="w-1/4 px-4 py-2">Name</th>
            <th className="w-1/6 px-4 py-2">Price before discount</th>
            <th className="w-1/6 px-4 py-2">Price after discount</th>
          </tr>
        </thead>
        <tbody>
          {dataDiscount?.data?.map((e, i) => (
            <tr key={i}>
              {(e !== "") | undefined ? (
                <>
                  <td className="border px-4 py-2">{e.name}</td>
                  <td className="border px-4 py-2">{e.price_before}</td>
                  <td className="border px-4 py-2">{e.price_after}</td>
                </>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
