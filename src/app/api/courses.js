import { connect, executeQuery } from "../lib/db";

export default async function getCourses() {
    await connect();
    const query = 'SELECT * FROM Courses';
    const courses = await executeQuery(query);

    res.status(200).json(courses);
}