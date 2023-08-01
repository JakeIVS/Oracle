import { Field, Form, Formik } from 'formik';
import React from 'react';

function NewCharacter(user) {
  return (
    <Formik>
      <Form>
        <h1>New Character</h1>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage
          name="name"
          render={msg => (
            <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
          )}
        />
        <label htmlFor="race">Race</label>
        <Field name="race" type="text" />
        <ErrorMessage
          name="firstName"
          render={msg => (
            <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
          )}
        />
        <label htmlFor="gender">Gender</label>

        <label htmlFor="character_class">Class</label>
        <label htmlFor="level">Level</label>
        <Field name="level" type="number" />
        <ErrorMessage
          name="firstName"
          render={msg => (
            <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
          )}
        />
      </Form>
    </Formik>
  );
}
