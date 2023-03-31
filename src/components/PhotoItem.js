import './PhotoItem.css'

function PhotoItem(props) {
    const { photo, onPhotoClick } = props;
    return (
        <div className='photo-item'>
            <img src={photo.thumbnailUrl} onClick={() => {onPhotoClick(photo)}} />
            <h4>{photo.title}</h4>
        </div>
    );
}

export default PhotoItem;
