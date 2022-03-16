const Users = require("../models/Users");

const listUsers = async (req, res) => {
  try {
    const user = await Users.findAll({ raw: true });
    res.status(200).json(user);

  } catch (err) {
    res.status(500).json({ error: err });
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).send('Bad Request');
  }

  if (!id) {
    return res.status(403).send('Forbidden');
  }

  try {
    const user = await Users.findOne({ where: { id: id } });

    if (!user) {
      return res.status(404).send('Not Found');
    }

    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

const addUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('Bad request All fields are mandatory')
  }

  const user = {
    name: name,
    email: email,
    password: password
  }

  try {
    await Users.create(user)
    return res.status(201).json({ message: 'Conta created successfully' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

const deleteUser= async (req, res) => {
  const { id } = req.params;
  const user = await Users.findOne({ where: { id: id } });

  if (!id) {
    return res.status(403).send('Forbidden');
  }

  if (isNaN(id)) {
    return res.status(400).send('Bad Request');
  }

  if (!user) {
    return res.status(404).send('Not Found');
  }

  try {
    await Users.destroy({ where: { id: id } });
    return res.status(200).send('User deleted successfully');
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email, password } = req.body;

  if (!id) {
    return res.status(403).send('Forbidden');
  }

  if (isNaN(id)) {
    return res.status(400).send('Bad Request');
  }

  if (!name || !email || !password) {
    return res.status(400).send('Bad request All fields are mandatory');
  }

  let userFound = await Users.findOne({ where: { id: id } });
  userFound.name = name
  userFound.email = email
  userFound.password = password

  try {
    await userFound.save({ where: { id: id } });
    return res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

module.exports = {
  listUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser
}