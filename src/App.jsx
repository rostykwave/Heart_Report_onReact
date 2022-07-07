import { MaterialEditorForm } from 'components/MaterialEditorForm/MaterialEditorForm';
import { MaterialList } from 'components/MaterialList/MaterialList';
import { useEffect } from 'react';
import { useState } from 'react';
import * as API from 'services/api';

export const App = () => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const material = await API.getMaterial();
        console.log(material);
        setMaterials(material);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }

    getData();
  }, []);

  const addMaterial = async values => {
    try {
      setIsLoading(true);
      const material = await API.addMaterial(values);
      console.log(material);
      setMaterials(state => [material, ...state]);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const deleteMaterial = async id => {
    try {
      setIsLoading(true);
      const deleted = await API.deleteMaterial(id);
      console.log(deleted);
      setMaterials(state => state.filter(item => item.id !== deleted.id));
      // setMaterials(state => [material, ...state]);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const updateMaterial = async fields => {
    console.log('updateMaterial');
    try {
      // await API.updateMaterial({ id: 3, title: 'Hello from the other side' });
      const updatedMaterial = await API.updateMaterial(fields);
      console.log(updatedMaterial);
      console.log(Date.now());
      setMaterials(state =>
        state.map(material =>
          material.id === fields.id ? updatedMaterial : material
        )
      );
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={updateMaterial}>Update id 3</button>
      {error && <p>Ooops, somethings go wrong:(</p>}
      <MaterialEditorForm onSubmit={addMaterial} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <MaterialList
          items={materials}
          onDelete={deleteMaterial}
          onUpdate={updateMaterial}
        />
      )}
      {/* {isLoading && <div>Loading...</div>}
      <Materials items={materials} /> */}
    </>
  );
};
