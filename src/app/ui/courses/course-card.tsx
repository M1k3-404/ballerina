import { Button, Card, CardBody, Chip, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard() {
    return (
        <Card isBlurred className="w-full aspect-[7/6]">
            <CardBody>
                <Image
                    src="https://images.unsplash.com/photo-1593707872792-425f9fd4db6b?q=80&w=2599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Ballerina"
                    width={500}
                    height={500}
                    className="w-full aspect-video rounded-lg"
                />
                <p className="mt-4 text-4xl text-cstm-rose-taupe font-semibold">Course Name</p>
                <div className="mt-2 gap-2 flex flex-row w-full">
                    <Chip>age group</Chip>
                    <Chip>weekends/ weekdays</Chip>
                </div>
                <ScrollShadow hideScrollBar size={30} className="mt-4 h-32 overflow-y-auto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel massa porta, ornare urna ac, dictum diam. Sed ante mauris, faucibus eget pulvinar et, eleifend id leo. Cras iaculis et est vitae lobortis. Integer varius arcu vel nisi semper mattis. Mauris risus nisi, tristique id dapibus nec, interdum sit amet purus. Nullam pellentesque efficitur diam euismod porta. Mauris viverra nisl ac est porttitor, quis fringilla sapien gravida. Cras in justo nisl. Maecenas sed malesuada ipsum. Maecenas euismod, diam vitae fermentum sollicitudin, nisl arcu viverra massa, eu volutpat purus justo quis lectus. Vestibulum hendrerit suscipit consectetur. Praesent ultrices at nibh vel fringilla. Vestibulum sagittis sagittis libero, ac tincidunt tellus lacinia ac. Quisque vel metus sapien. Maecenas posuere ac sem vel placerat.</p>
                </ScrollShadow>
                <div className="mt-4 w-full flex flex-row justify-evenly">
                    <Button as={Link} href="/audition" size="lg" className="w-[45%] bg-cstm-rose-taupe text-white rounded-lg">Enroll</Button>
                    <Button as={Link} href="#" size="lg" className="w-[45%] border-3 bg-transparent border-cstm-rose-taupe text-cstm-rose-taupe rounded-lg">More Details</Button>
                </div>
            </CardBody>
        </Card>
    )
}