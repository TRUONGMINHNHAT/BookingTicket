import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BaiTapBookingTicket.css";

export default class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhsachGhe.map((ghe, index) => {
      if (index === 0) {
        return <span className="rowNumber">{ghe.soGhe}</span>;
      }

      let cssGheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      return (
        <button
          onClick={() => {}}
          className="ghe"
          disabled={disable}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">
        {hang.soGhe}
      </button>
    })
  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className="ml-4">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
    } else {
      return <div>
          {this.props.hangGhe.hang}
          {/* {this.renderGhe()} */}
        </div>
    }
  }

  render() {
    return (
      <div className="hangghe" style={{ fontSize: "30px" }}>
        {this.renderHangGhe()}
      </div>
    );
  }
}
