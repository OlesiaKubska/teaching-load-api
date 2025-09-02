import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { Teacher } from "../models/teacher.model.js";
import { Subject } from "../models/subject.model.js";
import { Load } from "../models/load.model.js";
import fs from "fs";
import path from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function seedData() {
  try {
    await mongoose.connect(process.env.DB_URI as string, {
      dbName: process.env.DB_NAME,
    });
    console.log("Connected to MongoDB");

    // Clear collections
    await Teacher.deleteMany({});
    await Subject.deleteMany({});
    await Load.deleteMany({});
    console.log("Cleared existing data");

    // Load JSON data
    const teachers = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../docs/seeds/teachers.json"), "utf-8")
    );
    const subjects = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../docs/seeds/subjects.json"), "utf-8")
    );
    const loads = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../docs/seeds/loads.json"), "utf-8")
    );

    // Insert teachers & subjects
    const createdTeachers = await Teacher.insertMany(teachers);
    const createdSubjects = await Subject.insertMany(subjects);

    // Fix loads with real IDs
    const fixedLoads = loads.map((load: any, index: number) => ({
      ...load,
      teacher: createdTeachers[index % createdTeachers.length]._id,
      subject: createdSubjects[index % createdSubjects.length]._id,
    }));

    await Load.insertMany(fixedLoads);
    
    console.log("Seeding completed successfully");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seedData();