import { connect } from 'react-redux';
import { createVideo } from './../../actions/video_actions';
import { clearErrors } from './../../actions/error_actions';
import { hideModal } from './../../actions/modal_actions';
import VideoForm from './video_form';

const mSP = state => ({
    // currentUserId: state.session.id,
    formType: 'Upload Video',
    errors: state.errors.video
});

const mDP = dispatch => ({
    createVideo: (video, cb) => dispatch(createVideo(video, cb)),
    clearErrors: () => dispatch(clearErrors()),
    hideModal: () => dispatch(hideModal())
})

export default connect(mSP, mDP)(VideoForm);