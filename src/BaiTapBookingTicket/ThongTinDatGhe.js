import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
  render() {
    return (
        <div>
        <div className="mt-5" >
            <button className="gheDuocChon"></button>
            <span className="text-light" style={{ fontSize: "30px" }}>
              Ghế đã đặt
            </span>
            <br />
            <button className="gheDangChon"></button>
            <span className="text-light" style={{ fontSize: "30px" }}>
              Ghế đang đặt
            </span>
            <br />
            <button className="ghe" style={{ marginLeft: 0 }}></button>
            <span className="text-light" style={{ fontSize: "30px" }}>
              Ghế chưa đặt
            </span>
            <br />
        </div>
    
       <div className="mt-5" >
          <table className="table" border='2'>
            <thead>
              <tr className="text-light">
                <th>Số ghế</th>
                <th>Gía</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th>Số ghế</th>
                <th>Gía</th>
                <th> </th>
              </tr>
              <tr>
                <th>Số ghế</th>
                <th>Gía</th>
                <th> </th>
              </tr>
            </tbody>
          </table>
       </div>
    </div>
    )
  }
}
