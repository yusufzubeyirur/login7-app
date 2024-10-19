import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-full relative">
      <img
        src="/Rectangle 1.png"
        alt="background"
        className="h-full w-full object-cover absolute top-0 left-0 -z-10 "
      />

      <div className="flex flex-col h-full justify-center items-center w-full bg-[#00000080] ">
        <div className="flex flex-col gap-6 text-center w-[500px] mr-10 bg-[#FFFFFF33] p-7 py-20 rounded-[50px] z-10 text-[#FFFFFFCC]">
          <h1 className="uppercase text-5xl font-bold">Login</h1>

          <input
            className="py-2 px-4 text-lg placeholder-[#FFFFFFD6] bg-[#FFFFFF33]"
            type="text"
            placeholder="Username"
          />
          <input
            className="py-2 px-4 text-lg placeholder-[#FFFFFFD6] bg-[#FFFFFF33]"
            type="password"
            placeholder="Password"
          />

          <div className="flex justify-between gap-10">
            <button className="bg-[#000000B2] border-[1px] text-[#FFFFFF80] hover:text-white hover:bg-black/70 duration-300 text-2xl font-semibold grow-[5]">
              LOGIN
            </button>

            <div className="flex flex-col font-semibold justify-start items-end text-lg grow-[1]">
              <a href="#" className="hover:text-[#FFFFFFB2]">
                <p>Forgot Password</p>
              </a>
              <a href="#" className="hover:text-[#FFFFFFB2]">
                <p>Register</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[400px] min-h-[400px] rounded-full absolute bg-[#C4C4C400] border-[57px] border-[#00000040] left-[450px] bottom-[500px] z-0 pointer-events-none"></div>
    </div>
  );
};

export default Login;
