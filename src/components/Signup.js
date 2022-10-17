import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Signup = () => {
  //TODO: Context;
  const { createUser } = useContext(AuthContext);

  //TODO: States;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };

  //TODO: handleEmail;
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //TODO: handlePassword;
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    setError("");
  };

  //TODO: handleConfirm;
  const handleConfirm = (e) => {
    const confirm = e.target.value;
    setConfirm(confirm);
  };

  //TODO: handleSubmit;
  const handleSubmit = () => {
    if (password !== confirm) {
      setError("Password Not Matched");
      return;
    }
    if (password.length < 8) {
      setError("Password Must Be More That 8 Character");
      return;
    }
    setPassword(password);

    //TODO: createUser;
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setError(errorMessage);
        // ..
      });
  };

  return (
    <div className="bg-gray-10 font-poppins">
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            Sign Up
          </h1>

          <div className="w-3/4 mb-6">
            <input
              onBlur={handleName}
              type="name"
              name="name"
              id="name"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="Name"
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id="email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="Email"
              required
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              id="password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Password"
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              onBlur={handleConfirm}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Confirm Password"
            />
          </div>

          {error && (
            <div className="font-bold text-red-600 underline underline-offset-4 mb-5">
              <p>{error}</p>
            </div>
          )}

          <div className="italic mb-6">
            <p>
              Already have an account ?{" "}
              <span className="underline underline-offset-4 text-blue-600">
                <Link to="/signin">Sign In</Link>
              </span>
            </p>
          </div>

          <div className="w-3/4 flex flex-row justify-between">
            <div className=" flex items-center gap-x-1">
              <input
                type="checkbox"
                name="remember"
                id=""
                className=" w-4 h-4  "
              />
              <label htmlFor="" className="text-sm text-slate-400">
                Remember me
              </label>
            </div>
            <div>
              <a
                href="/"
                className="text-sm text-slate-400 hover:text-blue-500"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="w-3/4 mt-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
            >
              {" "}
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
