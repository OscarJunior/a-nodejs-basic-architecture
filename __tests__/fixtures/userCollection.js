// users
const mockNewUser = {
  _id: '_id',
  bar: 'bar',
};
const mockNewUser2 = {
  _id: '_id',
  foo: 'foo',
};

// methods
const find = (query) =>
  Promise.resolve({
    toArray: () =>
      Promise.resolve(query && query.isEmpty ? [] : [mockNewUser, mockNewUser2]),
  });
const insertOne = () =>
  Promise.resolve({
    ops: [mockNewUser2],
  });

// user collection
const userCollection = {
  find,
  insertOne,
};

module.exports = userCollection;
