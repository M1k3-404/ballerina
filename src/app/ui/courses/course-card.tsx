import { Button, Card, CardBody, Chip, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({
    course
}: {
    course: object
}) {
    return (
        <Card isBlurred className="w-full aspect-[20/19]">
            <CardBody>
                <Image
                    src={course.src}
                    alt="Ballerina"
                    width={500}
                    height={500}
                    className="w-full aspect-video rounded-lg"
                />
                <p className="mt-4 text-4xl text-cstm-rose-taupe font-semibold">{course.name}</p>
                <div className="mt-2 gap-2 flex flex-row w-full">
                    <Chip>{course.age}</Chip>
                    <Chip>{course.days}</Chip>
                </div>
                <ScrollShadow hideScrollBar size={30} className="mt-4 h-32 overflow-y-auto">
                    <p>{course.description}</p>
                </ScrollShadow>
                <div className="mt-4 w-full flex flex-row justify-evenly">
                    <Button as={Link} href="/audition" size="lg" className="w-[45%] bg-cstm-rose-taupe text-white rounded-lg">Enroll</Button>
                    <Button as={Link} href="#" size="lg" className="w-[45%] border-3 bg-transparent border-cstm-rose-taupe text-cstm-rose-taupe rounded-lg">More Details</Button>
                </div>
            </CardBody>
        </Card>
    )
}