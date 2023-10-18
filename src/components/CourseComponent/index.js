import { NavLink } from 'react-router-dom'

function CourserComponent({
      id = "",
      name = "",
      title = "",
      logo = "",
      backgroundImage = "",
      textColor = "",
      classes,
      styles,
      type
}) {
      let types = 'course/detail'
      // eslint-disable-next-line default-case
      switch (type) {
            case 'course': types = 'course/detail'; break;
            case 'exam': types = 'exams'; break;
      }
      return (<NavLink to={`/${types}/${id}/${name}`}>
            <div
                  className={classes + " bg-red-100 rounded-md p-3 flex justify-between  "}
                  style={{ backgroundImage: backgroundImage }}
            >
                  <div className="h-full w-1/2 flex justify-center items-center">
                        <img className=" h-full rounded-md xl:h-5/6" src={require(`../../${logo}`)} alt={title} />
                  </div>
                  <div className="w-1/2 flex items-center px-2">
                        <h1 className="font-bold text-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]"
                              style={{ color: `${textColor}` }}
                        >{title}</h1>
                  </div>
            </div >
      </NavLink>
      );
}

export default CourserComponent;