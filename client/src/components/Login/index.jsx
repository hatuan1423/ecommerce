import { useEffect, useState } from "react";
import TextInput from "../TextInput";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import useLogin from "~/hooks/useLogin";
import { Spin } from "antd";

const Login = () => {
  const [forgotPass, setForgotPass] = useState(false);
  const navigate = useNavigate();
  const { login, isPendingLogin, isSuccessLogin } = useLogin();
  const [hide, setHide] = useState("hide");
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
    }
  }, [isSuccessLogin]);

  const onSubmitForgotPass = () => {};

  return (
    <div>
      {forgotPass ? (
        <div className="max-w-80 py-1 px-2 gap-y-5 flex items-center flex-col">
          <div className="w-full flex flex-col  items-center gap-y-1">
            <span className="text-xl uppercase text-red">
              Khôi phục mật khẩu
            </span>
            <span className="text-sm text-ascent-2">Nhập email của bạn</span>
          </div>
          <div className="w-full flex gap-y-2 flex-col">
            <form
              onSubmit={handleSubmit(onSubmitForgotPass)}
              className="w-full flex gap-y-2 flex-col "
            >
              <TextInput
                placeholder="Email"
                className="w-full bg-white"
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
            </form>
            <span className="text-xs text-ascent-2">
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
              apply.
            </span>
          </div>
          <Button
            type="submit"
            title="Khôi phục"
            disable={!isValid}
            className="bg-red w-full flex items-center justify-center text-white uppercase py-2 rounded-full text-sm"
          />
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex items-center gap-x-1">
              <span className="text-ascent-2">Bạn đã nhớ mật khẩu?</span>
              <span
                onClick={() => setForgotPass(false)}
                className="text-red cursor-pointer"
              >
                Trở về đăng nhập
              </span>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmitLogin)}
          className="max-w-80 py-1 px-2 gap-y-5 flex items-center flex-col"
        >
          <div className="w-full flex flex-col  items-center gap-y-2">
            <span className="text-xl uppercase text-red">
              Đăng nhập tài khoản
            </span>
            <span className="text-sm text-ascent-2">
              Nhập email và mật khẩu của bạn
            </span>
          </div>
          <div className="w-full flex gap-y-2 flex-col">
            <div className="w-full flex gap-y-2 flex-col ">
              <TextInput
                placeholder="Email"
                className="w-full bg-white"
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
                placeholder="Mật khẩu"
                className="w-full bg-white"
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
            <span className="text-xs text-ascent-2">
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
              apply.
            </span>
          </div>
          <div className="relative w-full">
            <Button
              type="submit"
              disable={!isValid || isPendingLogin}
              title="Đăng nhập"
              className="bg-red w-full flex items-center justify-center text-white uppercase py-2 rounded-full text-sm"
            />
            {isPendingLogin && (
              <Spin className="absolute left-1/2 top-3" size="small" />
            )}
          </div>

          <div className="w-full  flex flex-col items-center">
            <div className="w-full flex items-center gap-x-1">
              <span className="text-14 text-ascent-2">Khách hàng mới?</span>
              <Link
                to={"/account/register"}
                className="text-red cursor-pointer"
              >
                Tạo tài khoản
              </Link>
            </div>
            <div className="w-full flex items-center gap-x-1">
              <span className="text-ascent-2">Quên mật khẩu?</span>
              <span
                onClick={() => setForgotPass(true)}
                className="text-red cursor-pointer"
              >
                Khôi phục mật khẩu
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
