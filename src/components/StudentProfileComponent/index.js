import { useState, useEffect } from "react";
import { getAuthAPI } from "~/server/api-call";




function StudentProfileComponent(props) {
      const [avatar, setAvatar] = useState('avatar-1.png');
      const [email, setEmail] = useState("");
      const [fullname, setFullname] = useState("Chưa đăng nhập!");

      useEffect(() => {
            async function fetchData() {
                  try {
                        const response = await getAuthAPI();

                        if (response.data.avatar !== undefined) {
                              setAvatar(response.data.avatar)
                        }
                        if (response.data.email !== undefined) {
                              setEmail(response.data.email)
                        }
                        if (response.data.fullname !== undefined) {
                              setFullname(response.data.fullname)
                        }
                  } catch (e) {
                        console.log(e);
                  }
            }
            fetchData();
      }, [])
      return (
            <div className=" p-2  w-full flex items-center  hover:border-b-2">
                  <div className="border-2 border-orange-500 overflow-hidden rounded-[100%] avatar h-14 w-14 flex justify-center">
                        <img className="cover" src={require(`../../assets/images/avatars/${avatar}`)} />
                  </div>
                  <div className={`${props.displays} h-full group-hover:block ml-8 flex flex-col justify-center`} >
                        <h2 className="text-[1rem] font-bold mb-2"> {fullname}</h2>
                        <h3 className="text-[0.8rem]">{email} </h3>
                  </div>
            </div>
      )
}

export default StudentProfileComponent;