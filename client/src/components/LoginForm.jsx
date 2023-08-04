import { data } from 'autoprefixer';
import { Formik, Field, Form, ErrorMessage, useField, useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function LoginForm({ user, setUser }) {
  const navigate = useNavigate();
  const [passShow, setPassShow] = useState(false);
  const field = 'rounded bg-gradient-to-t from-slate-400 to-white';
  const errorField =
    'rounded bg-gradient-to-t from-red-300 to-red-200 outline-double outline-red-600';

  return (
    <div className="flex h-full w-full place-content-center bg-gradient-to-t from-primary to-secondary pt-14">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address.')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Password must be 6-20 characters long')
            .max(20, 'Password must be 6-20 characters long')
            .required('Required'),
        })}
        onSubmit={values => {
          fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then(r => {
              if (r.ok) {
                return r.json();
              }
              throw new Error('Something went wrong');
            })
            .then(data => {
              setUser(data);
              navigate('/', { replace: false });
            });
        }}
      >
        <div className=" h-fit bg-slate-700 bg-opacity-70 p-5">
          <Form className="col-start-2 flex w-72 flex-col ">
            <h1 className="pb-6 text-center font-serif text-2xl font-semibold text-white">
              Sign In
            </h1>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className={field} />
            <ErrorMessage
              name="email"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type={passShow ? 'text' : 'password'}
              className={field}
            />
            <ErrorMessage
              name="password"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
            <p
              className="cursor-pointer text-xs text-white hover:underline"
              onClick={() => setPassShow(!passShow)}
            >
              Show
            </p>

            <div className="flex flex-row justify-between">
              <button
                type="submit"
                className="mt-4 w-1/3 from-secondary to-transparent p-1 text-base font-semibold text-white outline transition-all hover:bg-gradient-to-t"
              >
                Sign In
              </button>
              <a className="mt-4 text-xs text-white hover:underline">
                Forgot Password?
              </a>
            </div>
          </Form>
          <p className="mt-2 text-xs text-white">
            Don't have an account yet?{' '}
            <a className="hover:underline" href="/signup">
              Sign up
            </a>
            .
          </p>
        </div>
      </Formik>
    </div>
  );
}

export default LoginForm;
