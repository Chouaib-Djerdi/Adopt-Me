const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apires = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apires.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apires.json();
};

export default fetchPet;
