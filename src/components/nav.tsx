import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { HamburgerMenuIcon, ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";

export default function Nav() {
    const mobileLinks = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Our Partners",
            href: "/2024/partners"
        },
        {
            title: "Our Team",
            href: "/2024/team"
        }
    ]

    const events = [
        {
            title: "December Conference",
            href: "/2024/events/december",
            desc: "The last conference of the year, with the theme of Web Dev."
        },
        {
            title: "June Conference",
            href: "/2024/events/june",
            desc: "Our flagship conference, featuring workshops, talks, and more."
        },
        {
            title: "March Conference",
            href: "/2024/events/march",
            desc: "The March Conference aims to spark an interest in Python and Data Science."
        },
        {
            title: "Looking for older events?",
            href: "/2024/archive"
        }
    ]

    const mobileEvents = events.slice(0, -1);

    return (
        <>
            <div className="justify-center h-16 sm:flex hidden sticky top-0 z-20 gap-x-4">
                <div className="h-16 justify-end flex sticky top-0 z-20">
                    <div className="px-6 rounded-full mt-4 bg-slate-900/50 backdrop-filter backdrop-blur-lg ring-slate-800 flex items-center gap-x-2">
                        <a href='/2024'>
                            <img src='/2024/favicon.svg' alt="BuildingBloCS logo" className="w-5 h-5 mr-1" />
                        </a>
                        <a href='/2024/partners' className="text-sm font-medium rounded-md px-2 transition hover:bg-white hover:text-black">
                            Our Partners
                        </a>
                        <a href='/2024/team' className="text-sm font-medium rounded-md px-2 transition hover:bg-white hover:text-black">
                            Our Team
                        </a>
                        <Popover>
                            <PopoverTrigger className="translate-y-0 translate-x-0 text-sm font-medium rounded-md px-2 flex items-center gap-x-1 outline-0 group transition hover:bg-white hover:text-black data-[state=open]:bg-slate-700">Events<ChevronDownIcon className="transition group-data-[state=open]:rotate-180 group-data-[state=open]:mt-0.5" /></PopoverTrigger>
                            <PopoverContent className="max-w-xs p-2 flex flex-col mt-5 bg-slate-900 border-slate-700 text-white">
                                {events.map((event) => (
                                    <a href={event.href} className="font-semibold hover:bg-slate-800 p-2 rounded-md text-sm transition" key={event.title}>
                                        {event.title}
                                        {event.desc && <p className="font-normal">{event.desc}</p>}
                                    </a>
                                ))}
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                {/* <a className="h-16 justify-end flex sticky top-0 z-20" href="/2024/events/december">
                    <div className="pl-5 pr-2.5 rounded-full mt-4 bg-slate-900/50 backdrop-filter backdrop-blur-lg ring-1 ring-slate-800 flex items-center gap-x-4">
                        <p>December Conference</p>
                        <div className="bg-orange-500 hover:bg-orange-600 rounded-full p-1 px-1.5 transition flex gap-x-2 items-center font-semibold"><ArrowRightIcon className="w-5 h-5" /></div>
                    </div>
                </a> */}
            </div>
            <div className="sm:hidden h-16 justify-end flex sticky top-0 z-20">
                {/* <a href="/2024/events/december" className="px-6 py-2 rounded-full mt-4 mr-4 bg-slate-900/50 backdrop-filter backdrop-blur-lg ring-1 ring-slate-800 flex items-center gap-x-4 text-sm">
                    <p>Dec Conference</p>
                    <div className="bg-orange-500 hover:bg-orange-600 rounded-full p-1 px-1.5 transition flex gap-x-2 items-center font-semibold"><ArrowRightIcon className="w-5 h-5" /></div>
                </a> */}
                <div className="px-6 py-2 rounded-full mt-4 mr-4 bg-slate-900/50 backdrop-filter backdrop-blur-lg ring-1 ring-slate-800 flex items-center gap-x-4">
                    <a href="/">
                        <img src='/favicon.svg' alt="BuildingBloCS logo" className="w-5 h-5" />
                    </a>
                    <Separator orientation="vertical" className="bg-slate-800" />
                    <Sheet>
                        <SheetTrigger aria-label="Navigation Menu"><HamburgerMenuIcon /></SheetTrigger>
                        <SheetContent>
                            <div className="flex flex-col justify-center h-full text-xl gap-y-2 font-medium relative">
                                {mobileLinks.map((link) => (
                                    <a href={link.href} key={link.title}>{link.title}</a>
                                ))}
                                {mobileEvents.map((event) => (
                                    <a href={event.href} key={event.title}>{event.title}</a>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </>
    )
}
