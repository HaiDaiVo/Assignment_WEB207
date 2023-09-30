export default function InputTag(props) {
      return (
            <div className="w-full relative">
                  <input
                        type={props.type}
                        className="input-customer h-10 w-full border-2 rounded-md px-3 outline-none focus:border-blue-500 transition duration-200"
                        placeholder="" >
                  </input>
                  <label className="absolute left-4 top-2 transition duration-100 input-text" for="">
                        {props.label}
                  </label>
            </div>
      )
}

function UsernameInput() {
      return (
            <div className="w-full relative">
                  <input
                        type="text"
                        className="input-customer h-10 w-full border-2 rounded-md px-3 outline-none focus:border-blue-500 transition duration-200"
                        placeholder="" >
                  </input>
                  <label className="absolute left-4 top-2 transition duration-100 input-text" for="">
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
                  <label className="absolute left-4 top-2 transition duration-100 input-text" for="">
                        Password
                  </label>
            </div>
      )
}


export { PasswordInput, UsernameInput }
