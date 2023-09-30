import React, { useState } from "react";


function LoginInfoApp() {
      const companyName = "HD-Education";
      const introduce = "Nền tảng học lập trình và công nghệ thông tin chất lượng cao. Khám phá khóa học đa dạng, học từ các chuyên gia hàng đầu và tham gia cộng đồng học tập trực tuyến để phát triển kỹ năng và định hình tương lai công nghệ của bạn."
      return (
            <div className="hidden md:flex relative h-full md:w-1/2 xl:w-3/5 flex  rounded-s-lg  z-10">
                  <div className="asolute  m-auto  w-4/5 md:h-auto   text-[#ffffff]">
                        <h1 className="mb-4 font-semibold text-4xl">{companyName}</h1>
                        <p className=" text-sm opacity-70 text-justify">{introduce}</p>
                  </div>
            </div>
      )
}

export default LoginInfoApp;