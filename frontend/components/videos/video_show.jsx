import React from 'react';

import VideoShowItem from './video_show_item';

class VideoShow extends React.Component{

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render(){

        const {video, users} = this.props
        if(!video) return null;

        return (
            <VideoShowItem video={video} users={users}/>
        );
    }
};

export default VideoShow;