import './App.css';
import Header from './components/Header';
import React, { Component, useState } from 'react'
import SearchResult from './components/SearchResult';
import { Link, Outlet } from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hide: false,
    }
  }
  hideSearch = () => {
    this.setState((previousValue) => ({
      hide: !this.state.hide
    }))
  }
  render() {
    return (
      <div className='general'>
        <Header farqiyuq={this.hideSearch}/>
        {
          (this.state.hide) && <SearchResult/>
        }
        <Outlet/>
      </div>
    )
  }
}


// export default App;
