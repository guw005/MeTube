import React from 'react';
import { date } from "./../../util/date_util";

class VideoShow extends React.Component{

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render(){

        const {video, users} = this.props
        if(!video) return null;

        return (
          <div className="video-show">
            <video
              className="video-show-video"
              controls="controls"
              key={video.video_url}
              autoPlay
            >
              <source src={video.video_url} type="video/mp4" />
            </video>
            <section className="video-show-video-info">
              <span className="video-show-title">{video.title}</span>
              <span className="video-show-views-and-time">
                {`${video.view_counts} views \u2022 ${date(video.created_at)}`}
              </span>
            </section>
            <section className="video-show-author">
              <img
                className="video-show-author-pic"
                src={users[video.author_id].image_url}
              />
              <section className="video-show-author-and-description">
                <span className="video-show-author-username">
                  {users[video.author_id].username}
                </span>
                <p className="video-show-video-description">
                  {video.description}
                </p>
              </section>
            </section>
          </div>
        );
    }
};

export default VideoShow;