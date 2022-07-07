import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
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
