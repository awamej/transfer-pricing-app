const { users } = require("../utils/db");
const { ValidationError } = require("../utils/errors");
const { v4: uuid } = require("uuid");
const { ObjectId } = require('mongodb');

class User {
    constructor(data) {
        if (!obj.email || !obj.firstName || !obj.lastName || !obj.company || !obj.password) {
            throw new ValidationError('Please enter all fields');
        }

      this._id = data._id ?? ObjectId(uuid());
      this.email = data.email;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.company = data.company;
      this.password = data.password;
    }
  
    async save() {
        const {upsertedId } = await users.
            updateOne({ _id: this._id }, { $set: this.toObject() }, { upsert: true })
        return upsertedId;
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