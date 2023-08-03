import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  useField,
  yupToFormErrors,
} from 'formik';
import React from 'react';
import * as Yup from 'yup';

function NewCharacter(user) {
  const fieldFormat = 'rounded bg-gradient-to-t from-slate-400 to-white';

  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="flex flex-col">
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} className={fieldFormat} />
        {meta.touched && meta.error ? (
          <div className="pb-2 pt-0 text-xs text-red-600">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="h-full w-full bg-neutral-800 px-16">
      <Formik
        initialValues={{
          name: '',
          image_url: '',
          race: '',
          gender: 'M',
          level: 1,
          character_class: '',
          strength_score: 10,
          dexterity_score: 10,
          constitution_score: 10,
          intelligence_score: 10,
          wisdom_score: 10,
          charisma_score: 10,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          race: Yup.string().required('Required'),
          gender: Yup.string()
            .required('Required')
            .oneOf(['M', 'F'], 'please select valid gender'),
          level: Yup.string()
            .required('Required')
            .oneOf(
              [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
              ],
              'Level must be between 1 and 20',
            ),
          character_class: Yup.string()
            .required('Required')
            .oneOf(
              [
                'barbarian',
                'bard',
                'cleric',
                'druid',
                'fighter',
                'monk',
                'paladin',
                'ranger',
                'rogue',
                'sorcerer',
                'warlock',
                'wizard',
              ],
              'Select valid Class for Class List',
            ),
          strength_score: Yup.string()
            .required('Required')
            .oneOf(
              [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
              ],
              'Score must be between 1 and 20',
            ),
          dexterity_score: Yup.string()
            .required('Required')
            .oneOf(
              [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
              ],
              'Score must be between 1 and 20',
            ),
          constitution_score: Yup.string()
            .required('Required')
            .oneOf(
              [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
              ],
              'Score must be between 1 and 20',
            ),
          intelligence_score: Yup.string()
            .required('Required')
            .oneOf(
              [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
              ],
              'Score must be between 1 and 20',
            ),
          wisdom_score: Yup.string()
            .required('Required')
            .oneOf(
              [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
              ],
              'Score must be between 1 and 20',
            ),
          charisma_score: Yup.string()
            .required('Required')
            .oneOf(
              [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
              ],
              'Score must be between 1 and 20',
            ),
        })}
        onSubmit={values => console.log(values, user.id)}
      >
        <Form className=" grid-col-5 grid aspect-video gap-5">
          <h1 className="col-span-5 col-start-1 text-center font-serif text-2xl font-bold text-white">
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
          <div className="col-start-5 flex flex-col">
            <label htmlFor="image_url" className="row-start-2">
              Image URL
            </label>
            <Field name="image_url" type="text" className={fieldFormat} />
            <ErrorMessage
              name="image_url"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <div className="col-span-3 col-start-1 flex flex-col">
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
            <option value="M">M</option>
            <option value="F">F</option>
          </MySelect>

          <div className="col-start-5 flex flex-col">
            <label htmlFor="level">Level</label>
            <Field name="level" type="number" className={fieldFormat} />
            <ErrorMessage
              name="level"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <div className="col-span-2 col-start-1">
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
          <div className="col-start-2 flex flex-col">
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
          <div className="col-start-3 flex flex-col">
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
          <div className="col-start-4 flex flex-col">
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
          <div className="col-start-2 flex flex-col">
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
          <div className="col-start-3 flex flex-col">
            <label htmlFor="wisdom_score">WIS</label>
            <Field name="wisdom_score" type="number" className={fieldFormat} />
            <ErrorMessage
              name="wisdom_score"
              render={msg => (
                <div className="pb-2 pt-0 text-xs text-red-600">{msg}</div>
              )}
            />
          </div>
          <div className="col-start-4 flex flex-col">
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
          <button
            type="submit"
            className="col-start-5 row-start-7 mt-4 from-secondary to-transparent p-1 text-base font-semibold text-white outline transition-all hover:bg-gradient-to-t"
          >
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default NewCharacter;
