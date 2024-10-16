const authUtil = require('../../response/authUtil');
const { Users } = require('../../models');
const bcrypt = require('bcrypt');

const SignUp = async (req, res) => {
	const { password, email, name } = req.body;

  console.log('Users model:', Users);

  try {
    const user = await Users.findOne({
      where: { email: email },
      paranoid: false,
    });

    if (user) {
      return res
        .status(401)
        .send(authUtil.successFalse(401, '이미 존재하는 아이디입니다.'));
    } else {
      const hash = await bcrypt.hash(password, 10);
      await Users.create({
        password: hash,
        email: email,
        username: name,
      });
      return res
        .status(200)
        .send(authUtil.successTrue(200, '유저 회원가입에 성공하였습니다.'));
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send(authUtil.unknownError({ error: error }));
  }
};

module.exports = SignUp;