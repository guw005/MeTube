import React from 'react';

const VideoIndexItem = ({video, user, history}) => {

    return (
      <div
        className="video-index-item"
        onClick={() => history.push(`/videos/${video.id}`)}
      >
        <img className="video-index-thumbnail" src={video.thumbnail} />
        <section className="video-index-info">
          <img className="video-author-pic" src={user.image_url} />
          <section className="video-author-info">
            <span className="video-index-title">{video.title}</span>
            <span className="video-index-author">{user.username}</span>
            <span className="video-index-views-and-time">
                {`${video.view_counts} views ${video.created_at}`}
            </span>
          </section>
        </section>
      </div>
    );
}

export default VideoIndexItem;