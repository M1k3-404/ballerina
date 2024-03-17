import Image from "next/image";
import Ballerina from "../media/ballerina.png";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <div className="w-full h-full flex flex-col">

        {/* Hero Section */}
        <div className="w-full h-5/6 flex flex-row">

          {/* Ballerina */}
          <div className="w-1/2 h-full flex justify-end">
            <div className="self-end">
              <Image
                src={Ballerina}
                alt="Ballerina"
                width={500}
                objectFit="contain"
                className="mr-80"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="w-1/2 h-full flex">
            <div className="self-center">
              <p className="text-left text-cstm-rose-taupe uppercase text-4xl font-semibold w-3/5">
                Founded by george balanchine,
                N.D.A is the preeminent ballet
                school in the US.
              </p>
              <p className="text-left mt-3 text-xl w-3/5">
                We train talented dancers from diverse backgrounds for professional careers in ballet while enriching the life of every student.
              </p>
              <Button as={Link} href="/events" className="mt-6 p-6 text-cstm-rose-taupe uppercase">Learn More</Button>
            </div>
          </div>
        </div>

        {/* Hero Title */}
        <div className="absolute top-[70%] w-full flex justify-center">
          <p className="uppercase text-9xl font-thin tracking-[1em]">Ballerina</p>
        </div>

        {/* CTA */}
        <div className="w-full h-1/6 flex flex-column">
          <Button as={Link} href="/courses" className="h-[95%] self-end p-8 w-1/2 border bg-transparent border-white rounded-none">
            <div className="flex flex-row">
              <div className="w-4/5">
                <p className="uppercase text-3xl font-semibold text-cstm-rose-taupe">For Students</p>
                <p className="mt-1 text-white font-normal text-medium">
                  Explore our world-renowned classical ballet training programs for students of all ages <br/> and levels and the myraid resources dedicated to the success of our students 
                </p>
              </div>
            </div>
          </Button>
          <Button as={Link} href="/service" className="h-[95%] self-end p-8 w-1/2 border bg-transparent border-white rounded-none">
            <div className="flex flex-row">
              <div className="w-4/5">
                <p className="uppercase text-3xl font-semibold text-cstm-rose-taupe">For Donors</p>
                <p className="mt-1 text-white font-normal text-medium">
                  Learn how your support can impact for the future of ballet and help our talented students 
                </p>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </main>
  );
}
