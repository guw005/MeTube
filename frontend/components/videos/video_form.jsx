import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            thumbnailFile: null,
            thumbnailUrl:  null,
            videoFile: null,
            videoUrl: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(type){
        return e => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleFile(e, typeFile, typeUrl){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ [typeFile]: file, [typeUrl]: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e){
        e.preventDefault;

        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        if(this.state.thumbnailFile){
          formData.append('video[thumbnail]', this.state.thumbnailFile);
        }
        if(this.state.videoFile){
          formData.append('video[video_file]', this.state.videoFile);
        }
        
        this.props.createVideo(formData).then(resp =>{
          this.props.hideModal();
          document.getElementById('modal-container-hidden').style.display = "none";
          this.props.history.push(`/videos/${resp.payload.video.id}`);
        });
    }

    render(){
        const preview = this.state.thumbnailUrl ? <img src={this.state.thumbnailUrl} /> : null;
        return (
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="form-top-section">
              <span className="form-top-section-text">Upload video</span>
              <div className="form-top-section-close">
                <span
                  onClick={() => {
                    this.props.hideModal();
                    document.getElementById(
                      "modal-container-hidden"
                    ).style.display = "none";
                  }}
                >
                  X
                </span>
              </div>
            </div>

            <label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Add a title that describes your video"
              />
              <span>Title (required)</span>
              <span>{`${this.state.title.length} / 100`}</span>
            </label>

            <label>
              <textarea
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Tell viewers about your video"
              />
              <span>Description</span>
              <span>{`${this.state.description.length} / 5000`}</span>
            </label>

            <h3>Thumbnail</h3>
            <label>
              <span>Upload thumbnail</span>
              <input
                type="file"
                onChange={e =>
                  this.handleFile(e, "thumbnailFile", "thumbnailUrl")
                }
              />
            </label>
            {preview}

            <label>
              <input
                type="file"
                onChange={e => this.handleFile(e, "videoFile", "videoUrl")}
              />
              <span>Drag and drop a file you want to upload</span>
              <span>Your video will be private until you publish it</span>
            </label>

            <input type="submit" value="DONE"/>
          </form>
        );
    }
}

 export default withRouter(VideoForm);