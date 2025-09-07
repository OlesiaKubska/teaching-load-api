import { Types } from "mongoose";

export interface ITeacher {
  firstName: string;
  lastName: string;
  middleName?: string;
  degree: string;
  position: string;
  experience: number;
}

export interface ISubject {
  name: string;
  hours: number;
}

export interface ILoad {
  teacher: Types.ObjectId | ITeacher;
  subject: Types.ObjectId | ISubject;
  group: string;
  type: "lecture" | "practice";
  year: number;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
}