const chai = require('chai');
const sinon = require('sinon');

const generateNewUser = require('../../../../app/components/users/domain/generateNewUser');
const idsUtils = require('../../../../app/utils/ids');

const { expect } = chai;

describe('generateNewUser', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('it generates a new user throught data input', (done) => {
    sandbox.stub(idsUtils, 'generateNewId').callsFake(() => 'foo');
    sandbox.stub(Date, 'now').callsFake(() => 'bar');

    const input = {
      username: 'foo',
      password: 'bar',
    };

    const generatedUser = generateNewUser(input);

    expect(generatedUser).to.eql({
      username: 'foo',
      password: 'bar',
      id: 'foo',
      createdOn: 'bar',
    });

    done();
  });

  it('It checks validation body was up', (done) => {
    const input = {};

    function getThrow() {
      generateNewUser(input);
    }

    expect(getThrow).to.throw();

    done();
  });
});
