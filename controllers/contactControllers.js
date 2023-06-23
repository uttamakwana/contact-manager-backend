const mongoose = require("mongoose");
const contacts = require("../model/contactModel");
const asyncHandler = require("express-async-handler");

//@desc Get all the contacts
//GET /api/contacts
//access private - only authorized user can access the contacts
const getContacts = asyncHandler(async (req, res) => {
  const contact = await contacts.find();
  res.json({ message: "Get all contacts", data: { contact } });
});

//@desc Create a contact
//POST /api/contacts/
//access private - only authorized user can create a contact
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  console.log(name, email, phone);
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please fill all the fields!");
  }
  const contact = await contacts.create({ name, email, phone });
  res.json({ message: "Contact created succuessfully", data: contact });
});

//@desc Update a contact
//PUT /api/contacts/:id
//access private - only authorized user can update the contact
const updateContact = asyncHandler(async (req, res) => {
  const contact = await contacts.find({ _id: req.params.id });
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }
  const updatedContact = await contacts.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json({
    message: `Contact ${req.params.id} update successfully`,
    data: updatedContact,
  });
});

//@desc Delete a contact
//DELETE /api/contacts/:id
//access private - only authorized user can delete the contact
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await contacts.find({ _id: req.params.id });
  if (!contact) {
    throw new Error("Contact not found!");
  }
  await contacts.deleteOne({ _id: req.params.id });
  res.json({
    message: `Contact ${req.params.id} deleted successfully`,
    data: contact,
  });
});

//@desc Get a contact
//GET /api/contacts/:id
//access private - only authorized user can get the contact
const getContact = asyncHandler(async (req, res) => {
  const contact = await contacts.find({ _id: req.params.id });
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }
  res.json({
    message: `Contact ${req.params.id} get successfully`,
    data: contact,
  });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
