import './PhotoPost.css'

function PhotoPost(props) {
     const { photo, onBgClick } =props;
     return (  
        <div className="photo-post">
            <div className="photo-post-bg" onClick={onBgClick} />
            <div className="photo-post-content">
                <img src={photo.fullUrl} />
                <h4>{photo.title}</h4>
            </div>
        </div>
    );
}

export default PhotoPost;