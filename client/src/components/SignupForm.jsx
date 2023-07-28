import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

function SignupForm() {
  const field = '';
  const errorField = '';

  return (
    <div className="h-full bg-gradient-to-t from-primary to-secondary">
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string()
            .email('Invalid email address.')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Password must be 6-20 characters long')
            .max(20, 'Password must be 6-20 characters long')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col place-content-center justify-center px-[30%] pt-10">
          <h1 className="pb-6 text-center font-serif text-2xl font-semibold text-white">
            {' '}
            Sign Up
          </h1>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage
            name="firstName"
            render={msg => (
              <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
            )}
          />
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage
            name="lastName"
            render={msg => (
              <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
            )}
          />
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage
            name="email"
            render={msg => (
              <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
            )}
          />
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage
            name="password"
            render={msg => (
              <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
            )}
          />
        </Form>
      </Formik>
    </div>
  );
}

export default SignupForm;
