import React from 'react';
import { FaCheckSquare, FaCircle } from 'react-icons/fa';
import Link from "next/link";

const ResponsiveTable: React.FC = () => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
      <div className="text-left font-medium p-4 rounded-sm">
        <h2 className="text-white rounded-sm font-bold p-4 mt-2 text-2xl">
          <Link href="/register">Đăng ký qua <span className='text-blue-600'>Alo Doctor</span></Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-2 rounded-2xl border border-gray-900 p-4 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            <div className='flex items-center'>
              <FaCheckSquare color='#34b233' size={12} className='m-1'/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Được ưu tiên sắp xếp dịch vụ nhanh chóng, thuận tiện</div>
            </div>
            <div className='flex items-center'>
              <FaCheckSquare color='#34b233' size={12} className='m-1'/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Khám, chuẩn đoán, điều trị với đội ngũ bác sỹ có tên tuổi</div>
            </div>
            <div className='flex items-center'>
              <FaCheckSquare color='#34b233' size={12} className='m-1'/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Sử dụng các thiết bị khám sức khoẻ hiện đại nhất</div>
            </div>
            <div className='flex items-center'>
              <FaCheckSquare color='#34b233' size={12} className='m-1'/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Chi phí trọn gói, không phát sinh chi phí ẩn</div>
            </div>
            <div className='flex items-center'>
              <FaCheckSquare color='#34b233' size={12} className='m-1'/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Được hỗ trợ đưa đón tận nơi nếu ở TP. HCM</div>
            </div>
            <div className='flex items-center'>
              <FaCheckSquare color='#34b233' size={12} className='m-1'/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Hỗ trợ hợp tác điều trị: Răng hàm mặt, thẩm mỹ, tim mạch</div>
            </div>
            <div className='flex items-center'>
              <FaCheckSquare color='#34b233' size={12} className='m-1'/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Có bác sỹ thăm khám (telehealth consultataion) sau điều trị</div>
            </div>
            <div className='flex items-center'>
              <FaCheckSquare color='#34b233' size={12} className='m-1'/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Giảm giá <span className='text-blue-600'>3%</span> ở mọi dịch vụ của Y khoa Vạn Hạnh</div>
            </div>
        </div>
      </div>
      <div className="text-left font-medium p-4 rounded-sm">
        <h2 className="text-white rounded-sm font-bold p-4 mt-2 text-2xl">
          <Link href="https://ykhoavanhanh.vn">Đăng ký trực tiếp qua <span className='text-teal-400'>Vạn Hạnh</span></Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-2 rounded-2xl border border-gray-900 p-4 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            <div className='flex items-center'>
              <FaCircle color='#0dbcc5' size={12}/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Tự thu xếp thời gian và phụ thuộc vào lịch khám hiện tại</div>
            </div>
            <div className='flex items-center'>
              <FaCircle color='#0dbcc5' size={12}/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Khám, chuẩn đoán, điều trị với đội ngũ bác sỹ có tên tuổi</div>
            </div>
            <div className='flex items-center'>
              <FaCircle color='#0dbcc5' size={12}/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Sử dụng các thiết bị khám sức khoẻ hiện đại nhất</div>
            </div>
            <div className='flex items-center'>
              <FaCircle color='#0dbcc5' size={12}/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Chi phí trọn gói, không phát sinh chi phí ẩn</div>
            </div>
            <div className='flex items-center'>
              <FaCircle color='#0dbcc5' size={12}/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Tự lo chi phí đi lại</div>
            </div>
            <div className='flex items-center'>
              <FaCircle color='#0dbcc5' size={12}/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Hỗ trợ hợp tác điều trị: Răng hàm mặt, thẩm mỹ, tim mạch</div>
            </div>
            <div className='flex items-center'>
              <FaCircle color='#0dbcc5' size={12}/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Chăm sóc sau điều trị sẽ do hệ thống tự thu xếp</div>
            </div>
            <div className='flex items-center'>
              <FaCircle color='#0dbcc5' size={12}/>
              <div className="p-2 sm:text-gray-200  text-gray-200">Trả phí đầy đủ trên mọi dịch vụ của Y khoa Vạn Hanh</div>
            </div>
        </div>
      </div>
      </div>
  );
};

export default ResponsiveTable;
