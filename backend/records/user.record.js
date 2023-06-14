const { users } = require("../utils/db");
const { v4: uuid } = require("uuid");
const { ObjectId } = require('mongodb');
const crypto = require('crypto');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

class User {
    constructor(data) {
      const uuidString = uuid().replace(/-/g, '');
      this._id = data._id ?? new ObjectId(uuidString.slice(0,24));
      this.email = data.email;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.company = data.company;
      this.password = data.password;
      this.salt = data.salt ?? '';
    }
  
    async insert() {
      const salt = crypto.randomBytes(16).toString('hex');
      this.password = crypto.createHmac('sha512', salt).update(this.password).digest('hex');
      try {
          const {insertedId} = await users.insertOne(this.toObject(salt));
          this._id = insertedId;
          return [201, {message: "User registered with the id " + insertedId}];
        } catch (e) {
          console.error(e.message);
          return [500, {error: "Something went wrong, please try again later."}];
        }
    }

    async update() {
      const { modifiedCount } = await todos.updateOne({_id: this._id}, {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        company: this.company,
      });
      return modifiedCount;
  }
  
    async delete() {
      const { deletedCount  } = await users.deleteOne({ _id: this._id });
      return deletedCount;
    }
  
    static async login(email, password) {
      const user = await this.findByEmail(email)
      if (!user) {
        return [401, {error: "User does not exist"}];
      } else {
        const hashToCompare = crypto.createHmac('sha512', user.salt).update(password).digest('hex');
        if (hashToCompare !== user.password) {
          return [401, {error: "Wrong password"}];
        } else {
          const jwtSecret = process.env.JWT_SECRET;
          const data = {
            userId: user._id,
          };
          const token = jwt.sign(data, jwtSecret, { expiresIn: "1h"});
          return [200, {token: token}];
        }
      }
    }

    static async findById(id) {
      const data = await users.findOne({ _id: new mongodb.ObjectID(id) })
      if (data) {
        return new User(data);
      }
      return null;
    }

    static async findByEmail(email) {
      const data = await users.findOne({ email: email })
      if (data) {
        return new User(data);
      }
      return null;
    }
  
    static async findAll() {
      const data = await users.find().toArray();
      return data.map((userData) => new User(userData));
    }
  
    toObject(salt) {
      return {
      _id: this._id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      company: this.company,
      password: this.password,
      salt: salt,
      };
    }
  }

module.exports = {
    User,
};