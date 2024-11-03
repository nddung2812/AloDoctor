"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ResizablePanel from "../../components/ResizablePanel";
import Link from "next/link";

import { facebookLink} from "../../components/Footer"
import AboutUs from "../../components/AboutUs";

export default function DreamPage() {
    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Header />
            <AboutUs />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
                <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
                    Tìm hiểu thêm qua mã<span className="text-blue-600"> QR</span>
                </h1>
                <ResizablePanel>
                    <AnimatePresence mode="wait">
                        <motion.div className="flex justify-between items-center w-full flex-col mt-4">
                            <div className="space-y-4 w-full max-w-sm">
                                <div className="flex mt-3 items-center space-x-3">
                                </div>
                            </div>
                            <Image
                                src="/qrVhFb.png"
                                width={300}
                                height={300}
                                alt="qrcode"
                                className="object-contain"
                            />
                            <div className="sm:mt-10 mt-8 p-4">
                                <Link
                                    className="bg-blue-600 rounded-full text-white px-6 py-3 mx-2 font-medium hover:bg-purple-500 transition min-w-40"
                                    href={facebookLink}
                                    >
                                    Đọc thêm
                                </Link>
                                <Link
                                    className="bg-blue-600 rounded-full text-white px-6 py-3 mx-2 font-medium hover:bg-purple-500 transition min-w-40"
                                    href="/register"
                                    >
                                    Đăng ký
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </ResizablePanel>
            </main>
            <Footer />
        </div>
    );
}