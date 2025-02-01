import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Button from "~/components/Button";
import TextInput from "~/components/TextInput";
import Wrapper from "~/components/Wrapper";
import useLogin from "~/hooks/useLogin";

const Login = () => {
  const [forgotPass, setForgotPass] = useState(false);
  const navigate = useNavigate();
  const [hide, setHide] = useState("hide");
  const { login, isPendingLogin, isSuccessLogin } = useLogin();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmitLogin = (data) => {
    login(data);
  };

  useEffect(() => {
    if (isSuccessLogin) {
      navigate("/");
    }
  }, [isSuccessLogin]);

  const onSubmitForgotPass = (data) => {};

  return (
    <Wrapper className="w-full border-t flex p-10 items-center justify-center">
      {forgotPass ? (
        <form
          onSubmit={handleSubmit(onSubmitForgotPass)}
          className="bg-white flex flex-col p-6"
        >
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
                className="w-full py-5 italic border-none  focus:bg-primary focus:outline-bg"
                placeholder="Vui lòng nhập email của bạn"
                name="email"
                register={register("email", {
                  required: "Email là bắt buộc!",
                  validate: {
                    noSpaces: (value) =>
                      !/\s/.test(value) || "Email không được chứa dấu cách!",
                    isEmail: (value) =>
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                      "Email không đúng định dạng!",
                  },
                })}
                error={errors.email ? errors.email?.message : ""}
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
              type="submit"
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
        </form>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmitLogin)}
          className="bg-white flex flex-col p-6"
        >
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
                className="w-full py-5 italic border-none  focus:bg-primary focus:outline-bg"
                placeholder="Vui lòng nhập email của bạn"
                name="email"
                register={register("email", {
                  required: "Email là bắt buộc!",
                  validate: {
                    noSpaces: (value) =>
                      !/\s/.test(value) || "Email không được chứa dấu cách!",
                    isEmail: (value) =>
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                      "Email không đúng định dạng!",
                  },
                })}
                error={errors.email ? errors.email?.message : ""}
              />
              <TextInput
                className="w-full py-5 italic border-none  focus:bg-primary focus:outline-bg"
                placeholder="Vui lòng nhập mật khẩu"
                name="password"
                register={register("password", {
                  required: "Mật khẩu là bắt buộc!",
                })}
                iconRight={
                  hide === "hide" ? (
                    <IoMdEyeOff
                      className="cursor-pointer"
                      onClick={() => setHide("show")}
                    />
                  ) : (
                    <IoMdEye
                      className="cursor-pointer"
                      onClick={() => setHide("hide")}
                    />
                  )
                }
                iconRightStyles="right-5"
                error={errors.password ? errors.password?.message : ""}
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
            <div className="relative">
              <Button
                disable={!isValid || isPendingLogin}
                type="submit"
                title="Đăng nhập"
                className="bg-red w-48 py-3 rounded-lg flex items-center justify-center text-sm text-white uppercase font-semibold"
              />
              {isPendingLogin && <Spin className="absolute left-1/2 top-3" />}
            </div>
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
        </form>
      )}
    </Wrapper>
  );
};

export default Login;
