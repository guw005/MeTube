import React from 'react';

import VideoShowItem from './video_show_item';
// import RelatedVideos from './related_videos';
import VideoIndex from './video_index';

class VideoShow extends React.Component{

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render(){

        const {video, users, relatedVideos, fetchAllVideos} = this.props
        if(!video) return null;

        return (
          <div className="outer-video-show">
            <VideoShowItem video={video} users={users} />
            <VideoIndex videos={relatedVideos} users={users} fetchAllVideos={fetchAllVideos}/>
          </div>
        );
    }
};

export default VideoShow;