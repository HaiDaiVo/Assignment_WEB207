import { NavLink } from "react-router-dom";
import { FaHouseChimney, FaSchool, FaFileSignature } from "react-icons/fa6"
import { Collapse, initTE, } from "tw-elements"
import avatar from "~/assets/images";
import StudentProfileComponent from "~/components/StudentProfileComponent";
import Accordion from "../../components/Accodion"
initTE({ Collapse })


const student = {
  id: '1',
  name: 'Nguyen Van A',
  class: 'SD18201',
  avatar: avatar.st1
}

function Sidebar({

}) {

  // console.log(FontAwesomeIcon);
  return (
    <div className="sidebar group p-2 hidden relative lg:block lg:fixed  flex-col transform transition-transform duration-700 ease-in-out hover:w-72 hover:z-30 hover:bg-[#ffffffea] hover:h-screen hover: hover:shadow-xl box-content"  >
      <NavLink to={'/profile'} >
        <StudentProfileComponent student={student} />
      </NavLink>
      <div className="snap snap-y">
        <ul className="snap snap-y">
          {/** */}
          <NavLink to={'/'} className="hover:opacity-80">
            <li className="hover:border-y-2 snap-center py-4 flex items-center justify-center  sidebar-item">
              <FaHouseChimney className="text-blue-500  h-8 w-8 group-hover:mr-5" />
              <span className="hidden group-hover:block text-xl">Trang chủ</span>
            </li>
          </NavLink>
          {/** */}
          <NavLink to={'/course'} className="hover:opacity-80">
            <li className="hover:border-y-2 snap-center py-4 flex items-center justify-center sidebar-item">
              <FaSchool className="text-blue-500  h-8 w-8 group-hover:mr-5" />
              <span className="hidden group-hover:block text-xl">Khóa học</span>
            </li>
          </NavLink>
          {/** */}
          <NavLink to={'/exams'} className="hover:opacity-80">
            <li className="hover:border-y-2 snap-center py-4 flex items-center justify-center sidebar-item" >
              <FaFileSignature className="text-blue-500  h-8 w-8  group-hover:mr-5" />
              <span className="hidden group-hover:block text-xl">Làm bài kiểm tra</span>
            </li>
          </NavLink>
          {/** < Accordion />*/}
          <li className="hover:border-y-2 snap-center py-4 flex items-center  ">

          </li>

        </ul>
      </div>
    </div>
  )
}
export default Sidebar;

