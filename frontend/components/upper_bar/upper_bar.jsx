import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class upperBar extends React.Component{

    handleShowModal() {
        if(this.props.currentUser){
            return (
              <div
                id="upload-pic"
                className="upload-pic-container"
                onClick={
                    () => {
                        this.props.showModal({ type: "uploadVideo" });
                        document.getElementById('modal-container-hidden').style.display = "block";
                    }
                }
              >
                <img className="upload-pic" src={window.videoUploadPic}/>
              </div>
            );
        } else {
            
            return (
              <section
                id="upload-pic-container-signin"
                className="upload-pic-container-signin"
              >
                <img className="upload-pic-signin" src={window.videoUploadPic} />
              </section>
            );
        }
    }

    render() {
        return (
          <div className="upper-bar">
            <div className="hamburger-pic-container">
              <img className="hamburger-pic" src={window.hamburgerPic} />
            </div>
            <div
              className="youtube-pic-container"
              onClick={() => this.props.history.push("/")}
            >
              <img className="youtube-pic" src={window.youtubePic} />
            </div>
            <div className="search-bar"></div>
            <>{this.handleShowModal()}</>
          </div>
        );

    }
}

export default withRouter(upperBar);