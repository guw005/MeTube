import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component{

    componentDidMount(){
        this.props.fetchAllVideos();
    }

    render(){
        return (
          <div>
              <section>
                  <h1>Recommended</h1>
                  {this.props.videos.map(video => (
                      <VideoIndexItem 
                      video={video}
                      user={this.props.users[video.author_id]}
                      history={this.props.history}
                      key={video.id}
                      />
                  ))}
              </section>
          </div>
        );
    }
};

export default VideoIndex;