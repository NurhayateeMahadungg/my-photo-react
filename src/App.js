import './App.css';
import AppHeader from './components/AppHeader';
import PhotoItem from './components/PhotoItem';
import PhotoPost from './components/PhotoPost';
import photos from './data/photos';
import { useState } from 'react';
import AppSearch from './components/AppSearch';

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onPhotoOpenClick(thePhoto) {
    setSelectedPhoto(thePhoto);
  }

  function onPhotoCloseClick() {
    setSelectedPhoto(null);
  }

  const photoElements = photos.filter((photo) => {
    return photo.title.includes(searchText);
  }).map((photo, index) => {
    return <PhotoItem key={index} photo={photo} onPhotoClick={onPhotoOpenClick}/>
  });

  let photoPost = null;
  if (!!selectedPhoto) {
    photoPost = <PhotoPost photo={selectedPhoto} onBgClick={onPhotoCloseClick}/>
  }

  return (
    <div className="app">
        <AppHeader/>
        <section className='app-section'>
          <div className='app-container'>
            <AppSearch value = {searchText} onValueChange={setSearchText} />
            <div className='app-grid'>
                {photoElements}
            </div>
          </div>
        </section> 
        {photoPost}
    </div>
  );
}

export default App;
