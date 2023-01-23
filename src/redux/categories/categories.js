const STATUS_CHECKED = 'bookstore/categories/STATUS_CHECKED';

const checkStatusAction = () => {
    return {
        type: STATUS_CHECKED,
    };
}

const statusReducer = (state = [], action = {}) => {
    switch(action.type){
        case STATUS_CHECKED: return "Under construction";
        default: return state;
    }
}

export {checkStatusAction};
export default statusReducer;