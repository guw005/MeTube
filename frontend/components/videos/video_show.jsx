import React from 'react';

import VideoShowItem from './video_show_item';
// import RelatedVideos from './related_videos';
// import RelatedVideoItem from './related_video_item';
import VideoIndexItem from './video_index_item';
// import VideoIndex from './video_index';


class VideoShow extends React.Component{

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    componentDidUpdate(prevProps){
      if(this.props.match.params.videoId != prevProps.match.params.videoId){
        this.props.fetchVideo(this.props.match.params.videoId)
      }
    }

    render(){

        const {video, users, relatedVideos, history} = this.props
        if(!video) return null;

        return (
          <div className="outer-video-show">
            <VideoShowItem video={video} users={users} />
            <div className="related-video-index">
              {relatedVideos.map(video => (
                <VideoIndexItem
                  key={video.id}
                  video={video}
                  user={users[video.author_id]}
                  history={history}
                />
              ))}
            </div>
          </div>
        );
    }
};

export default VideoShow;