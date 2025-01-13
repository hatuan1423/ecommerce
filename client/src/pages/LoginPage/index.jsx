import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import TextInput from "~/components/TextInput";
import Wrapper from "~/components/Wrapper";

const Login = () => {
  const [forgotPass, setForgotPass] = useState(false);

  return (
    <Wrapper className="w-full flex p-10 items-center justify-center">
      {forgotPass ? (
        <div className="bg-white flex flex-col p-6">
          <div className="w-full items-center justify-center mb-11 gap-x-10 flex">
            <Link to="/account/login" className="text-2xl font-bold">
              Đăng nhập
            </Link>
            <div className="w-[1px] h-6 bg-black" />
            <Link
              to="/account/register"
              className="text-ascent-2 text-2xl font-bold"
            >
              Đăng ký
            </Link>
          </div>
          <div className="w-full gap-y-2 mb-6 flex flex-col">
            <div className="w-full flex gap-y-5 flex-col">
              <TextInput
                className="w-full py-5 italic border-none focus:bg-primary"
                placeholder="Vui lòng nhập email của bạn"
              />
            </div>
            <span className="text-sm text-ascent-2">
              This site is protected by reCAPTCHA and the{" "}
              <a href="#" className="text-blue-600">
                Google Privacy Policy
              </a>
              and{" "}
              <a href="#" className="text-blue-600">
                Terms of Service
              </a>{" "}
              apply
            </span>
          </div>
          <div className="w-full gap-x-4 flex items-center">
            <Button
              title="Gửi email"
              className="bg-red w-48 py-3 rounded-lg flex items-center justify-center text-sm text-white uppercase font-semibold"
            />
            <div className="w-full flex flex-col">
              <span className="text-sm">
                Quay lại{" "}
                <span
                  onClick={() => setForgotPass(false)}
                  className="text-blue-600 cursor-pointer"
                >
                  đăng nhập
                </span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white flex flex-col p-6">
          <div className="w-full items-center justify-center mb-11 gap-x-10 flex">
            <Link to="/account/login" className="text-2xl font-bold">
              Đăng nhập
            </Link>
            <div className="w-[1px] h-6 bg-black" />
            <Link
              to="/account/register"
              className="text-ascent-2 text-2xl font-bold"
            >
              Đăng ký
            </Link>
          </div>
          <div className="w-full gap-y-2 mb-6 flex flex-col">
            <div className="w-full flex gap-y-5 flex-col">
              <TextInput
                className="w-full py-5 italic border-none focus:bg-primary"
                placeholder="Vui lòng nhập email của bạn"
              />
              <TextInput
                className="w-full py-5 italic border-none focus:bg-primary"
                placeholder="Vui lòng nhập mật khẩu"
              />
            </div>
            <span className="text-sm text-ascent-2">
              This site is protected by reCAPTCHA and the{" "}
              <a
                target="_blank"
                href="https://policies.google.com/privacy"
                className="text-blue-600"
              >
                Google Privacy Policy
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://policies.google.com/terms"
                className="text-blue-600"
              >
                Terms of Service
              </a>{" "}
              apply
            </span>
          </div>
          <div className="w-full gap-x-4 flex items-center">
            <Button
              title="Đăng nhập"
              className="bg-red w-48 py-3 rounded-lg flex items-center justify-center text-sm text-white uppercase font-semibold"
            />
            <div className="w-full flex flex-col">
              <span className="text-sm">
                Bạn chưa có tài khoản?{" "}
                <Link to={"/account/register"} className="text-blue-600">
                  Đăng ký
                </Link>
              </span>
              <span className="text-sm">
                Bạn quên mật khẩu?{" "}
                <span
                  onClick={() => setForgotPass(true)}
                  className="text-blue-600 cursor-pointer"
                >
                  Quên mật khẩu?
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Login;
