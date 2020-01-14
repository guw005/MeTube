import { connect } from "react-redux";
import VideoShow from "./video_show";
import { fetchVideo } from "./../../actions/video_actions";

const mSP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    users: state.entities.users,
    currentUser: state.session.id
});

const mDP = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
})

export default connect(mSP, mDP)(VideoShow);