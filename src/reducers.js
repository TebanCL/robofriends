import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants.js'

const initialStateSearch = {
    searchField: '',

}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { 
                ...state, 
                searchField: action.payload 
            }
        default:
            return state
    }
}

/*
    {...state, key: value} is the same, in this context that: Object.assign({}, state, {key: value})
    just lest verbose.
*/
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type){
        case REQUEST_ROBOTS_PENDING:
            return {
                ...state, 
                isPending : true
            }
        case REQUEST_ROBOTS_SUCCESS:
            return { 
                ...state, 
                isPending: false, 
                robots: action.payload
            }
        case REQUEST_ROBOTS_FAILED:
            return { 
                ...state, 
                isPending: false,
                error: action.payload
            }
        default:
            return state
    }
}