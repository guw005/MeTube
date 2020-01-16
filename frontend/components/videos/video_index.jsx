import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component{

    componentDidMount(){
        this.props.fetchAllVideos();
    }

    render(){
        return (
          <div className="index-page">
            <section className="nav-bar">
                <nav>NavBar</nav>
            </section>
            <section className="video-index">
              <h1 className="recommended-tag">Recommended</h1>
              <section className="recommended-video-index">
                {this.props.videos.map(video => (
                  <VideoIndexItem
                    video={video}
                    user={this.props.users[video.author_id]}
                    history={this.props.history}
                    key={video.id}
                    type='indexPage'
                  />
                ))}
              </section>
            </section>
          </div>
        );
    }
};

export default VideoIndex;