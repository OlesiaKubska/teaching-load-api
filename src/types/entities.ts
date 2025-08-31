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
  teacher: ITeacher;
  subject: ISubject;
  group: string;
  type: "lecture" | "practice";
}