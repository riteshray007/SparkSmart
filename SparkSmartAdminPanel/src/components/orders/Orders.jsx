import React from "react";

const catogerydata = [
  {
    address: "s1 ,bbsr ,odisha ,india ,751006,user@mail.com ,9999999999",
    createdBy: "admin1",
    items: [
      {
        name: "Samsung Galaxy A15 (SM-155M/DSN), 128GB 6GB RAM, Dual SIM, Factory Unlocked GSM, International Version (Wall Charger Bundle) (Yellow)",
        file: "https://m.media-amazon.com/images/I/51rK-Be8dxL._AC_SX444_SY639_FMwebp_QL65_.jpg",
        quantity: "1",
      },
      {
        name: "Moto G Play 2023 3-Day Battery Unlocked Made for US 3/32GB 16MP Camera Navy Blue",
        file: "https://m.media-amazon.com/images/I/61K1Fz5LxvL._AC_SX444_SY639_FMwebp_QL65_.jpg",
        quantity: "1",
      },
    ],
    orderDate: "2024-04-18T17:50:20.000Z",
    orderId: "0ccfc7e6-ba05-4c79-850b-8b89c2f4518a",
    orderedBy: "user1",
    status: "ORDERED",
    totalAmount: "250.00",
  },
];

export default function Orders() {
  return (
    <div className="table-responsive ">
      <table className="table text-center">
        <thead>
          <tr>
            <th style={{ width: "5%" }}> Sl.no </th>
            <th style={{ width: "15%" }}>Image</th>
            <th style={{ width: "25%" }}> Title </th>
            <th style={{ width: "35%" }}>Quantity</th>
            <th style={{ width: "15%" }}>Ordered By</th>
            <th style={{ width: "20%" }}>Address</th>
            <th style={{ width: "8%" }}>Order Status</th>
            <th style={{ width: "10%" }}> Total amount</th>
          </tr>
        </thead>
        <tbody>
          {catogerydata.map((data, index) => {
            return (
              <tr>
                <td> {index + 1} </td>
                <td>
                  {data.items.map((item, index ) => {
                    return (
                      <>
                        <img
                          className="productImage"
                          style={{ maxHeight: "100px" }}
                          src={item.file}
                          />
                          {index < data.items.length - 1 ? <hr /> : ""}
                      </>
                    );
                  })}
                </td>
                <td scope="row" className="text-start">
                  {data.items.map((item, index) => {
                    return (
                      <>
                        {item.name}
                        {index < data.items.length - 1 ? <hr /> : ""}
                      </>
                    );
                  })}
                </td>

                <td>
                  {data.items.map((item , index ) => {
                    return (
                      <>
                        {item.quantity}
                        {index < data.items.length - 1 ? <hr /> : ""}
                      </>
                    );
                  })}
                </td>
                <td>{data.orderedBy}</td>
                <td>{data.address}</td>

                <td>
                  {/* {data.status} */}
                  <select value={data.status}>
                    <option value="ORDERED">ORDERED</option>
                    <option value="INPROGRESS">IN PROGRESS</option>
                    <option value="DELIVERED">DELIVERED</option>
                  </select>
                </td>

                <td>{data.totalAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
