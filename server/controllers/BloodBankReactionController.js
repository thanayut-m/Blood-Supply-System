export const createBloodBankReaction = (req, res) => {
  try {
    console.log("hello world.");
    res.status(200).json("hello world.");
  } catch (error) {
    console.log(error);
  }
};
