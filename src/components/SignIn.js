import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "shop";
  //TODO: States;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

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

  const handleSignIn = () => {
    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        /* navigate("/shop"); */
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="bg-gray-10 font-poppins">
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            Sign In
          </h1>

          <div className="w-3/4 mb-6">
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id="email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="Email"
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

          <div className="italic mb-6">
            <p>
              Not have an account ?{" "}
              <span className="underline underline-offset-4 text-blue-600">
                <Link to="/signup">Sign Up</Link>
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
              onClick={handleSignIn}
              type="submit"
              className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
            >
              {" "}
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
