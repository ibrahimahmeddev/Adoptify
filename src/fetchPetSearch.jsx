export default async function fetchPetSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const response = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );

  return response.json();
}
