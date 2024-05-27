import { Student } from "./Student";

export class Course {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public startDate: Date,
        public finishDate: Date,
        public place: string,
        public studentsIn: Array<Student>
    ) {}
}