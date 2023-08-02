import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import React from 'react';

function NewCharacter(user) {
  const fieldFormat = 'rounded bg-gradient-to-t from-slate-400 to-white';

  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="flex flex-col">
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} className={fieldFormat} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="h-full w-full bg-neutral-800">
      <Formik
        initialValues={{
          name: '',
          race: '',
          gender: 'M',
          level: 1,
          strength_score: 10,
          dexterity_score: 10,
          constitution_score: 10,
          intelligence_score: 10,
          wisdom_score: 10,
          charisma_score: 10,
        }}
      >
        <Form className=" grid-col-4 mx-32 grid gap-5">
          <h1 className="col-span-4 col-start-1 text-center font-serif text-2xl font-bold text-white">
            New Character
          </h1>
          <div className="col-span-4 col-start-1 flex flex-col">
            <label htmlFor="name" className="row-start-2">
              Name
            </label>
            <Field name="name" type="text" className={fieldFormat} />
            <ErrorMessage
              name="name"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <div className="col-span-2 col-start-1 flex flex-col">
            <label htmlFor="race">Race</label>
            <Field name="race" type="text" className={fieldFormat} />
            <ErrorMessage
              name="race"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <MySelect label="Gender" name="gender">
            <option value="m">M</option>
            <option value="f">F</option>
          </MySelect>

          <div className="col-span-1 col-start-4 flex flex-col">
            <label htmlFor="level">Level</label>
            <Field name="level" type="number" className={fieldFormat} />
            <ErrorMessage
              name="level"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <div className="col-span-3 col-start-1">
            <MySelect label="Class" name="character_class">
              <option value="">Select a Class</option>
              <option value="barbarian">Barbarian</option>
              <option value="bard">Bard</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="fighter">Fighter</option>
              <option value="monk">Monk</option>
              <option value="paladin">Paladin</option>
              <option value="ranger">Ranger</option>
              <option value="rogue">Rogue</option>
              <option value="sorcerer">Sorcerer</option>
              <option value="warlock">Warlock</option>
              <option value="wizard">Wizard</option>
            </MySelect>
          </div>
          <div className="col-start-1 flex flex-col">
            <label htmlFor="strength_score">STR</label>
            <Field
              name="strength_score"
              type="number"
              className={fieldFormat}
            />
            <ErrorMessage
              name="strength_score"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <div className="col-start-2 flex flex-col">
            <label htmlFor="dexterity_score">DEX</label>
            <Field
              name="dexterity_score"
              type="number"
              className={fieldFormat}
            />
            <ErrorMessage
              name="dexterity_score"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <div className="col-start-3 flex flex-col">
            <label htmlFor="constitution_score">CON</label>
            <Field
              name="constitution_score"
              type="number"
              className={fieldFormat}
            />
            <ErrorMessage
              name="constitution_score"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <div className="col-start-1 flex flex-col">
            <label htmlFor="intelligence_score">INT</label>
            <Field
              name="intelligence_score"
              type="number"
              className={fieldFormat}
            />
            <ErrorMessage
              name="intelligence_score"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <div className="col-start-2 flex flex-col">
            <label htmlFor="wisdom_score">WIS</label>
            <Field name="wisdom_score" type="number" className={fieldFormat} />
            <ErrorMessage
              name="wisdom_score"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <div className="col-start-3 flex flex-col">
            <label htmlFor="charisma_score">CHA</label>
            <Field
              name="charisma_score"
              type="number"
              className={fieldFormat}
            />
            <ErrorMessage
              name="charisma_score"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default NewCharacter;
