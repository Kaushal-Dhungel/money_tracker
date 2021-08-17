import axios from 'axios';
import * as actions from './actionCreator';

const logOutFunc = () => {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("access_expires")
    localStorage.removeItem("refresh_expires")
}

export function parseJwt (token) {

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const updateTotal = data => {
    return {
        type: actions.UPDATE_TOTAL,
        total: data
    }
}

export const updateExpenses = data => {
    return {
        type: actions.UPDATE_EXPENSES,
        expenses: data
    }
}

export const updateIncomes = data => {
    return {
        type: actions.UPDATE_INCOMES,
        incomes: data
    }
}


export const fetchTotal =  () => {
    return dispatch => {

        const refresh = localStorage.getItem("refresh");

        if (refresh === null || refresh === undefined)
        {
            logOutFunc();
            return;
        }

        const parsed = parseJwt(refresh);
        
        const config = {
            params: {
              'user_id' : parsed.user_id
            },
          };
    
        axios.get(`${process.env.REACT_APP_URL}/main/total`, config)
        .then (res => {
            dispatch(updateTotal(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const FetchExpenses = (startDate = null,endDate = null) => {
    return dispatch => {
        const parsed = parseJwt(localStorage.getItem("refresh"));
        const config = {
            params: {
              'user_id' : parsed.user_id,
              startDate,
              endDate,
            },
          };
        
        axios.get(`${process.env.REACT_APP_URL}/main/expense/`, config)
        .then (res => {
            dispatch(updateExpenses(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const FetchIncomes = (startDate = null,endDate = null) => {
    return dispatch => {
        const parsed = parseJwt(localStorage.getItem("refresh"));
        const config = {
            params: {
              'user_id' : parsed.user_id,
              startDate,
              endDate,
            },
          };
        
        axios.get(`${process.env.REACT_APP_URL}/main/income/`, config)
        .then (res => {
            dispatch(updateIncomes(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}
