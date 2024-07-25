import { useEffect, useState } from 'react';
import Results from './Results';
import useBreedList from './useBreedList';
import fetchPetSearch from './fetchPetSearch';
import { useQuery } from '@tanstack/react-query';
import ErrorBoundary from './ErrorBoundary';
import { useSelector } from 'react-redux';

const Animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const Search = () => {
  const [animal, setAnimal] = useState('');
  const [breeds] = useBreedList(animal);

  const [formState, setFormState] = useState({
    location: '',
    animal: '',
    breed: '',
  });

  const { adoptedPetValue: adoptedPet, activeImageValue: activeImage } =
    useSelector(state => state.adoptedPet);

  const results = useQuery(['search', formState], fetchPetSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();

          const formData = new FormData(e.target);
          setFormState({
            location: formData.get('location'),
            animal: formData.get('animal'),
            breed: formData.get('breed'),
          });
        }}
      >
        {adoptedPet ? (
          <div className="adoptePet">
            <img src={adoptedPet.images[activeImage]} alt="" />
            <h1>{adoptedPet.name}</h1>
          </div>
        ) : null}

        <label htmlFor="location">
          location
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            type="text"
            id="animal"
            name="animal"
            placeholder="animal"
            onChange={e => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {Animals.map(animal => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select type="text" id="breed" name="breed">
            <option />
            {breeds.map(breed => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

const SearchErrorBoundry = props => (
  <ErrorBoundary>
    <Search {...props} />
  </ErrorBoundary>
);

export default SearchErrorBoundry;
