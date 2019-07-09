import { ADD_ITEM } from './actions';

const initialData = [
  {
    id: 1,
    name: 'Test 1',
    condition: true,
    email: 'test1@gmail.com',
    addresses: ['test1@mail.ru', 'test1@yandex.ru'],
  },
  {
    id: 2,
    name: 'Test 2',
    condition: true,
    email: 'test2@gmail.com',
    addresses: ['test2@mail.ru', 'test2@yandex.ru'],
  },
  {
    id: 3,
    name: 'Test 3',
    condition: true,
    email: 'test3@gmail.com',
    addresses: ['test3@mail.ru', 'test3@yandex.ru'],
  },
];

function list(state = initialData, action) {
  switch (action.type) {
    case ADD_ITEM: {
      // return [action.title, ...state];
      const newArray = state.concat([action.title]);
      return newArray.sort();
    }
    default:
      return state;
  }
}

export default list;
