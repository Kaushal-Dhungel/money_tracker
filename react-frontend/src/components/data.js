import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MoneyIcon from '@material-ui/icons/Money';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Expenses',
    path: '/expenses',
    icon: <LocalMallIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Incomes',
    path: '/income',
    icon: <MoneyIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Todo List',
    path: '/todolist',
    icon: <FormatListBulletedIcon />,
    cName: 'nav-text'
  },
  
];