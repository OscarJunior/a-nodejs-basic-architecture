const { generateHash } = require('../../../cryptions');

const usersDAL = require('../DAL');
const usersDomain = require('../domain');

async function createNewUser(data) {
  const generatedBody = usersDomain.generateNewUser(data);
  const encryptedPassword = await generateHash(generatedBody.password);

  return usersDAL.saveUser({
    ...generatedBody,
    password: encryptedPassword,
  });
}

module.exports = createNewUser;
