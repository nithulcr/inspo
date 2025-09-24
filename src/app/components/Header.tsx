"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";


import AnimatedButton from "./AnimatedButton";

const navItems = [
    { href: "/", label: "Home" },
    { href: "#AboutUs", label: "About us" },
    {
        label: "Our Services",
        href: "#our-services",
        submenu: [
            { href: "#services/machine-tools", label: "Machine Tools" },
            { href: "#services/fabrication-automation", label: "Fabrication & Automation" },
            { href: "#services/metrology", label: "Metrology" },
            { href: "#services/heat-treatment", label: "Heat Treatment" },
        ],
    },
    { href: "/ContactUs", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [animation, setAnimation] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleMenuToggle = () => {
        if (open) {
            setAnimation("animate-menuSlideUp");
            setTimeout(() => {
                setOpen(false);
                setAnimation(null);
            }, 300);
        } else {
            setOpen(true);
            setAnimation("animate-menuSlideDown");
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClass = [
        "content-center  w-full fixed top-0 left-0 z-50 transition-colors duration-300 bg-nav",
        scrolled ? "bg-nav-cover" : ""
    ].filter(Boolean).join(" ");

    return (
        <header className={headerClass}>
            <div className="w-full  bg-[var(--blue)] hidden min-[990px]:block">
                <div className="text-white  border-b border-b-[var(--color)] grid grid-cols-2 items-center  text-sm ">
                    <div className="h-full">
                        <div className="h-full max-w-[700px] flex items-center  space-x-6 top-header-left relative ml-auto px-6 py-2">
                            <p>
                                Are you ready to grow up your business?
                            </p>
                            <a href="ContactUs" className="flex items-center space-x-2 font-bold pr-5">
                                Contact Us
                                <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.793 7.50002H2.5C2.36739 7.50002 2.24021 7.5527 2.14645 7.64647C2.05268 7.74024 2 7.86741 2 8.00002C2 8.13263 2.05268 8.25981 2.14645 8.35357C2.24021 8.44734 2.36739 8.50002 2.5 8.50002H11.793L8.146 12.146C8.05211 12.2399 7.99937 12.3672 7.99937 12.5C7.99937 12.6328 8.05211 12.7601 8.146 12.854C8.23989 12.9479 8.36722 13.0007 8.5 13.0007C8.63278 13.0007 8.76011 12.9479 8.854 12.854L13.354 8.35402C13.4006 8.30758 13.4375 8.2524 13.4627 8.19165C13.4879 8.13091 13.5009 8.06579 13.5009 8.00002C13.5009 7.93425 13.4879 7.86913 13.4627 7.80839C13.4375 7.74764 13.4006 7.69247 13.354 7.64602L8.854 3.14602C8.76011 3.05213 8.63278 2.99939 8.5 2.99939C8.36722 2.99939 8.23989 3.05213 8.146 3.14602C8.05211 3.23991 7.99937 3.36725 7.99937 3.50002C7.99937 3.6328 8.05211 3.76013 8.146 3.85402L11.793 7.50002Z" fill="white" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className=" bg-white text-gray-600  h-full">
                        <div className="max-w-[700px] h-full flex items-center justify-center overflow-hidden gap-5 text-[var(--color)] relative px-6">
                            <div className="items-center justify-center space-x-2 flex relative  py-2 h-full pr-4">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 6C12.2449 6.00003 12.4813 6.08996 12.6644 6.25272C12.8474 6.41547 12.9643 6.63975 12.993 6.883L13 7V11.586L15.707 14.293C15.8863 14.473 15.9905 14.7144 15.9982 14.9684C16.006 15.2223 15.9168 15.4697 15.7488 15.6603C15.5807 15.8508 15.3464 15.9703 15.0935 15.9944C14.8406 16.0185 14.588 15.9454 14.387 15.79L14.293 15.707L11.293 12.707C11.1376 12.5514 11.0378 12.349 11.009 12.131L11 12V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6Z" fill="#5D666F" />
                                </svg>

                                <span>
                                    Working: 8.00am - 5.00pm
                                </span>
                            </div>
                            <div className="flex flex-row gap-5 header-top-social relative  py-2 h-full">

                                <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer">
                                    <Facebook size={20} strokeWidth={1} className="  transition" />
                                </a>
                                <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer">
                                    <Twitter size={20} strokeWidth={1} className="  transition" />
                                </a>
                                <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer">
                                    <Instagram size={20} strokeWidth={1} className="  transition" />
                                </a>
                                <a href="https://linkedin.com" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={20} strokeWidth={1} className="  transition" />
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1320px] mx-auto flex items-center justify-between px-6 h-[72px] z-10 relative bg-white">
                <div className="text-2xl font-bold h-full align-content-center flex">
                    <Link href="/" className="items-center flex">
                        <img src="/logo.png" alt="Logo" width={120} height={50} className="w-[100px] lg:w-[120px]" />
                    </Link>
                </div>
                <div className="flex items-center gap-4 lg:gap-8 h-full">
                <div className="items-center gap-8 hidden md:flex h-full">
                    <nav className="hidden md:flex gap-6 h-full">
                        {navItems.map((item) => (
                            item.submenu ? (
                                <div
                                    key={item.href}
                                    className="relative h-full flex items-center"
                                    onMouseEnter={() => setServiceMenuOpen(true)}
                                    onMouseLeave={() => setServiceMenuOpen(false)}
                                >
                                    <Link
                                        href={item.href}
                                        className={`place-items-center h-full flex transition-colors duration-300 font-light text-md menu-item ${pathname === item.href ? "menu-active" : ""}`}
                                    >
                                        {item.label}
                                        <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${serviceMenuOpen ? 'rotate-180' : ''}`} />
                                    </Link>
                                    {serviceMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 w-60 bg-white rounded-b-md shadow-lg z-60">
                                            <div className="py-1">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`place-items-center flex transition-colors duration-300 font-light text-md menu-item ${pathname === item.href ? "menu-active" : ""}`}
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </nav>

                </div>
                <button onClick={handleMenuToggle} className="md:hidden text-black">
                    {open ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
                </button>
                <a className="flex items-center gap-4">
                    <div className="bg-[#F6F6F6] w-11 h-11 lg:w-14 lg:h-14 rounded-lg lg:rounded-2xl flex items-center justify-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.05846 0.808375C6.20146 1.64137 7.09146 2.77837 7.85146 3.86637L8.29346 4.51037L8.71046 5.12537C8.91905 5.4301 9.00823 5.80092 8.96102 6.16717C8.91381 6.53342 8.7335 6.8695 8.45446 7.11137L6.50346 8.56037C6.4092 8.62844 6.34285 8.7284 6.31674 8.8417C6.29062 8.95499 6.30651 9.07391 6.36146 9.17637C6.80346 9.97937 7.58946 11.1754 8.48946 12.0754C9.38946 12.9754 10.6425 13.8134 11.5015 14.3054C11.6092 14.3658 11.7359 14.3827 11.8557 14.3526C11.9755 14.3225 12.0792 14.2476 12.1455 14.1434L13.4155 12.2104C13.6489 11.9002 13.9934 11.6924 14.3766 11.6306C14.7599 11.5687 15.1522 11.6575 15.4715 11.8784L16.1345 12.3374C17.3735 13.1974 18.7045 14.1744 19.7225 15.4774C19.8839 15.6852 19.9866 15.9325 20.0199 16.1935C20.0531 16.4546 20.0157 16.7197 19.9115 16.9614C19.0745 18.9144 16.9565 20.5774 14.7535 20.4964L14.4535 20.4794L14.2205 20.4594L13.9625 20.4294L13.6815 20.3914L13.3765 20.3414L13.2165 20.3114L12.8805 20.2394L12.7045 20.1994L12.3385 20.1054L11.9535 19.9954L11.5515 19.8654C9.70546 19.2394 7.36246 18.0094 4.95846 15.6054C2.55446 13.2014 1.32546 10.8594 0.699461 9.01337L0.569462 8.61137L0.459461 8.22637L0.365462 7.86037L0.287462 7.51437C0.264959 7.406 0.243957 7.29733 0.224462 7.18837L0.174462 6.88338L0.134462 6.60238L0.105462 6.34437L0.0854615 6.11137L0.0694616 5.81137C-0.0115384 3.61537 1.66946 1.48237 3.61346 0.649375C3.84744 0.548342 4.10366 0.509875 4.35699 0.53775C4.61032 0.565625 4.85205 0.658884 5.05846 0.808375ZM13.1935 4.40337L13.3095 4.41637C14.0374 4.54477 14.7059 4.90032 15.2194 5.43205C15.7328 5.96379 16.0647 6.64441 16.1675 7.37637C16.2041 7.62955 16.1423 7.88715 15.9949 8.09618C15.8474 8.3052 15.6254 8.44976 15.3746 8.5001C15.1238 8.55044 14.8632 8.50274 14.6465 8.36682C14.4297 8.2309 14.2733 8.01709 14.2095 7.76937L14.1865 7.65438C14.1462 7.36748 14.0238 7.09836 13.8339 6.87956C13.644 6.66075 13.3948 6.50162 13.1165 6.42137L12.9615 6.38637C12.7104 6.34187 12.4857 6.20311 12.3336 5.99848C12.1814 5.79385 12.1131 5.53881 12.1428 5.28552C12.1724 5.03223 12.2977 4.79983 12.493 4.63586C12.6883 4.47188 12.9389 4.38872 13.1935 4.40337ZM13.2015 1.36337C14.7928 1.36337 16.3189 1.99552 17.4441 3.12073C18.5693 4.24595 19.2015 5.77208 19.2015 7.36337C19.2012 7.61825 19.1036 7.86341 18.9286 8.04874C18.7536 8.23408 18.5145 8.34561 18.2601 8.36055C18.0056 8.37548 17.7551 8.2927 17.5596 8.12911C17.3642 7.96552 17.2386 7.73347 17.2085 7.48037L17.2015 7.36337C17.2014 6.34793 16.8151 5.37054 16.1209 4.62941C15.4268 3.88828 14.4767 3.43889 13.4635 3.37237L13.2015 3.36337C12.9362 3.36337 12.6819 3.25802 12.4944 3.07048C12.3068 2.88294 12.2015 2.62859 12.2015 2.36337C12.2015 2.09816 12.3068 1.8438 12.4944 1.65627C12.6819 1.46873 12.9362 1.36337 13.2015 1.36337Z" fill="#2B286B" />
                        </svg>

                    </div>
                    <div className="hidden lg:block">
                        <p className="text-[var(--color)] text-sm">Call us anytime</p>
                        <h5 className="text-[var(--blue)] font-semibold">+91 9048 552244</h5>
                    </div>
                </a>
                </div>
            </div>
            {open && (
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`md:hidden bg-[var(--blue)] font-light px-6 py-8 space-y-3 shadow-md transition-all duration-300 origin-top ${animation}`}
                >
                    {navItems.map((item) => (
                        item.submenu ? (
                            <div key={item.href}>
                                <div
                                    className="flex justify-between items-center text-white"
                                    onClick={() => setServiceMenuOpen(!serviceMenuOpen)}
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${serviceMenuOpen ? 'rotate-180' : ''}`} />
                                </div>
                                {serviceMenuOpen && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                className={`block text-white hover:text-[#009D78] ${pathname === subItem.href ? "text-[#009D78] font-semibold" : ""}`}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block text-white hover:text-[#009D78] ${pathname === item.href ? "text-[#009D78] font-semibold" : ""}`}
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                </motion.div>
            )}
        </header>
    );
}