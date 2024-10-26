import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import WhyUs from "../components/WhyUs";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <h1 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-normal text-gray-200 sm:text-6xl">
          Dịch Vụ Y Tế Cao Cấp<br /> Việt Nam - Australia <br />
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative mx-2">Alo Doctor</span>
          </span>{" "}
        </h1>
        <h2 className="mx-auto mt-8 max-w-2xl text-lg sm:text-gray-400  text-gray-400 leading-7">
          Bạn chán nản với việc chờ đợi quá lâu để gặp Specialist tại Australia?
        </h2>
        <h2 className="mx-auto mt-2 mb-4 max-w-2xl text-lg sm:text-gray-400  text-gray-400 leading-7">
          Bạn tận dụng thời gian về thăm quê hương kết hợp sử dụng các dịch vụ y tế cao cấp tại Việt Nam.
        </h2>

        <Link
          className="bg-purple-600 rounded-full text-white font-medium px-6 py-3 sm:mt-10 mt-8 hover:bg-purple-500 transition"
          href="/register"
        >
          Đăng ký ngay
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <Link href="#main-content">
                <h2 className="mb-3 font-medium text-lg">Đơn giản và tiết kiệm</h2>
                <Image
                  alt="khám bệnh đơn giản"
                  src="/Doctor1.jpg"
                  width={380}
                  height={500}
                  className="w-90 object-cover h-96 rounded-2xl"
                />
              </Link>
              <Link href="#main-content" className="sm:mt-0 mt-8">
                <h2 className="mb-3 font-medium text-lg">Nhanh gọn và uy tín</h2>
                <Image
                  alt="Khám bênh nhanh gọn uy tín"
                  width={380}
                  height={500}
                  src="/Doctor2.jpg"
                  className="w-90 object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </Link>
              <Link href="#main-content" className="sm:mt-0 mt-8">
                <h2 className="mb-3 font-medium text-lg">Chăm sóc chu đáo</h2>
                <Image
                  alt="Khám bệnh chu đáo"
                  width={380}
                  height={500}
                  src="/Doctor3.jpg"
                  className="w-90 object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="container" id="main-content">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-normal text-gray-200 sm:text-6xl mt-4">
            Tại sao lại là
            <span className="relative whitespace-nowrap text-blue-600">
              <span className="relative mx-2"> Alo Doctor</span>
            </span>
          </h2>
          <h2 className="mx-auto mt-6 max-w-xl text-lg sm:text-gray-400  text-gray-400 leading-7">
            Liên hệ với chúng tôi ngay để được tư vấn khám chữa bệnh tại Viêt Nam nhanh gọn và tiết kiệm thời gian cho quý vị.
          </h2>
        </div>
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
