import avatar from "~/assets/images";




function StudentProfileComponent({ student }) {
      let ava = avatar.st1;
      let name = 'Chưa đăng nhập';
      let class_Student = " ";

      if (student) {
            ava = student.avatar;
            name = student.name;
            class_Student = student.class;
      }
      return (
            <div className="min-h-[4rem] p-2  w-full flex items-center  hover:border-b-2">
                  <div className="border-2 border-orange-500 overflow-hidden rounded-[100%] avatar h-16 flex justify-center">
                        <img className="" src={ava} />
                  </div>
                  <div className="hidden h-full group-hover:block ml-8 flex flex-col justify-center" >
                        <h2 className="text-[1rem] font-bold mb-2"> {name}</h2>
                        <h3 className="text-[0.8rem]"> {class_Student}</h3>
                  </div>
            </div>
      )
}

export default StudentProfileComponent;