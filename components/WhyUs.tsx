import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import Link from "next/link";

interface TableRow {
  column1: string;
}

const ResponsiveTable: React.FC = () => {
  // Sample data for the table
  const rows1: TableRow[] = Array.from({ length: 5 }, (_, index) => ({
    column1: `Row ${index + 1} - Column 1`,
  }));

  const rows2: TableRow[] = Array.from({ length: 5 }, (_, index) => ({
    column1: `Row ${index + 1} - Column 1`,
  }));

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-2 ">
      <div className="text-left font-medium p-4 rounded-sm">
        <h2 className="text-blue-600 rounded-sm font-bold p-4">
          <Link href="/register">Đăng ký qua Alo Doctor</Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-2 rounded-2xl border border-gray-400 p-4">
        {rows1.map((row, index) => (
          <React.Fragment key={index}>
            <div className='flex items-center'>
            <FaCheckSquare color='#34b233'/>
            <div className="p-2 shadow-md ">{row.column1}</div>
            </div>
          </React.Fragment>
        ))}
        </div>
      </div>
      <div className="text-left font-medium p-4 rounded-sm">
        <h2 className="text-white rounded-sm font-bold p-4">Đăng ký trực tiếp qua Vạn Hạnh</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-2 rounded-2xl border border-gray-400 p-4">
        {rows1.map((row, index) => (
          <React.Fragment key={index}>
            <div className='flex items-center'>

            <FaCheckSquare color=''/>
            <div className="p-2 shadow-md">{row.column1}</div>
            </div>
          </React.Fragment>
        ))}
        </div>
      </div>
      </div>
  );
};

export default ResponsiveTable;
