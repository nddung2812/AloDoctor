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
];

const ReviewSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // Change review every 6 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handlePrevious = () => {
    setIsSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Reset sliding state after transition
  useEffect(() => {
    if (isSliding) {
      const timeout = setTimeout(() => setIsSliding(false), 3000); // Transition duration

      return () => clearTimeout(timeout); // Cleanup on component unmount
    }
  }, [isSliding]);

  return (
    <div className="max-w-lg container mx-auto rounded-2xl text-white border border-gray-900 py-4 px-2 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-4">
      <h2 className="text-2xl font-bold text-center mb-4">Đánh giá từ khách hàng</h2>
      <div className="overflow-hidden relative h-56 flex items-center justify-center">
        <div
          className={`flex transition-transform duration-1000 ease-in-out ${isSliding ? 'transform -translate-x-full' : 'translate-x-0'}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="min-w-full flex flex-col items-center text-center px-4 space-y-2">
              <p className="text-lg font-semibold">{review.name}</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`mb-4 h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm max-w-xs italic">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          className="bg-blue-700 rounded-full hover:bg-blue-600 text-white px-4 py-2 ml-3 w-10 h-10"
        >
          {'<'}
        </button>
        <button
          onClick={handleNext}
          className="hover:bg-blue-600 text-white px-4 py-2 rounded-full w-10 h-10 mr-3 bg-blue-700"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
