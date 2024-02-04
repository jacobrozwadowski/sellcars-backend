const mongoose = require("mongoose");
const UserModel = require("../dist/models/user").default;
const hashPassword = require("../dist/utils/hash-password").default;

const insertExampleUsers = async () => {
  try {
    const userCount = await UserModel.countDocuments();

    if (userCount === 0) {
      const exampleUsers = [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          password: "password123",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          password: "password456",
        },
        {
          firstName: "Bob",
          lastName: "Smith",
          email: "bob@example.com",
          password: "password789",
        },
      ];

      for (const user of exampleUsers) {
        const hashedPassword = await hashPassword(user.password);

        const newUser = new UserModel({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          passwordHash: hashedPassword,
        });

        await newUser.save();
      }

      console.log("Example users inserted successfully");
    } else {
      console.log(
        "Users already exist in the database. Skipping example users insertion."
      );
    }
  } catch (error) {
    console.error("Error inserting example users:", error);
  } finally {
    mongoose.disconnect();
  }
};

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://backend:Kff1Zvz5BPOFGlO2@sellcars.bpbqjjn.mongodb.net/?retryWrites=true&w=majority"
);

// Call the function to insert example users
insertExampleUsers();
