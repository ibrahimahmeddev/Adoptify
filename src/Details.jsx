import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import fetchPetDetails from './fetchPetfDetails';
import { adopt } from './adoptedPetSlice/adoptedPetSlice';
import ErrorBoundary from './ErrorBoundary';
import Carousel from './Carousel/Carousel';
import { useDispatch } from 'react-redux';
import Modal from './Modal/Modal';
import { useState } from 'react';
import ModalContent from './Modal/ModalContent';
import { createPortal } from 'react-dom';

const Details = () => {
  const { id } = useParams();
  const result = useQuery(['details', id], fetchPetDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🙀🐶</h2>
      </div>
    );
  }
  const pet = result.data.pets[0];

  return (
    <div className="details">
      <div>
        <Carousel images={pet.images} />

        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button
          onClick={() => {
            {
              // dispatch(adopt(pet));
              // navigate('/');
              setShowModal(true);
            }
          }}
        >
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal
          ? createPortal(
              <ModalContent>
                <div>
                  <h1>Would you like to adopt {pet.name}?</h1>
                  <div className="buttons">
                    <button
                      onClick={() => {
                        dispatch(adopt(pet));
                        navigate('/');
                      }}
                    >
                      Yes
                    </button>
                    <button onClick={() => setShowModal(false)}>No</button>
                  </div>
                </div>
              </ModalContent>,
              document.body,
            )
          : null}
      </div>
    </div>
  );
};

const DetailsErrorBoundry = props => (
  <ErrorBoundary>
    <Details {...props} />
  </ErrorBoundary>
);

export default DetailsErrorBoundry;
