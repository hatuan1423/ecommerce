import React from "react";
import TextInput from "../TextInput";
import Button from "../Button";

const Login = () => {
  return (
    <div className="max-w-80 py-1 px-2 gap-y-5 flex items-center flex-col">
      <div className="w-full flex flex-col  items-center gap-y-2">
        <span className="text-xl uppercase text-red">Đăng nhập tài khoản</span>
        <span className="text-sm text-ascent-2">
          Nhập email và mật khẩu của bạn
        </span>
      </div>
      <div className="w-full flex gap-y-2 flex-col">
        <div className="w-full flex gap-y-2 flex-col ">
          <TextInput placeholder="Email" className="w-full bg-white" />
          <TextInput placeholder="Mật khẩu" className="w-full bg-white" />
        </div>
        <span className="text-xs">
          This site is protected by reCAPTCHA and the{" "}
          <a href="" className="text-blue-600">
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a href="" className="text-blue-600">
            Terms of Service
          </a>{" "}
          apply.
        </span>
      </div>
      <Button
        title="Đăng nhập"
        className="bg-red w-full flex items-center justify-center text-white uppercase py-2 rounded-full font-semibold"
      />
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex items-center">
          <span>Khách hàng mới?</span>
          <span className="text-red">Tạo tài khoản</span>
        </div>
        <div className="w-full flex items-center">
          <span>Quên mật khẩu?</span>
          <span className="text-red">Khôi phục mật khẩu</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
