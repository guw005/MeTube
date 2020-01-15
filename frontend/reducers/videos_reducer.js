import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from './../actions/video_actions';

const videosReducer = (state={}, action) => {
    Object.freeze(state);
    // const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            // nextState = action.payload.videos
            return Object.assign({}, state, action.payload.videos);
        case RECEIVE_VIDEO:
            // nextState[action.payload.video.id] = action.payload.video
            return Object.assign({}, state, {[action.payload.video.id]: action.payload.video});
        case REMOVE_VIDEO:
            let nextState = Object.assign({}, state);
            delete nextState[action.videoId]
            return nextState;
        default:
            return state;
    }
};

export default videosReducer;