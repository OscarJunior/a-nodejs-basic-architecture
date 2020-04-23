const chai = require('chai');
const sinon = require('sinon');

const generateLoginReponse = require('../../../../app/components/auth/domain/generateLoginReponse');
const tokensUtils = require('../../../../app/utils/tokens');

const { expect } = chai;

describe('generateLoginReponse', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('it generates a default login response', (done) => {
    sandbox
      .stub(tokensUtils, 'signToken')
      .withArgs({ userId: 'bar' })
      .callsFake(() => 'access_token');

    const user = {
      id: 'bar',
    };
    const loginResponse = generateLoginReponse(user);

    expect(loginResponse).to.eql({
      access_token: 'access_token',
      user,
    });

    done();
  });
});
