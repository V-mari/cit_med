class UserController {
    constructor(){}    

}

module.exports = UserController
//importa dependencias
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');