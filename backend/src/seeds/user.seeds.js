import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

config();

const seedUsers = [
  // Female Users
  {
    email: "golu@example.com",
    fullName: "Golu Gupta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "abhi@example.com",
    fullName: "Abhishek Gupta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "sara@example.com",
    fullName: "Sara Sen",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "namrita@example.com",
    fullName: "Namrita Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "aman@example.com",
    fullName: "Aman Deep",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "raushni@example.com",
    fullName: "Raushni Gupta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "aishwarya@example.com",
    fullName: "Aishwarya Budharani",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "ravi@example.com",
    fullName: "Ravi Gupta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    email: "anjali@example.com",
    fullName: "Anjali Roi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "aditi@example.com",
    fullName: "Aditi Arya",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "manishi@example.com",
    fullName: "Manishi Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  {
    email: "rubina@example.com",
    fullName: "Rubina Dsa",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "rajan@example.com",
    fullName: "Rajan Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "sumit@example.com",
    fullName: "Sumit Raj",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "arav@example.com",
    fullName: "Arav Anand",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },

  
];


const seedDatabase = async () => {
    try {
      await connectDB();
  
      // Clear out old data if you want a fresh start (optional)
      // await User.deleteMany({});
  
      // For each user in seedUsers, hash the password
      const usersToInsert = [];
      for (const user of seedUsers) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        usersToInsert.push({ ...user, password: hashedPassword });
      }
  
      await User.insertMany(usersToInsert);
      console.log("Database seeded successfully");
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  };
  
  seedDatabase();