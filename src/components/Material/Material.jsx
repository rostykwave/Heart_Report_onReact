export const Material = ({ item, onDelete, onUpdate }) => {
  return (
    <>
      <h3>Title: {item.title}</h3>
      <a href="3">Link: {item.link}</a>
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
      <button
        type="button"
        onClick={() => onUpdate({ id: item.id, title: Date.now() })}
      >
        Update
      </button>
    </>
  );
};
