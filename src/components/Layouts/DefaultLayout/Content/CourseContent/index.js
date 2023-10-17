import React, { useEffect, useState } from 'react';
import CourserComponent from '~/components/CourseComponent';
import getSubjectsAPI from '~/server/api-call';
import CoverImage from "~/assets/images/Login_background.jpg"
import { logo } from "~/assets/images";



function CourseContent() {
      const [subjects, setSubjects] = useState([]);
      useEffect(() => {
            async function fetchData() {
                  try {
                        const subjectsData = await getSubjectsAPI();
                        setSubjects(subjectsData.data); // Cập nhật state khi dữ liệu đã sẵn sàng
                  } catch (error) {
                        console.error(error);
                  }
            }
            fetchData();
      }, []);
      return (
            <React.Fragment>

                  {/**Danh sách khóa học */}
                  <div className="w-full grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4  ">
                        {/*Rander courses*/}
                        <div className="mt-6 lg:mt-6 min-h-[550px] w-[85vw] flex flex-col rounded-lg shadow-lg m-auto text-[1.5rem]">
                              <div className=" bg-slate-300 w-full px-20 py-10 ">
                                    <div className=" w-full min-h-[20rem] flex justify-between grid grid-cols-2">
                                          {/*first content*/}
                                          <div className="flex justify-center items-center">
                                                <img className=" border border-solid rounded-lg " src={logo.hdEducation} alt="logo" />
                                          </div>
                                          < div className="text-justify p-12 pb-6 p-12  space-y-4" >
                                                <h1 className="mb-6"> BẠN CÓ BIẾT?</h1>
                                                <p>Ngoài kia có rất nhiều bạn làm sai nghề, tư duy an phận và bị chôn chân với một công việc không đủ vui, không đủ sống,
                                                      các bạn ấy gặp hết khủng hoảng tuổi này tới tuổi kia. </p>
                                                <p> Tuổi 22 đang ngỡ ngàng không biết mình nên làm nghề gì.
                                                      Tuổi 28 thì bàng hoàng không biết lương như mình thì lập gia đình và nuôi dạy con cái làm sao.
                                                      Tuổi 40 nuối tiếc thanh xuân của mình liệu có phải đã phí hoài không nhỉ...</p>
                                          </div>
                                    </div>
                                    <div className=" w-full min-h-[20rem] flex justify-between grid grid-cols-1">
                                          {/*first content*/}
                                          < div className=" text-justify p-12  space-y-4" >
                                                <p>Mọi chuyện sẽ rất khác nếu họ được định hướng công việc phù hợp,
                                                      biết cách đặt cho mình một mục tiêu rõ ràng và có đầy đủ kĩ năng cần thiết để phát triển sự nghiệp. </p>
                                                <p>HD-EDUCATION tin rằng con người Việt Nam không hề thua kém gì so với con người ở bất cứ nơi đâu.
                                                      Con rồng cháu tiên hoàn toàn có thể trở thành công dân toàn cầu để sánh vai cùng các cường quốc năm châu.</p>
                                                <p>F8 mong muốn trở thành một tổ chức góp phần tạo nên sự thay đổi đó, và việc tạo ra cộng đồng học lập trình mới chỉ là điểm bắt đầu.
                                                      Chúng tôi đang nỗ lực tạo ra các khóa học có nội dung chất lượng vượt trội,
                                                      giúp học viên sau khi hoàn thành khóa học có thể trở thành những lập trình viên luôn được nhiều công ty săn đón.</p>
                                          </div>
                                    </div>
                              </div>
                              <div className=" w-full px-20 py-10 ">
                                    <div className=" w-full min-h-[20rem] flex justify-between grid grid-cols-1">
                                          {/*first content*/}
                                          < div className=" text-justify p-12  space-y-4" >
                                                <h1 className="mb-6"> TẦM NHÌN</h1>
                                                <p>Trở thành công ty công nghệ giáo dục có vị thế vững vàng trên thị trường, với các sản phẩm hỗ trợ học lập trình chất lượng, thông minh và
                                                      hiệu quả. F8 sẽ nổi tiếng bởi chất lượng sản phẩm vượt trội và được cộng đồng tin tưởng chứ không phải vì tiếp thị tốt. </p>
                                          </div>
                                          < div className=" text-justify p-12  space-y-4" >
                                                <h1 className="mb-6"> GIÁ TRỊ CỐT LÕI</h1>
                                                <p><strong>Sự tử tế:</strong> Tử tế trong chính người F8 với nhau và tử tế với học viên là kim chỉ nam
                                                      phấn đấu. Đã làm sản phẩm là phải chất lượng và chứng minh được hiệu quả, bất kể là sản
                                                      phẩm miễn phí hay giá rẻ. Làm ra phải thấy muốn để người thân mình dùng. </p>
                                                <p><strong>Tư duy số:</strong> Sản phẩm làm ra không phải là để vừa lòng đội ngũ trong công ty. Sản phẩm làm ra với mục tiêu cao nhất là người học thấy dễ học, được truyền cảm hứng tự học, học tới bài học cuối cùng và người học có thể tự tay làm ra những dự án bằng kiến thức đã học.</p>
                                                <p><strong>Luôn đổi mới và không ngừng học: </strong> Học từ chính đối thủ, học từ những công ty công nghệ giáo dục tốt trên thế giới và luôn luôn lắng nghe mọi góp ý từ phía học viên.</p>
                                          </div>
                                    </div>
                              </div>
                        </div>


                  </div>
            </React.Fragment>
      );
}

export default CourseContent;