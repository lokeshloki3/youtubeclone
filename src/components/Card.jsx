import React from 'react'
import "../Css/general.css";
import "../Css/video.css";

const Card = (props) => {
  return (
    <div>
        <div className="video_preview">
            <div className="Thumbnail_row">
                <img className="thumbnail" src={props.imageThumbnail}/>
                <div className="video_time">{props.videoTime}</div>
            </div>
            <div className="video_info_grid">
                <div className="Channel_icon">
                    <img className="profile_picture" src={props.profilePic}/>
                </div>
                <div className="video_info">
                    <p className="video_title">
                        {props.videoTitle}
                    </p>
                    <p className="video_author">
                        {props.videoAuthor}
                    </p>
                    <p className="video_stats">
                        {props.videoStats}
                    </p>
                </div>
            </div>         
        </div>
    </div>
  )
}

export default Card