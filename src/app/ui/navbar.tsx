import { Link, Button } from "@nextui-org/react"

export default function Navbar() {
    return (
        <div className="absolute z-50 w-full top-10 bg-transparent flex flex-row justify-around">
            <div>
                <p className="font-normal text-2xl text-cstm-rose-taupe">NDA</p>
            </div>

            <div className="flex flex-row gap-16">
                <Link className="text-cstm-rose-taupe uppercase" href="/">Home</Link>
                <Link className="text-cstm-rose-taupe uppercase" href="/courses">Courses</Link>
                <Link className="text-cstm-rose-taupe uppercase" href="/events">Events</Link>
                <Link className="text-cstm-rose-taupe uppercase" href="/service">Service</Link>
            </div>

            <div className="flex flex-row gap-6">
                <Button as={Link} href="/audition" className="text-cstm-rose-taupe uppercase">Audition for NDA</Button>
                <Button as={Link} href="/donate" className="text-cstm-rose-taupe uppercase">Donate today</Button>
            </div>
        </div>
    )
}