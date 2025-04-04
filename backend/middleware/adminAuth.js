import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.send({
        success: false,
        message: "Unauthorised admin, Login again",
      });
    }

    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded_token !== process.env.EMAIL + process.env.PASSWORD) {
      return res.send({
        success: false,
        message: "Unauthorised admin, Login again",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.send({ success: false, message: error.message });
  }
};

export default adminAuth;
