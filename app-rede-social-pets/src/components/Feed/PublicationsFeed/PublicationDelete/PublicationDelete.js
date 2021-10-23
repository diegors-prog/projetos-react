import React from 'react';
import { PUBLICATION_DELETE } from '../../../../api';
import useFetch from '../../../../Hooks/useFetch';
import styles from './PublicationDelete.module.css';

const PublicationDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    const { url, options } = PUBLICATION_DELETE(id);
    const { response } = await request(url, options);
    if (response.ok) window.location.reload();
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PublicationDelete;
