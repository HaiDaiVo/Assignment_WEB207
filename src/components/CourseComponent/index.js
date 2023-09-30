import { NavLink } from 'react-router-dom'


function CourserComponent({
      course,
      classes,
      styles
}) {
      console.log(styles)
      return (<NavLink to='/exams/exam'>
            <div
                  className={classes + " bg-red-100 rounded-md p-3 flex justify-between  "}
                  style={{ backgroundImage: course.backgroundImage }}
            >
                  <div className="h-full w-1/2 flex justify-center items-center">
                        <img className=" h-full rounded-md xl:h-5/6" src={course.logo} />
                  </div>
                  <div className="w-1/2 flex items-center px-2">
                        <h1 className="font-bold text-lg "
                              style={{ color: `${course.textColor}` }}
                        >{course.title}</h1>
                  </div>
            </div >
      </NavLink>
      );
}

export default CourserComponent;