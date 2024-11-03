// components/LandingPage.tsx
import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  const vhTeam = "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1730608413/VHTeam_soznhi"
  return (
    <div className="flex flex-col items-center text-white">
      {/* Banner Section */}
      <div className="relative w-full h-60 sm:h-[200px] md:h-[400px] lg:h-[450px] my-4">
        <Image
          src={vhTeam} // Replace with your image path
          alt="doi ngu bac sy"
          layout="fill"
          objectFit="contain"
          className="rounded-b-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-3 text-center">
        <h1 className="mx-auto font-display text-3xl font-bold tracking-normal text-gray-200 sm:text-6xl mb-2">
          Giới thiệu trung tâm y khoa Vạn Hạnh
        </h1>
        <p className="mt-4 mb-4 text-lg sm:text-gray-400  text-gray-400 leading-7 text-justify">
          Trung tâm y khoa Vạn Hạnh gồm các bác sĩ chuyên khoa có nhiều kinh nghiệm, được đào tạo ở nước ngoài, phụ trách quản lý và giảng dạy tại nhiều viện, trường của Thành phố Hồ Chí Minh. Thấu hiểu và đồng cảm với nỗi đau của bệnh nhân và quan tâm đến việc cải thiện chất lượng điều trị các bệnh tâm thần kinh là mối quan tâm hàng đầu của đội ngũ chúng tôi.
        </p>
        <p className="mt-4 mb-4 text-lg sm:text-gray-400  text-gray-400 leading-7 text-justify">
          Đối với những bệnh nhân có bệnh lý đau phức tạp hay những bệnh thần kinh chuyên sâu, chúng tôi thiết kế một mô hình điều trị hiệu quả cho người bệnh dựa trên chứng cứ khoa học, hợp tác đa chuyên khoa và điều trị đa vô thức của tập thể. Chúng tôi chẩn đoán dựa vào các chứng cứ khoa học về lâm sàng và cận lâm sàng, áp dụng phương pháp điều trị dùng thuốc và không dùng thuốc, luôn luôn quan tâm đến sức khỏe tinh thần của người bệnh.
        </p>
        <p className="mt-4 mb-4 text-lg sm:text-gray-400  text-gray-400 leading-7 text-justify">
          Trung tâm y khoa Vạn Hạnh còn là nơi đào tạo và huấn luyện của Hội đau TPHCM. Do đó các phương pháp điều trị cập nhật hằng năm sẽ được ứng dụng trong thực hành để đem lại hiệu quả cao nhất cho người bệnh.
        </p>
        <p className="mt-4 mb-4 text-lg sm:text-gray-400  text-gray-400 leading-7 text-justify">
          Đội ngũ các nhân viên y tế bao gồm các bác sĩ cơ xương khớp, bác sĩ chấn thương chỉnh hình, bác sĩ thần kinh, bác sĩ tâm thần, bác sĩ X-quang, bác sĩ gây mê hồi sức, bác sĩ vật lý trị liệu cùng các kỹ thuật viên có kinh nghiệm trong điều trị các bệnh tâm thần kinh, phòng ngừa và kiểm soát đau. Trung tâm còn ứng dụng các phương pháp hỗ trợ như thiền trị liệu, âm nhạc trị liệu, tâm lý trị liệu phục hồi chức năng…để đem lại sự hồi phục sức khỏe về cả thể chất và tinh thần cho người bệnh.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
