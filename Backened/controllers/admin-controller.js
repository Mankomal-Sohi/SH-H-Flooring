const Contact = require("../Models/contact");
const Info=require("../Models/info");

const getAllUsers = async (req, res) => {
  try {
    const contactusers = await Contact.find();
    console.log(contactusers);

    if (!contactusers || contactusers.length === 0) {
      return res.status(404).json({ message: "No users found requesting contact" });
    }

    return res.status(200).json(contactusers);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return res.status(500).json({ message: "An error occurred", error: error.message });
  }

};
const getAllInfo = async (req, res) => {
  try{
    const info = await Info.find();
    console.log(info);

    if (!info || info.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(info);
  } catch (error) {
    console.error("Error fetching users requesting more info:", error.message);
    return res.status(500).json({ message: "An error occurred", error: error.message });
  }
}

module.exports = {getAllUsers, getAllInfo};
