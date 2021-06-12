import React, { Component } from 'react';
import './UploadSection.css';
import { Paper, Avatar } from '@material-ui/core';
import live from "../../../../images/video.png";
import image from "../../../../images/image.png";
import feeling from "../../../../images/feelings.png";


class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Paper className= "upload__container">
            <div className="upload__top">
                <div>
                    <Avatar className="upload_img" src="https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/67799282_2356763091211453_5510315871081332736_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=-bWuQ1qnpowAX9EsuqA&_nc_ht=scontent.fhyd11-1.fna&tp=27&oh=9d9a57c30949b2077a686582f0c870ef&oe=60E0EDBF" ></Avatar>
                </div>
                <div>
                    <input className="upload__box" type="text" placeholder="what's on your mind, Vinod"></input>
                </div>
            </div>

            <div  className="upload__bottom">
                    <div className="upload__tabs">
                        <img src={live} width="30px" />
                        <div className="upload__text">Live Video</div>
                    </div>
                    <div className="upload__tabs">
                        <label for="file-upload" className="upload__tabs">
                            <img src={image} width="30px" />
                            <div className="upload__text">Photo/Video</div>
                        </label>
                       
                    </div>
                    <div className="upload__tabs">
                        <img src={feeling} width="30px" />
                        <div className="upload__text">Feeling/Activity</div>
                    </div>
                </div>
            </Paper>
        </div> );
    }
}
 
export default UploadSection;