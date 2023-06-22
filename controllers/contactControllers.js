const getContacts = async (req, res) => {
  res.json({ message: "Get all contacts" });
};

const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  console.log(name, email, phone);
  res.json({ message: "Contact created succuessfully" });
};

const updateContact = (req, res) => {
  res.json({ message: `Contact ${req.params.id} update successfully` });
};

const deleteContact = (req, res) => {
  res.json({ message: `Contact ${req.params.id} deleted successfully` });
};

const getContact = (req, res) => {
  res.json({ message: `Contact ${req.params.id} get successfully` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
