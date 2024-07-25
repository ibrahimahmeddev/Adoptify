import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { activeImage } from '../adoptedPetSlice/adoptedPetSlice';

const Carousel = ({
  images = `https://pets-images.dev-apis.com/pets/none.jpg`,
}) => {
  const [active, setActiveIndex] = useState(0);

  const handelIndex = e => {
    setActiveIndex(+e.target.dataset.index);
  };

  const dispatch = useDispatch();
  dispatch(activeImage(active));

  return (
    <div className="carousel">
      <img src={images[active]} alt="" />
      <div className="carousel-smaller">
        {images.map((image, index) => (
          <img
            src={image}
            className={index == active ? 'active' : ''}
            alt="animal thumpnail"
            key={image}
            data-index={index}
            onClick={e => {
              handelIndex(e);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
