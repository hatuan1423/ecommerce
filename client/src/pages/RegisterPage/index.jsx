import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import TextInput from '~/components/TextInput';
import Wrapper from '~/components/Wrapper';
import { useMutationHook } from '~/hooks/useMutationHook';
import * as AccessService from '~/services/AccessService';

const Register = () => {
  const [hide, setHide] = useState('hide');
  const navigate = useNavigate();
  const mutation = useMutationHook((data) => AccessService.signup(data));
  const { isPending, isSuccess } = mutation;
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/account/login');
    }
  }, []);

  return (
    <Wrapper className="w-full border-t flex p-10 items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md flex flex-col p-6"
      >
        <div className="w-full items-center  justify-center mb-11 gap-x-10 flex">
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
              className="w-full py-5 italic border-none focus:bg-primary focus:outline-bg"
              placeholder="Họ"
              name="firstName"
              register={register('firstName', {
                required: 'Họ là bắt buộc!',
                minLength: {
                  value: 1,
                  message: 'Họ phải dài ít nhất 1 ký tự!',
                },
                maxLength: {
                  value: 50,
                  message: 'Họ không được vượt quá 50 ký tự',
                },
              })}
              error={errors.firstName ? errors.firstName?.message : ''}
            />
            <TextInput
              className="w-full py-5 italic border-none focus:bg-primary focus:outline-bg"
              placeholder="Tên"
              name="lastName"
              register={register('lastName', {
                required: 'Tên là bắt buộc!',
                minLength: {
                  value: 1,
                  message: 'Tên phải dài ít nhất 1 ký tự!',
                },
                maxLength: {
                  value: 50,
                  message: 'Tên không được vượt quá 50 ký tự',
                },
              })}
              error={errors.lastName ? errors.lastName?.message : ''}
            />

            <div className="w-full h-10 flex gap-5">
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center cursor-pointer"
                  htmlFor="male"
                >
                  <input
                    type="radio"
                    id="male"
                    value="male"
                    defaultChecked
                    {...register('gender')}
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 peer-checked:border-red transition-all"
                  />
                  <span className="absolute bg-red w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className="ml-2 text-slate-600 cursor-pointer text-sm"
                  htmlFor="male"
                >
                  Nam
                </label>
              </div>

              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center cursor-pointer"
                  htmlFor="female"
                >
                  <input
                    type="radio"
                    id="female"
                    value="female"
                    {...register('gender')}
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 peer-checked:border-red transition-all"
                  />
                  <span className="absolute bg-red w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className="ml-2 text-slate-600 cursor-pointer text-sm"
                  htmlFor="female"
                >
                  Nữ
                </label>
              </div>
            </div>

            <TextInput
              className="w-full py-5 italic border-none focus:bg-primary focus:outline-bg"
              placeholder="mm/dd/yyyy"
              name="dateOfBirth"
              register={register('dateOfBirth', {
                required: 'Ngày sinh là bắt buộc!',
                validate: (value) => {
                  const regex =
                    /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/;
                  return (
                    regex.test(value) ||
                    'Ngày sinh phải theo định dạng mm/dd/yyyy!'
                  );
                },
              })}
              error={errors.dateOfBirth ? errors.dateOfBirth?.message : ''}
            />
            <TextInput
              className="w-full py-5 italic border-none focus:bg-primary focus:outline-bg"
              placeholder="Email"
              name="email"
              register={register('email', {
                required: 'Email là bắt buộc!',
                validate: {
                  noSpaces: (value) =>
                    !/\s/.test(value) || 'Email không được chứa dấu cách!',
                  isEmail: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    'Email không đúng định dạng!',
                },
              })}
              error={errors.email ? errors.email?.message : ''}
            />
            <TextInput
              className="w-full py-5 italic border-none focus:bg-primary focus:outline-bg"
              placeholder="Mật khẩu"
              type={hide === 'hide' ? 'password' : 'text'}
              name="password"
              register={register('password', {
                required: 'Mật khẩu là bắt buộc!',
                minLength: {
                  value: 8,
                  message: 'Mật khẩu phải dài ít nhất 8 ký tự!',
                },
                maxLength: {
                  value: 64,
                  message: 'Mật khẩu không thể vượt quá 65 ký tự!',
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
                  message:
                    'Mật khẩu phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt!',
                },
                validate: {
                  noSpaces: (value) =>
                    !/\s/.test(value) || 'Mật khẩu không được chứa dấu cách!',
                },
              })}
              iconRight={
                hide === 'hide' ? (
                  <IoMdEyeOff
                    className="cursor-pointer"
                    onClick={() => setHide('show')}
                  />
                ) : (
                  <IoMdEye
                    className="cursor-pointer"
                    onClick={() => setHide('hide')}
                  />
                )
              }
              iconRightStyles="right-5"
              error={errors.password ? errors.password?.message : ''}
            />
          </div>
          <span className="text-sm text-ascent-2">
            This site is protected by reCAPTCHA and the{' '}
            <a
              target="_blank"
              href="https://policies.google.com/privacy"
              className="text-blue-600"
            >
              Google Privacy Policy
            </a>
            and{' '}
            <a
              target="_blank"
              href="https://policies.google.com/terms"
              className="text-blue-600"
            >
              Terms of Service
            </a>{' '}
            apply
          </span>
        </div>
        <div className="w-full gap-x-4 flex items-center">
          <div className="relative">
            <Button
              type="submit"
              disable={!isValid || isPending}
              title="Đăng ký"
              className="bg-red w-48 py-3 rounded-lg flex items-center justify-center text-sm text-white uppercase font-semibold"
            />
            {isPending && <Spin className="absolute right-20 top-3" />}
          </div>
          <div className="w-full flex flex-col">
            <span className="text-sm">
              Bạn đã có tài khoản?{' '}
              <Link to={'/account/login'} className="text-blue-600">
                Đăng nhập ngay
              </Link>
            </span>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
