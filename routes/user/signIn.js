const authUtil = require("../../response/authUtil");
const { Users } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // JWT를 사용하여 토큰 발급

const SignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email: email } });

    if (!user) {
      return res
        .status(401)
        .send(authUtil.successFalse(401, "존재하지 않는 아이디입니다."));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .send(authUtil.successFalse(401, "비밀번호가 일치하지 않습니다."));
    }

    // JWT 토큰 발급
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    }); // 비밀 키와 만료 시간 설정

    return res
      .status(200)
      .send(authUtil.successTrue(200, "로그인 성공", { token }));
  } catch (error) {
    console.error(error);
    return res.status(500).send(authUtil.unknownError({ error: error }));
  }
};

module.exports = SignIn;
