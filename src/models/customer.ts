import mongoose, { Schema, Document } from "mongoose";

// Define ContactPerson schema
const ContactPersonSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 50 },
  last_name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, maxlength: 50, unique: true },
  mobile_phone: { type: String, maxlength: 20, validate: /^\d{0,20}$/ },
  birth_date: { type: String }, // TODO: fix birth date format
  address: { type: Schema.Types.ObjectId, ref: "Address" },
});

// Define Address schema
const AddressSchema = new Schema({
  company_name: {
    type: String,
    required: function (this: { type: string }) {
      // Explicitly specify 'this' type
      return this.type === "COMPANY" || this.type === "DEALER";
    },
    maxlength: 50,
  },
  country: { type: String, required: true, maxlength: 50 },
  city: { type: String, required: true, maxlength: 50 },
  zip: { type: String, required: true, minlength: 5, maxlength: 5 },
  fax: { type: String, validate: /^\d{0,20}$/ },
  phone: { type: String, validate: /^\d{0,20}$/ },
  street: { type: String, maxlength: 100 },
  email: {
    type: String,
    maxlength: 50,
    unique: true,
    required: function (this: { type: string }) {
      // Explicitly specify 'this' type
      return this.type === "COMPANY" || this.type === "DEALER";
    },
  },
});

// Define Customer schema
const CustomerSchema = new Schema({
  intnr: { type: String, required: true, unique: true, maxlength: 10 },
  type: {
    type: String,
    enum: ["PRIVATE", "COMPANY", "DEALER"],
    required: true,
  },
  contact_persons: [ContactPersonSchema],
  addresses: [AddressSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// Create models for ContactPerson, Address, and Customer
const ContactPerson = mongoose.model("ContactPerson", ContactPersonSchema);
const Address = mongoose.model("Address", AddressSchema);
const Customer = mongoose.model("Customer", CustomerSchema);

export { ContactPerson, Address, Customer };
