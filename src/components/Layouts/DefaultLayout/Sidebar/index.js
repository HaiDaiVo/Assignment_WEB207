import { NavLink } from "react-router-dom";
import { FaHouseChimney, FaSchool, FaFileSignature, FaFeatherPointed } from "react-icons/fa6"
import { Collapse, initTE, } from "tw-elements"
import avatar from "~/assets/images";
import StudentProfileComponent from "~/components/StudentProfileComponent";
initTE({ Collapse })

function Sidebar({ student }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    })
  }
  // console.log(FontAwesomeIcon);
  return (
    <div className="sidebar group pr-2 hidden relative lg:block lg:fixed  flex-col transform transition-transform duration-700 ease-in-out hover:w-72 hover:z-30 hover:bg-[#ffffffea] hover:h-screen hover: hover:shadow-xl box-content"  >
      <NavLink to={'/profile'} >
        <StudentProfileComponent displays={"hidden"} />
      </NavLink>
      <div className="snap snap-y">
        <ul className="snap snap-y">
          {/** */}
          <NavLink to={'/'} class
            Name="hover:opacity-80"
            onClick={goTop()}
          >
            <li className="hover:border-y-2 snap-center py-4 flex items-center justify-center  sidebar-item transition ease-in-out delay-120 hover:traslate-x-1 hover:scale-105 duration-300 hover:bg-blue-200 active:bg-blue-400">
              <FaHouseChimney className="text-blue-500  h-8 w-8 group-hover:mr-5" />
              <span className="hidden group-hover:block text-xl">Trang chủ</span>
            </li>
          </NavLink>

          {/** */}
          <NavLink to={'/courses'}
            className="hover:opacity-80"
            onClick={goTop()}
          >
            <li className="hover:border-y-2  snap-center py-4 flex items-center justify-center sidebar-item transition ease-in-out delay-120 hover:traslate-x-1 hover:scale-105 duration-300 hover:bg-blue-200 active:bg-blue-400" >
              <FaFileSignature className="text-blue-500  h-8 w-8  group-hover:mr-5" />
              <span className="hidden group-hover:block text-xl">Khóa học</span>
            </li>
          </NavLink>
          {/** */}
          <NavLink to={'/introduce'}
            className="hover:opacity-80"
            onClick={goTop()}
          >
            <li className="hover:border-y-2 snap-center py-4 flex items-center justify-center sidebar-item transition ease-in-out delay-120 hover:traslate-x-1 hover:scale-105 duration-300 hover:bg-blue-200 active:bg-blue-400">
              <FaSchool className="text-blue-500  h-8 w-8 group-hover:mr-5" />
              <span className="hidden group-hover:block text-xl">Giới thiệu</span>
            </li>
          </NavLink>
          {/** < Accordion />*/}
          <NavLink to={'/introduce'}
            className="hover:opacity-80"
            onClick={goTop()}
          >
            <li className="hover:border-y-2 snap-center py-4 flex items-center justify-center sidebar-item transition ease-in-out delay-120 hover:traslate-x-1 hover:scale-105 duration-300 hover:bg-blue-200 active:bg-blue-400">
              <FaFeatherPointed className="text-blue-500  h-8 w-8 group-hover:mr-5" />
              <span className="hidden group-hover:block text-xl">Góp ý</span>
            </li>
          </NavLink>

        </ul>
      </div>
    </div>
  )
}
export default Sidebar;

