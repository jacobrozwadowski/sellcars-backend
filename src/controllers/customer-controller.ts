// src/controllers/customerController.ts
import { Request, Response } from "express";
import { Customer, ContactPerson, Address } from "../models/customer";

// Get all customers
export const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get customer by ID
export const getCustomerById = async (req: Request, res: Response) => {
  const customerId = req.params.id;
  try {
    const customer = await Customer.findById(customerId);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new customer
export const createCustomer = async (req: Request, res: Response) => {
  const customerData = req.body;
  try {
    const newCustomer = await Customer.create(customerData);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};

// Update customer by ID
export const updateCustomer = async (req: Request, res: Response) => {
  const customerId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      updatedData,
      { new: true }
    );
    if (updatedCustomer) {
      res.json(updatedCustomer);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};

// Delete customer by ID
export const deleteCustomer = async (req: Request, res: Response) => {
  const customerId = req.params.id;
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);
    if (deletedCustomer) {
      res.json(deletedCustomer);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
