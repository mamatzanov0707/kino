import React, {useContext, useState} from 'react';
import logo from '../img/logo.svg'
import {Link, NavLink,useNavigate} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"
import {LanguageContext} from "../context";

const Header = () => {
    // const [counter, setCounter] = useState(false)
    const navigate = useNavigate()
    const [value , setValue] = useState('')
    const {setLanguage} = useContext(LanguageContext)
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
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/playing'}>Playing</NavLink>
                        <NavLink to={'/Popular'}>Popular</NavLink>
                        <NavLink to={'/Top-Rated'}>Top Rated</NavLink>
                    </div>
                  <div className='header-buttons'>
                      {/*<input type="search" placeholder="search...." style={{display: counter ? "" : "none"}}/>*/}
                      {/*<AiOutlineSearch className="header--too" onClick={() => setCounter(!counter)} style={{color:'white'}}/>*/}
                      <input onChange={(event)=>setValue(event.target.value)} type="text" checked='kino'/>
                      <button
                          onClick={() => navigate(`/movies/search-result/${value}`)}
                      >search</button>
                      {/*<button>Request demo</button>*/}
                  </div>
                    <select onChange={e => setLanguage(e.target.value)}>
                        {/*<option value="kg-KG">Кыргыз</option>*/}
                        <option value="en-US">english</option>
                        <option value="ru-RU">русский</option>
                        <option value="fr-FR">france</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Header;