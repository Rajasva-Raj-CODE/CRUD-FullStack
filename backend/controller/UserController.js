import UserModels from "../models/User.js";

const Createuser = async (req, res) => {
  try {
    const { name, fathername, email, phone } = req.body;

    const NewUser = new UserModels({ name, fathername, email, phone });
    await NewUser.save();
    res
      .status(200)
      .json({ success: true, Message: "User Created Successfully", NewUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, Message: "internal server error", NewUser });
  }
};

const Getuser = async (req, res) => {
  try {
    const user = await UserModels.find({});
    if (!user) {
      return res.status(404).json({ success: false, Message: "No User Found" });
    }
    res.status(200).json({ success: true, Message: "User Found", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, Message: "internal server error" });
  }
};

//Update User
const Updateuser = async (req, res) => {
  try {
   const userId = req.params.id;
    const updatedUser = await UserModels.findByIdAndUpdate(userId, req.body,
     {new:true});
    if (!updatedUser) {
      return res.status(404).json({ success: false, Message: "No User Found" });
    }
    res
      .status(200)
      .json({
        success: true,
        Message: "User Updated Successfully",
        updatedUser,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, Message: "internal server error" });
  }
};

export { Createuser, Getuser, Updateuser };
