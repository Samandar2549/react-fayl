import React, { Component } from 'react'
import Axios from 'axios'
import { Link, Outlet } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default class Messenger extends Component {
    state = {
        base: []
    }
    componentDidMount = () => {
        Axios.get("https://api.npoint.io/fe5ba17c1d0bfcb8fae5")
            .then((response) => {
                // console.log(response)
                const base = response.data
                this.setState({ base })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className='main'>
                <div className='small-container my-4 position-relative card'>
                    <div className='row'>
                        <div className='col-9 col-sm-7 col-lg-5 leftmessenger pe-0'>
                            {
                                (this.state.base.length > 0) ?
                                    this.state.base.map((element, index) => {
                                        return (
                                            <div>
                                                {
                                                    (index == 0) &&
                                                    <div>
                                                        <div className='container'>
                                                            <div className='messengertop'>
                                                                {
                                                                    <div className='row'>
                                                                        <div className='col-9 p-0'>
                                                                            <h6 className='text-center '>
                                                                                <Link to='/profileInfo/zufarbek_abdurahmonov' className='profillink'>
                                                                                    <div className='py-3 px-0'>
                                                                                        {element.nick_name}
                                                                                        <KeyboardArrowDownIcon />
                                                                                    </div>
                                                                                </Link>
                                                                            </h6>
                                                                        </div>
                                                                        <div className='col-3 py-2'>
                                                                            <BorderColorIcon />
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                        <hr className='m-0' />
                                                        <div className='container my-2'>
                                                            <h6>Сообщения</h6>
                                                        </div>
                                                    </div>
                                                }
                                                <div className='container'>
                                                    <Link to='/messenger' style={{textDecoration: "none", color: "black"}}>
                                                    <div className='row my-2'>
                                                        <div className='col-3'>
                                                            <img className='rounded-circle rightavatar' src={element.profile_img} alt={element.nick_name} />
                                                        </div>
                                                        <div className='col-9'>
                                                            <span>
                                                                {element.nick_name}
                                                            </span>
                                                            <br/>
                                                            <span className='text-muted'>
                                                                В сети 7 ч. назад
                                                            </span>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                    
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    <div class="d-flex justify-content-center">
                                        <div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className='col-9 col-sm-5 col-lg-7'>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}