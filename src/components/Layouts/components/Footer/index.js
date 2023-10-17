import { logo } from '~/assets/images'

function Footer() {
      return (
            <div className="w-full h-72 bg-gray-900 py-6 text-white box-content">
                  <div className="w-4/5 h-full  m-auto flex justify-between box-content">
                        {/* Infomation */}
                        <div className="w-[40%] mx-2 h-full">
                              <div className="h-14 w-full mb-2 flex items-center">
                                    <img src={logo.hdEducation} className='h-10 rounded-lg ' />
                                    <span className=" ml-2" > HD - education </span>
                              </div >
                              <div className="min-h-[3.5rem">
                                    <ul >
                                          <li className='mb-2'>Điện thoại: 0847511175</li>
                                          <li className='mb-2'>Email: haidai.122100@gmail.com</li>
                                          <li className='mb-2'>137 Nguyễn Thị Thập - Hòa Minh - Liên Chiểu - Đà Nẵng</li>
                                    </ul>
                              </div >

                        </div>

                        {/* Product */}
                        <div className="w-[30%] mx-2 h-full">
                              <div className="h-14 w-full mb-2 flex items-center">
                                    <span>THÔNG TIN</span>
                              </div >
                              <div className="min-h-[3.5rem] mb-2">
                                    <ul >
                                          <li className='mb-2'>Giới thiệu</li>
                                          <li className='mb-2'>Liên hệ</li>
                                          <li className='mb-2'>Điều khoản</li>
                                          <li className='mb-2'>Bảo mật</li>
                                          <li className='mb-2'>Cơ hội việc làm</li>

                                    </ul>
                              </div >

                        </div>

                        {/* Introduce */}
                        <div className="w-[30%] mx-2 h-full ">
                              <div className="h-14 w-full mb-2 flex items-center">
                              <span>KHÓA HỌC</span>
                              </div >
                              <div className="min-h-[3.5rem] w-full mb-2">
                                    <ul >
                                          <li className='mb-2'>HTML/CSS cơ bản</li>
                                          <li className='mb-2'>Java script</li>
                                          <li className='mb-2'>Java</li>
                                          <li className='mb-2'>PHP</li>
                                          <li className='mb-2'>SQL Server</li>
                                    </ul>
                              </div >

                        </div>
                  </div>
            </div>
      );
}

export default Footer;