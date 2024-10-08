import youtube from '../youtube.json';
import Card from './Card';
import "../Css/video.css";

const Cards = () => {
  return (
    <div className='video_grid'>
        {
            youtube.videoGrid.map((video) => 
            <Card
            key={video.id}
            imageThumbnail={video.imageThumbnail}
            videoTime={video.videoTime}
            profilePic={video.profilePic}
            videoTitle={video.videoTitle}
            videoAuthor={video.videoAuthor}
            videoStats={video.videoStats}
            />
            )
        }
    </div>
  )
}

export default Cards