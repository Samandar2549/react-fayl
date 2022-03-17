import React, { Component } from 'react'
import Axios from 'axios'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link, Outlet } from 'react-router-dom';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allUser: [],
            title: "follow",
            clicked: true
        }

    }
    changeTitle = () => {
        this.setState({ title: "following" });
    }
    state = {
        base: []
    }
    componentDidMount = () => {
        this.getUser()
    }
    getUser = () => {
        Axios.get("https://api.npoint.io/fe5ba17c1d0bfcb8fae5")
            .then((response) => {
                console.log(response.data)
                this.setState({ allUser: response.data })
            })
    }
    render() {
        const { allUser } = this.state
        return (
            <div className='main'>
                <div className='small-container my-4 position-relative'>
                    <div className='row'>
                        {
                            (allUser.length > 0) ?
                                this.state.allUser.map((element, index) => {
                                    return (
                                        <div className='col-lg-8 col-12'>
                                            <div className='card mb-4'>
                                                <div className='container'>
                                                    <div className='row my-2'>
                                                        <div className='col-1'>
                                                            <img className='avatar rounded-circle' src={element.profile_img} alt={element.nick_name} />
                                                        </div>
                                                        <div className='col-10 '>
                                                            <h6 className='px-4 py-2'>
                                                                <><Link className="profillink" to={`/profileInfo/${element.nick_name}`}> {element.nick_name}</Link></>
                                                            </h6>
                                                        </div>
                                                        <div className='col-1 py-2'>
                                                            <MoreHorizIcon />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img className='img-fluid w-100' src={element.post_img} alt={element.nick_name} />
                                                </div>
                                                <div className='container'>
                                                    <div className='row my-3'>
                                                        <div className='col-10'>
                                                            <FormControlLabel
                                                                className='p-1 m-0'
                                                                control={<Checkbox icon={<FavoriteBorderIcon className='text-dark' />}
                                                                    checkedIcon={<FavoriteIcon />}
                                                                    name="checkedH" />}
                                                            />
                                                            <ChatBubbleOutlineIcon className='mr-2' fontSize="medium" />
                                                            <SendIcon className='mx-2' fontSize="medium" />
                                                        </div>
                                                        <div className='col-2'>
                                                            <FormControlLabel
                                                                className='p-0 m-0'
                                                                control={<Checkbox icon={<BookmarkBorderIcon className='text-dark' />}
                                                                    checkedIcon={<BookmarkIcon className='text-dark' />}
                                                                    name="" />}
                                                            />
                                                            {/* <BookmarkBorderIcon fontSize="medium" /> */}
                                                        </div>
                                                    </div>
                                                    <h6>140 816 отметок "Нравится"</h6>
                                                    <div className='d-flex'>
                                                        <div><h6 className='d-inline'>{element.nick_name}</h6></div>
                                                        <div className='px-1'><p>{element.comment_user}</p>
                                                        </div>
                                                    </div>
                                                    <span className='text-muted'>Посмотреть все комментарии (332)</span>
                                                    {element.comments.map(element => {
                                                        return (
                                                            <div className='d-flex'>
                                                                <div><h6>{element.nickName}</h6></div>
                                                                <div className='px-1'><p className='my-0'>{element.comment}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                    <hr />
                                                    <div className='row mb-3'>
                                                        <div className='col-1'>
                                                            <SentimentSatisfiedAltIcon />
                                                        </div>
                                                        <div className='col-8 '>
                                                            <form>
                                                                <input className='w-100 comment' type="text" placeholder='Добавьте комментарий...' />
                                                            </form>
                                                        </div>
                                                        <div className='col-3 p-0'>
                                                            <a href="#" className='followlink'>
                                                                Опубликовать
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
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
                        <div className='col-lg-4 d-none d-lg-block d-absolute position-fixed rightside'>
                            <div className='container'>
                                {
                                    this.state.allUser.map((element, index) => {
                                        return (
                                            <div>
                                                {(index == 0) &&
                                                    <div className='row'>
                                                        <div className='col-2 my-3 p-0'>
                                                            <img className='rightavatar rounded-circle' src={element.profile_img} alt="nimadir" />
                                                        </div>
                                                        <div className='col-5'>
                                                            <h6 className='pt-4'>
                                                            <><Link className="profillink" to={`/profileInfo/${element.nick_name}`}> {element.nick_name}</Link></>
                                                            </h6>
                                                            {/* <p className='fullName'>{element.full_name}</p> */}
                                                        </div>
                                                        <div className='col-5 pt-4 px-5'>
                                                            <a className='followlink' href="#">переключиться</a>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                                <div className='row'>
                                    <div className='col-10'>
                                        <h6 className='text-muted'>Рекомендации для вас</h6>
                                    </div>
                                    <div className='col-2'>
                                        <span>
                                            Все
                                        </span>
                                    </div>
                                </div>
                                {this.state.allUser.map((element, index) => {
                                    return (
                                        <div className='row my-2'>
                                            <div className='col-2'>
                                                <img className='rounded-circle avatar' src={element.profile_img} alt="samandar" />
                                            </div>
                                            <div className='col-6'>
                                                <h6>
                                                <><Link className="profillink" to={`/profileInfo/${element.nick_name}`}> {element.nick_name}</Link></>
                                                </h6>
                                            </div>
                                            <div className='col-4'>
                                                <a onClick={() => this.setState({ clicked: !this.state.clicked })} className='followlink' href="#">{
                                                    this.state.clicked ? 'follow' : 'following'
                                                }
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className='row mt-5'>
                                    <p className='text-muted textbottom'>
                                        Информация Помощь Пресса API Вакансии <br /> Конфиденциальность Условия Места <br /> Популярные аккаунты Хэштеги Язык
                                    </p>
                                    <p className='text-muted textbottom'>© 2022 INSTAGRAM FROM META</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}