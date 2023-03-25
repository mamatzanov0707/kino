import React, {useContext, useState,useRef} from 'react';
import logo from '../img/logo.svg'
import {Link, NavLink,useNavigate} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"
import {LanguageContext} from "../context";
import {CgDarkMode} from 'react-icons/cg'

import { Sling as Hamburger } from 'hamburger-react'

const Header = ({getDark}) => {

    const [isOpen, setOpen] = useState(false)

    const navigate = useNavigate()
    const [value , setValue] = useState('')
    const {setLanguage , language} = useContext(LanguageContext)
    const inputRef = useRef()
    const changeLanguage = e =>{
        const {value} = e.target
        setLanguage(value)
        localStorage.setItem('LMG',value)
    }
    const  enterClick = (e) => {
      if (e.key === "Enter"){
          navigate(`/movies/search-result/${value}`)
          inputRef.current.value = ""
      }else {
          return"none"
      }
    }
    return (
        <div id='header'>
            <div className='container'>
                <div className='header'>
                    <div className='header-logo'>
                        <Link to={'/'}>
                            <img src={logo} alt=""/>
                        </Link>
                    </div>
                    <div className='header-nav'>
                        <NavLink className='header-car' to={'/'}>Home</NavLink>
                        <NavLink className='header-car' to={'/playing'}>Playing</NavLink>
                        <NavLink className='header-car' to={'/Popular'}>Popular</NavLink>
                        <NavLink className='header-car' to={'/Top-Rated'}>Top Rated</NavLink>
                    </div>
                  <div className='header-buttons'>
                      {/*<input type="search" placeholder="search...." style={{display: counter ? "" : "none"}}/>*/}
                      {/*<AiOutlineSearch className="header--too" onClick={() => setCounter(!counter)} style={{color:'white'}}/>*/}
                      <input ref={inputRef} onChange={(event)=>setValue(event.target.value)}
                             onKeyDown={enterClick} type="text" placeholder='kino'/>
                      <button
                          onClick={() => navigate(`/movies/search-result/${value}`)}
                      >search</button>
                      {/*<button>Request demo</button>*/}
                  </div>
                    <select className='header-open' onChange={changeLanguage}>
                        {/*<option value="kg-KG">Кыргыз</option>*/}
                        <option value="ru-RU" selected={language === 're-RU'}>русский</option>
                        <option value="en-US" selected={language === 'en-US'}>english</option>
                        <option value="fr-FR" selected={language === 'fr-FR'}>france</option>
                    </select>
                    <CgDarkMode className='header-icons' onClick={getDark} style={{color:'white',width:'28px',height:'28px',cursor:'pointer'}}/>
                    <div className='header--burger' onClick={() => setOpen(!isOpen)}>
                        <Hamburger  color='rgb(252, 6 , 108)' toggle={isOpen} size='32'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;