import React, { Component, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, Outlet } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <header className='w-100 d-flex position-fixed d-absolute top-0'>
          <div className='small-container'>
            <div className='row'>
              <div className='col-md-6 col-lg-4 d-none d-md-block'>
                <img src="ins.png" alt="insta" />
              </div>
              <div className='d-none d-lg-block col-lg-4'>
                <form>
                  <input onClick={() => this.props.farqiyuq()} type='search' className='search position-relative' placeholder='Search' /><br />
                </form>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-4 d-flex justify-content-between'>
                <Link to="/">
                  <div><HomeIcon style={{ textDecoration: 'none', color: 'black' }} /></div>
                </Link>
                <Link to="/messenger">
                  <div><SendIcon style={{ textDecoration: 'none', color: 'black' }}/></div>
                </Link>
                <div><AddBoxIcon /></div>
                <div><ExploreIcon /></div>
                <div><FavoriteBorderIcon /></div>
                <Link to="/profileInfo/zufarbek_abdurahmonov">
                  <div><AccountCircleIcon style={{ textDecoration: 'none', color: 'black' }} /></div>
                </Link>
              </div>
            </div>
            {/* <SearchIcon/> */}
          </div>
        </header>
      </div>
    )
  }
}