export default function Input(props) {
      // isvalid = true => props.validate = validation-truetype
      return (
            <div className="w-full  h-12 sm:h-14 relative">
                  <input
                        id={props.id}
                        type={props.type}
                        className="input-customer h-10 w-full border-2 rounded-md px-3 outline-none focus:border-blue-500 transition duration-200 "
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                  >
                  </input>
                  <label className=" absolute left-4 top-2 transition duration-100 input-text " htmlFor={props.id}>
                        {props.label}
                  </label>
                  <span
                        id="input-validate"
                        className="ml-4 text-red-600 italic text-xs"
                  > {props.error ? props.error : ""}</span>
            </div >
      )
}

function UsernameInput() {
      return (
            <div className="w-full relative">
                  <input
                        type="text"
                        className="input-customer h-10 w-full border-2 rounded-md px-3 outline-none focus:border-blue-500 transition duration-200"
                        placeholder=""

                  >
                  </input>
                  <label className="absolute left-4 top-2 transition duration-100 input-text" htmlForr="">
                        Username
                  </label>
            </div>
      )
}

function PasswordInput() {
      return (
            <div className="w-full relative">
                  <input
                        type="password"
                        className="input-customer h-10 w-full border-2 rounded-md px-3 outline-none focus:border-blue-500 transition duration-200"
                        placeholder="" >
                  </input>
                  <label className="absolute left-4 top-2 transition duration-100 input-text" htmlFor="">
                        Password
                  </label>
            </div>
      )
}


export { PasswordInput, UsernameInput }
