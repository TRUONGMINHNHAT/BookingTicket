import React, { Component } from 'react'
import './BaiTapBookingTicket.css'

export default class 
 extends Component {
  render() {
    return (
      <div className='hangghe' style={{fontSize:'30px'}}>
          {this.props.hangGhe.hang}
      </div>
    )
  }
}
