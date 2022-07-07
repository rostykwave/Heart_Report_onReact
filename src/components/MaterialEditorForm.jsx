import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {props => (
        <Form>
          <label>
            Title <Field name="title" type="text" />
          </label>
          <br />
          <label>
            Link <Field name="link" type="text" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Add material
          </button>
        </Form>
      )}
    </Formik>
  );
};
