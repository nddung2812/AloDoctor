"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ResizablePanel from "../../components/ResizablePanel";
import Link from "next/link";

import { facebookLink} from "../../components/Footer"

export default function DreamPage() {
    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Header />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
                <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
                    Quét mã<span className="text-blue-600"> QR Code</span>
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
                                <Link
                                    className="bg-blue-600 rounded-full text-white font-medium px-6 py-3 sm:mt-10 mt-8 hover:bg-purple-500 transition"
                                    href={facebookLink}
                                    >
                                    Đọc thêm
                                </Link>
                        </motion.div>
                    </AnimatePresence>
                </ResizablePanel>
            </main>
            <Footer />
        </div>
    );
}