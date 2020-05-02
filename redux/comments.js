import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    console.log("payload in comments2",action.payload.text);
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            console.log("payload in comments",action.payload.text);
            const comment=action.payload;
            comment.id=state.comments.length;
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
};
