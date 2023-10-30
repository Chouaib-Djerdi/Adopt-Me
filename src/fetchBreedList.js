const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) {
    return [];
  }
  const apires = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );

  if (!apires.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return apires.json();
};

export default fetchBreedList;
