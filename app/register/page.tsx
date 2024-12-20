"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ResizablePanel from "../../components/ResizablePanel";

import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

type FormValues = {
    fullName: string;
    businessEmail: string;
    phone: string;
    message: string;
};

const schema = yup.object().shape({
    fullName: yup.string().required('*Chúng tôi cần tên đầy đủ của bạn'),
    businessEmail: yup
        .string()
        .email('*Bạn vui lòng kiểm tra lại email')
        .required('*Vui lòng nhập email'),
    phone: yup
        .string()
        .required('*Bạn vui lòng kiểm tra lại số điện thoại')
        .matches(/^[0-9()+-\s]+$/, '*Vui lòng nhập lại số điện thoại'),
    message: yup
        .string()
        .required('*Bạn vui lòng để lại tin nhắn')
        .max(500, '*Tin nhắn của bạn vượt quá 500 ký tự'),
});

export default function RegisterPage() {
    const form = useRef<HTMLFormElement | null>(null);
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormValues) => {
        toast.success('Chúc mừng quý khách đăng ký thành công!', {
            position: 'top-right',
        });
        emailjs.send('service_gyjqr5k', 'template_rz6hebe', data, 'psj8EnrbwXG_cHccx')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        reset();
    };

    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Header />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
                <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
                    Đăng ký thông tin<span className="text-blue-600"> của bạn</span>!
                </h1>
                <ResizablePanel>
                    <AnimatePresence mode="wait">
                        <motion.div className="flex justify-between items-center w-full flex-col mt-4">
                            <form onSubmit={handleSubmit(onSubmit)} ref={form} className="flex justify-between items-center w-full flex-col mt-4">
                                <div className="space-y-4 w-full max-w-sm">
                                    <div className="flex mt-3 items-center space-x-3">
                                        <Image
                                            src="/number-1-white.svg"
                                            width={30}
                                            height={30}
                                            alt="1 icon"
                                        />
                                        <label className="block" htmlFor="fullName">
                                            Tên đầy đủ
                                        </label>
                                    </div>
                                    <Controller
                                        name="fullName"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                id="fullName"
                                                placeholder="Họ và tên đầy đủ"
                                                className="border rounded w-full p-2 text-black"
                                            />
                                        )}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-left">{errors.fullName.message}</p>
                                    )}
                                </div>

                                <div className="space-y-4 w-full max-w-sm">
                                    <div className="flex mt-10 items-center space-x-3">
                                        <Image
                                            src="/number-2-white.svg"
                                            width={30}
                                            height={30}
                                            alt="2 icon"
                                        />
                                        <label className="block" htmlFor="businessEmail">
                                            Địa chỉ Email
                                        </label>
                                    </div>
                                    <Controller
                                        name="businessEmail"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                id="businessEmail"
                                                placeholder="Email của bạn"
                                                className="border rounded w-full p-2 text-black"
                                            />
                                        )}
                                    />
                                    {errors.businessEmail && (
                                        <p className="text-red-500 text-left">{errors.businessEmail.message}</p>
                                    )}
                                </div>

                                <div className="space-y-4 w-full max-w-sm">
                                    <div className="flex mt-10 items-center space-x-3">
                                        <Image
                                            src="/number-3-white.svg"
                                            width={30}
                                            height={30}
                                            alt="3 icon"
                                        />
                                        <label className="block" htmlFor="phone">
                                            Số điện thoại
                                        </label>
                                    </div>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                id="phone"
                                                placeholder="Số điện thoại tại Úc hoặc Việt Nam nếu có"
                                                className="border rounded w-full p-2 text-black"
                                            />
                                        )}
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-left">{errors.phone.message}</p>
                                    )}
                                </div>

                                <div className="space-y-4 w-full max-w-sm">
                                    <div className="flex mt-10 items-center space-x-3">
                                        <label className="block" htmlFor="message">
                                            Lời nhắn của bạn
                                        </label>
                                    </div>
                                    <Controller
                                        name="message"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <textarea
                                                {...field}
                                                id="message"
                                                placeholder="Hãy chúng tôi biết thêm thông tin cụ thể"
                                                rows={5}
                                                maxLength={500}
                                                className="border rounded w-full p-2 text-black"
                                            />
                                        )}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-left">{errors.message.message}</p>
                                    )}
                                </div>

                                <div className="my-4">
                                    <button
                                        type="submit"
                                        className="text-white px-8 mt-6 py-2 rounded-full border border-blue-600 bg-blue-600 hover:bg-blue-500 transition"
                                    >
                                        Đăng ký
                                    </button>
                                </div>
                            </form>
                            <ToastContainer />
                        </motion.div>
                    </AnimatePresence>
                </ResizablePanel>
            </main>
            <Footer />
        </div>
    );
}
