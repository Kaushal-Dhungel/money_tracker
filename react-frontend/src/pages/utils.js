import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BarChartIcon from '@material-ui/icons/BarChart';


const cardIconStyle = {
    fontSize :"60",
    color :"#f50057"
}

export const icons = [<ShoppingCartIcon style = {cardIconStyle} />,<AccountBalanceWalletIcon style = {cardIconStyle} />,<BarChartIcon style = {cardIconStyle} />,<TrendingUpIcon style = {cardIconStyle} />]
export const header = [`Today's Expenses`,`Month's Expenses`,`Today's Income`,`Month's Income`]
