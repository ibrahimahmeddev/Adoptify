export default async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];
  if (!animal) return [];

  const res = await fetch(
    ` https://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );

  if (!res.ok) throw new Error(`breeds Not Found`);

  return res.json();
}
