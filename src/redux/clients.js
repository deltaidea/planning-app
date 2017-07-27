const initialState = [
  { id: '0', name: 'Eddie Albert' },
  { id: '1', name: 'Eddy Arnold' },
  { id: '2', name: 'Neil Armstrong' },
  { id: '3', name: 'Nils Asther' },
  { id: '4', name: 'Stella Adler' },
  { id: '5', name: 'Steve Allen' },
];

// There're no actions specific to clients. The list is hardcoded.
export function reducer() {
  return initialState;
}
