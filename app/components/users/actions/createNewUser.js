const cryptionsUtils = require('../../../utils/cryptions');
const usersDomain = require('../domain');

async function createNewUser(usersDAL, data) {
  const generatedBody = usersDomain.generateNewUser(data);
  const encryptedPassword = await cryptionsUtils.generateHash(generatedBody.password);

  return usersDAL.saveUser({
    ...generatedBody,
    password: encryptedPassword,
  });
}

module.exports = createNewUser;
