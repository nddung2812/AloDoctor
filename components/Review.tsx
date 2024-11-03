// components/ReviewSlider.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

type Review = {
  name: string;
  rating: number;
  comment: string;
};

const reviews: Review[] = [
  { name: 'Minh Anh', rating: 5, comment: 'Trung tâm y khoa Vạn Hạnh thật tuyệt vời! Đội ngũ bác sĩ giàu kinh nghiệm, tận tâm và dịch vụ chất lượng cao. Mình cảm thấy an tâm khi điều trị tại đây.' },
  { name: 'Bảo Ngọc', rating: 5, comment: 'Bác sĩ nhiệt tình, chuyên nghiệp, trung tâm trang bị hiện đại. Mình đã cải thiện rất nhiều từ khi điều trị ở đây. Rất đáng tin cậy!' },
  { name: 'Tuấn Anh', rating: 5, comment: 'Trung tâm y khoa Vạn Hạnh có dịch vụ xuất sắc! Bác sĩ luôn lắng nghe, thấu hiểu và điều trị rất hiệu quả. Rất hài lòng!' },
  { name: 'Kim Dung', rating: 5, comment: 'Không gian sạch sẽ, nhân viên nhiệt tình, bác sĩ tận tâm. Sau một thời gian điều trị, tình trạng của mình đã cải thiện đáng kể. Rất hài lòng!' },
  { name: 'Hoàng Nam', rating: 5, comment: 'Mình rất ấn tượng với sự chuyên nghiệp và tận tâm của đội ngũ tại Vạn Hạnh. Quy trình điều trị rõ ràng, hiệu quả cao. Rất yên tâm khi điều trị ở đây.' }
]

const ReviewSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000); // Change review every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="max-w-lg mx-auto rounded-lg text-white min-w-96 border border-gray-900 p-4 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-4">
      <h2 className="text-2xl font-bold text-center mb-4">Đánh giá từ khách hàng</h2>
      <div className="flex flex-col items-center text-center space-y-4 transition-opacity duration-500 ease-in-out">
        <p className="text-lg font-semibold">{reviews[currentIndex].name}</p>
        <div className="flex justify-center">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`h-5 w-5 ${
                index < reviews[currentIndex].rating ? 'text-yellow-400' : 'text-gray-600'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-300 text-sm">{reviews[currentIndex].comment}</p>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)}
          className="hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {'<'}
        </button>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)}
          className="hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
        {'>'}
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
