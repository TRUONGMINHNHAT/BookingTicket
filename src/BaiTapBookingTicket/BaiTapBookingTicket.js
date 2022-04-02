import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhsachGheData from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'


class BaiTapBookingTicket extends Component {

  renderHangGhe = () => {
    return danhsachGheData.map((hangGhe,index) => {
      return <div key={index}>
        <HangGhe hangGhe={hangGhe}/>
      </div>
    })
  }
  
    render() {
        return (
          <div
            className="bookingMovie"
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              backgroundImage: "url('./img/bgmovie.jpg')",
              backgroundSize: "100%",
            }}
          >
            <div
              style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.8)",
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-8 ">
                    <div className="display-4 text-warning" style={{fontSize:'35px'}}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                    <div className="mt-3 text-light" style={{fontSize:'25px'}}>Màn hình</div>
                    <div className="mt-2" style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                      <div className="screen"></div>            
                    </div>
                    {this.renderHangGhe()}
                  </div>
                    <div className="col-4">
                      <div className="mt-2 text-light" style={{fontSize:'35px'}}>DANH SÁCH GHẾ BẠN CHỌN</div>
                      <ThongTinDatGhe/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
}

export default BaiTapBookingTicket
