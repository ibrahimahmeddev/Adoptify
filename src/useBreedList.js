// import { useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';
// import fetchBreedList from './fetchBreedList';

// // check if there is animal
// // check if animal exists in cache
// // request animal -- update cache

// export default function useBreedList(animal) {
//   const results = useQuery(['breeds', animal], fetchBreedList);
//   return [results?.data?.breeds ?? []];
// }

import { useGetBreedsQuery } from './petApiService';

export default function useBreedList(animal) {
  const { data: breeds } = useGetBreedsQuery(animal, { skip: !animal });
  return [breeds ?? []];
}
