import React from 'react';
import { Link } from 'react-router-dom'

class upperBar extends React.Component{
    handleShowModal() {
        if(this.props.currentUser){
            return (
              <span
                onClick={
                    () => {
                        this.props.showModal({ type: "uploadVideo" });
                        document.getElementById('modal-container-hidden').style.display = "block";
                    }
                }
              >
                upload Video
              </span>
            );
        } else {
            return (
                <span>Login first</span>
            )
        }
    }

    render() {
        return(
            <div>
                <span>hamburger icon</span>
                <Link to='/'>Metube logo</Link>
                {this.handleShowModal()}
            </div>
        )

    }
}

export default upperBar;