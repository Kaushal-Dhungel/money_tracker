import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { SidebarData } from './data';
import MenuIcon from '@material-ui/icons/Menu';
import axios from 'axios';
import {parseJwt,logOutFunc} from './utils';
import swal from 'sweetalert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CancelIcon from '@material-ui/icons/Cancel';

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const [name,setName] = useState('')

  useEffect(() => {
  
  const fetchName = async () => {
      const parsed = parseJwt(localStorage.getItem("refresh"));
      
      const config = {
          params: {
            'user_id' : parsed.user_id
          },
        };

      await axios.get(`${process.env.REACT_APP_URL}/getname`, config)
      .then (res => {
          setName(res.data[0])
      })
      .catch(err => {
          console.log(err)
      })
  }
  fetchName()
  },[])

  const showSidebar = () => setSidebar(!sidebar);


  const logout = () => {
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to log out?",
        icon: "warning",
        dangerMode: true,
      })
      .then(willLogOut => {
        if (willLogOut) {
          swal("Logged Out!", "You have been logged out!", "success")
          .then(okay => {
            logOutFunc()
            // history.push('/');
          })
        }
      })
  }

  return (
    <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <MenuIcon onClick={showSidebar} style={{ fontSize: 40, color:"white" }} />
          </Link>
          <h2> Track Money Flow </h2>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <CancelIcon onClick={showSidebar} style={{ fontSize: 40, color:"white" }}/>
              </Link>
            </li>

            <li className = "left_top">
              <h2>  {name.charAt(0).toUpperCase() + name.slice(1)} </h2>
              <span className = "form_button logout">
                  <button className = "simple_button logout_btn" onClick = {logout}> Logout <ExitToAppIcon /> </button>
              </span>
              <hr />
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;