import { Formik, Field, Form, ErrorMessage, useField, useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function SignupForm({ user, setUser }) {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [passShow, setPassShow] = useState(false);
  const field = 'rounded bg-gradient-to-t from-slate-400 to-white';
  const errorField =
    'rounded bg-gradient-to-t from-red-300 to-red-200 outline-double outline-red-600';

  return (
    <div className="flex h-full w-full place-content-center bg-gradient-to-t from-primary to-secondary pt-14">
      <Formik
        // first_name and last_name variables are named using snake case opposed to camel case, in order to properly post to the database
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          first_name: Yup.string().required('Required'),
          last_name: Yup.string().required('Required'),
          email: Yup.string()
            .email('Invalid email address.')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Password must be 6-20 characters long')
            .max(20, 'Password must be 6-20 characters long')
            .required('Required'),
        })}
        onSubmit={values => {
          console.log(values);
          fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then(r => {
              if (r.ok) {
                setIsError(false);
                return r.json();
              }
              throw new Error('Account name already taken');
            })
            .then(data => {
              setUser(data);
              console.log(data);
              navigate('/', { replace: false });
            });
        }}
      >
        <div className=" h-fit bg-slate-700 bg-opacity-70 p-5">
          <Form className=" col-start-2 flex w-72 flex-col">
            <h1 className="pb-6 text-center font-serif text-2xl font-semibold text-white">
              {' '}
              Sign Up
            </h1>
            <label htmlFor="first_name">First Name</label>
            <Field name="first_name" type="text" className={field} />
            <ErrorMessage
              name="first_name"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
            <label htmlFor="last_name">Last Name</label>
            <Field name="last_name" type="text" className={field} />
            <ErrorMessage
              name="last_name"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
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
                <div className="pb-2 text-xs text-red-600">{msg}</div>
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
                Submit
              </button>

              <div className="mt-4 text-xs text-white">
                <p>Already have an account?</p>
                <a href="/login" className="hover:underline">
                  Sign In.
                </a>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
}

export default SignupForm;
