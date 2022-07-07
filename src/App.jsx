import { MaterialEditorForm } from 'components/MaterialEditorForm';
import { useState } from 'react';
import * as API from 'services/api';

export const App = () => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMaterial = async values => {
    try {
      setIsLoading(true);
      const material = await API.addMaterial(values);
      console.log(material);
      setMaterials(state => [material, ...state]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MaterialEditorForm onSubmit={addMaterial} isSubmitting={isLoading} />
      {isLoading && <div>Loading...</div>}
    </>
  );
};
