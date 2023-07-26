import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function SignupForm() {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string()
          .email('Invalid email address.')
          .required('required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    ></Formik>
  );
}
