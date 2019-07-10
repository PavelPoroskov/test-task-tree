import { UPDATE_OBJECTS } from './actions';

const initialData = {
  1: {
    id: 1,
    group: false,
    name: 'Test 1',
    condition: true,
    email: 'test1@gmail.com',
    addresses: ['test1@mail.ru', 'test1@yandex.ru'],
  },
  2: {
    id: 2,
    group: false,
    name: 'Test 2',
    condition: false,
    email: 'test2@gmail.com',
    addresses: ['test2@mail.ru', 'test2@yandex.ru'],
  },
  3: {
    id: 3,
    group: false,
    name: 'Test 3',
    condition: true,
    email: 'test3@gmail.com',
    addresses: ['test3@mail.ru', 'test3@yandex.ru'],
  },
};

function reducer(state = initialData, action) {
  switch (action.type) {
    case UPDATE_OBJECTS: {
      const { list } = action.payload;
      const updatedObjById = list.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
      return {
        ...state,
        ...updatedObjById,
      };
    }
    default:
      return state;
  }
}

export default reducer;
