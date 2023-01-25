import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: 'Setup development pt 1',
    author: 'mayer',
  },
  {
    id: uuidv4(),
    title: 'Develop website pt 1',
    author: 'Cast',
  },
  {
    id: uuidv4(),
    title: 'Deploy pt 1',
    author: 'halfcast',
  },
];

export default initialState;
