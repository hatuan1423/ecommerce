import React from "react";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import TextInput from "~/components/TextInput";
import Wrapper from "~/components/Wrapper";

const Login = () => {
  return (
    <Wrapper className="w-full flex p-10 items-center justify-center">
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
            title="Đăng nhập"
            className="bg-red w-48 py-3 rounded-lg flex items-center justify-center text-sm text-white uppercase font-semibold"
          />
          <div className="w-full flex flex-col">
            <span className="text-sm">
              Bạn chưa có tài khoản?{" "}
              <a href="" className="text-blue-600">
                Quên mật khẩu?
              </a>
            </span>
            <span className="text-sm">
              Bạn quên mật khẩu?{" "}
              <a href="" className="text-blue-600">
                Đăng ký
              </a>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
