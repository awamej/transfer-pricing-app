const { users } = require("../utils/db");
const { ValidationError } = require("../utils/errors");
const { v4: uuid } = require("uuid");
const { ObjectId } = require('mongodb');
const {createHmac} = require('crypto');

class User {
    constructor(data) {
      this._id = data._id ?? new ObjectId(uuid());
      this.email = data.email;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.company = data.company;
      this.password = data.password;
      this.salt = '';
    }
  
    async insert() {
      this.salt = crypto.randomBytes(16).toString('hex');
      console.log('salt', this.salt);
      const saltedPassword = salt + this.password;
      console.log('salted password', saltedPassword);
      this.password = createHmac('sha512').update(saltedPassword).digest('hex');
      console.log('password', this.password, this.toObject());
      const {insertedId} = await users.insertOne(this.toObject());
      this._id = insertedId;
      return insertedId;
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
  
    static async findById(id) {
      const data = await users.findOne({ _id: new mongodb.ObjectID(id) })
      if (data) {
        return new User(data);
      }
      return null;
    }
  
    static async findAll() {
      const data = await users.find().toArray();
      return data.map((userData) => new User(userData));
    }
  
    toObject() {
      return {
      _id: this._id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      company: this.company,
      password: this.password,
      };
    }
  }

module.exports = {
    User,
};