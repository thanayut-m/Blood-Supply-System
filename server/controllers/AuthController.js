export const resetPassword = (req, res, next) => {
  try {
    console.log("resetPassword");
    res.status(200).json({ message: "resetPassword" });
  } catch (error) {
    console.log(err);
    next(error);
  }
};
