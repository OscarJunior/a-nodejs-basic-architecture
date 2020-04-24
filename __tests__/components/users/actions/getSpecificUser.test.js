const chai = require('chai');

const getSpecificUser = require('../../../../app/components/users/actions/getSpecificUser');

const { expect } = chai;

describe('getSpecificUser', () => {
  it('default behavior', (done) => {
    const usersDAL = {
      findUser: (body) => body,
    };
    const data = {
      username: 'foo',
    };

    getSpecificUser(usersDAL, data).then((response) => {
      expect(response).to.deep.equal({
        username: 'foo',
      });
      done();
    });
  });

  it('you must supply a username', (done) => {
    const usersDAL = {};
    const data = {};

    getSpecificUser(usersDAL, data).catch(() => {
      expect(true);
      done();
    });
  });
});
