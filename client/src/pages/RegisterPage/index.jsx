import React from "react";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import TextInput from "~/components/TextInput";
import Wrapper from "~/components/Wrapper";

const Register = () => {
  return (
    <Wrapper className="w-full flex p-10 items-center justify-center">
      <div className="bg-white flex flex-col p-6">
        <div className="w-full items-center justify-center mb-11 gap-x-10 flex">
          <Link
            to="/account/login"
            className="text-2xl text-ascent-2 font-bold"
          >
            Đăng nhập
          </Link>
          <div className="w-[1px] h-6 bg-black" />
          <Link to="/account/register" className="text-2xl font-bold">
            Đăng ký
          </Link>
        </div>
        <div className="w-full gap-y-2 mb-6 flex flex-col">
          <div className="w-full flex gap-y-5 flex-col">
            <TextInput
              className="w-full py-5 italic border-none focus:bg-primary"
              placeholder="Họ"
            />
            <TextInput
              className="w-full py-5 italic border-none focus:bg-primary"
              placeholder="Tên"
            />
            <TextInput
              className="w-full py-5 italic border-none focus:bg-primary"
              placeholder="mm/dd/yyyy"
            />
            <TextInput
              className="w-full py-5 italic border-none focus:bg-primary"
              placeholder="Email"
            />
            <TextInput
              className="w-full py-5 italic border-none focus:bg-primary"
              placeholder="Mật khẩu"
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
            </a>
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
            title="Đăng ký"
            className="bg-red w-48 py-3 rounded-lg flex items-center justify-center text-sm text-white uppercase font-semibold"
          />
          <div className="w-full flex flex-col">
            <span className="text-sm">
              Bạn đã có tài khoản?{" "}
              <Link to={"/account/login"} className="text-blue-600">
                Đăng nhập ngay
              </Link>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
