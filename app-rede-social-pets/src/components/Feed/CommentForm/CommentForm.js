import React from 'react';
import styles from './CommentForm.module.css';
import useFetch from '../../../Hooks/useFetch';
import { COMMENT_POST } from '../../../api';
import Error from '../../Errors/Error';

const CommentForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <div className={styles.formBody}>
      <form className={styles.formComments} onSubmit={handleSubmit}>
        <textarea
          name="comment"
          id="comment"
          placeholder="Comente..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <button>Enviar</button>
        <Error error={error} />
      </form>
    </div>
  );
};

export default CommentForm;
