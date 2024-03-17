import { useState } from "react";

const Form = () => {
  //  states --------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formData, setFormdata] = useState({});
  const { nameIs, emailIs, passwordIs } = formData;
  const [submit, setSubmit] = useState(false);

  // handlings-----------

  // handlng submit =-----------------

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { nameIs: name, emailIs: email, passwordIs: password };
    setFormdata(user);
    setSubmit(true);
  };
  return (
    // <div className="">
    <div className="flex items-center justify-center gap-5 w-full">
      {(!submit && (
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-96  flex flex-col gap-5 p-5 bg-pink-400 rounded-lg shadow-lg"
        >
          <div>
            <h2 className="text-xl mb-2 ms-2">Name</h2>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                onKeyUp={(e) => setName(e.target.value)}
                type="text"
                className="grow"
                placeholder="Name"
                required
              />
            </label>
          </div>
          {/* email container */}
          <div>
            <h2 className="text-xl mb-2 ms-2">Email</h2>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                onKeyUp={(e) => setEmail(e.target.value)}
                type="text"
                className="grow"
                placeholder="Email"
                required
              />
            </label>
          </div>
          {/* password container */}
          <div>
            <h3 className="text-xl ms-2 mb-2">Password</h3>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onKeyUp={(e) => setPassword(e.target.value)}
                type="password"
                className="grow"
                required
              />
            </label>
          </div>

          <button className="btn ">Submit</button>
        </form>
      )) || (
        <div>
          <h2 className="text-center font-extrabold text-2xl mb-3 ">
            {" "}
            Thank For Submit{" "}
          </h2>
          <div className="w-auto bg-pink-50 h-auto rounded-xl p-5">
            <h2 className="text-xl">
              Name:{" "}
              <span className="ms-3 px-3 rounded bg-blue-100">{nameIs}</span>{" "}
            </h2>
            <h2 className="text-lg">
              Email:{" "}
              <span className="ms-3 px-3 rounded bg-blue-100">{emailIs}</span>{" "}
            </h2>
            <h2 className="text-xl">
              Password:{" "}
              <span className="ms-3 px-3 rounded bg-blue-100">
                {passwordIs}
              </span>{" "}
            </h2>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default Form;
