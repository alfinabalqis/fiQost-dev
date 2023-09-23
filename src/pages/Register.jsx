import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import useRegister from '@/hooks/useRegister';

export default function Register() {
  const {
    onSubmit, register, randomMath, visible, setVisible, state,
  } = useRegister();

  return (
    <section className="flex items-center justify-center overflow-hidden xl:mt-16 xl:p-10 xl:h-full xl:w-full">
      <div className="flex flex-col gap-4">
        {state?.error && <span className="pl-4 text-red-600 border-l-4 border-red-600 py-2.5 capitalize bg-red-50">{state?.error}</span>}
        <div className="bg-slate-50 shadow-lg text-font-colors xl:w-[700px] xl:h-[550px] p-10 rounded-lg">
          <div className="flex flex-col gap-10 xl:mt-5">
            <h1 className="m-0 text-2xl font-semibold uppercase">sign up</h1>

            <form className="flex flex-col gap-6" onSubmit={onSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  type="number"
                  className="p-3 text-sm font-medium duration-300 border rounded-md outline-none bg-slate-200 placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
                  disabled
                  placeholder="room number"
                  value={randomMath}
                  {...register('roomNumber')}
                />
                <input
                  type="text"
                  className="p-3 text-sm font-medium duration-300 border rounded-md outline-none placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
                  placeholder="username"
                  {...register('username')}
                />

                <div className="relative">
                  <input
                    type={visible ? 'text' : 'password'}
                    className="w-full p-3 text-sm font-medium duration-300 border rounded-md outline-none placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
                    placeholder="password"
                    {...register('password')}
                  />
                  <button type="button" onClick={() => setVisible(!visible)} className="absolute right-4 top-3">
                    {
                    visible
                      ? <AiOutlineEyeInvisible className="xl:h-6 xl:w-6 text-slate-400" />
                      : <AiOutlineEye className="xl:h-6 xl:w-6 text-slate-400" />
                  }
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={visible ? 'text' : 'password'}
                    className="w-full p-3 text-sm font-medium duration-300 border rounded-md outline-none placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
                    placeholder="confirm password"
                    {...register('confirmPassword')}
                  />
                  <button type="button" onClick={() => setVisible(!visible)} className="absolute right-4 top-3">
                    {
                    visible
                      ? <AiOutlineEyeInvisible className="xl:h-6 xl:w-6 text-slate-400" />
                      : <AiOutlineEye className="xl:h-6 xl:w-6 text-slate-400" />
                  }
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button type="submit" className="p-3 text-base font-semibold text-white uppercase duration-500 rounded-md bg-main-color hover:bg-thirdy-color hover:text-font-colors">
                  {state?.loading ? '...Loading' : 'Sign Up'}
                </button>

                <Link to="/">
                  have account?
                  {' '}
                  <b className="font-semibold text-main-color">sign now</b>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
