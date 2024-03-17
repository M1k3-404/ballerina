import CourseCard from "../ui/courses/course-card";

export default function Courses() {
    return (
        <div className="w-screen h-full overflow-x-hidden">
            <div className="h-[15%]"></div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-6xl text-white font-thin underline decoration-1 underline-offset-[1rem]">Courses</p>
            </div>
            <div className="w-[90%] grid grid-cols-3 gap-10 mt-20 mb-10 mx-auto">
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}