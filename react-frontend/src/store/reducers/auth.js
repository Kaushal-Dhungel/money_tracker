import * as actionTypes from '../actions/actionCreator';

const initialState = {
    totals: [],
    expenses : [],
    incomes : [],
    loading: true
}

const updateObject = (oldObject,updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

const updateTotal = (state,action) => {
    return updateObject(state,{
        totals : action.total
    });
}

const updateExpeses = (state,action) => {
    return updateObject(state, {
        expenses : action.expenses
    })
}

const updateIncome = (state,action) => {
    return updateObject(state, {
        incomes : action.incomes
    })
}

const updateLoading = (state,action) => {
    return updateObject(state, {
        loading : action.loading
    })
}

const AuthReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_TOTAL: return updateTotal(state,action);
        case actionTypes.UPDATE_EXPENSES: return updateExpeses(state,action);
        case actionTypes.UPDATE_INCOMES: return updateIncome(state,action);
        case actionTypes.UPDATE_LOADING: return updateLoading(state,action);

        default:
            return state;
    }
}

export default AuthReducer;
