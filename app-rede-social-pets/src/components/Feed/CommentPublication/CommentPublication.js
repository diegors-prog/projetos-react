import React from 'react';
import styles from './CommentPublication.module.css';
import CommentForm from '../CommentForm/CommentForm';
import { style } from 'dom-helpers';

const CommentPublication = ({ id, commentss }) => {
  const [comments, setComments] = React.useState(() => commentss);
  /*const commentsSection = React.useRef(null);*/

  /*React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);*/

  return (
    <>
      {comments.length == 0 ? (
        <div>
          <p>Sem comentários</p>
        </div>
      ) : (
        <div /*ref={commentsSection}*/ className={styles.comments}>
          {comments.map((item, index) => (
            <div className={styles.comment} key={index}>
              <div className={styles.profile}>
                <div className={styles.avatar}>
                  <span>{item.comment_author.slice(0, 1).toUpperCase()}</span>
                </div>
                <b>{item.comment_author}</b>
              </div>
              <p>{item.comment_content}</p>
            </div>
          ))}
        </div>
      )}
      <CommentForm id={id} setComments={setComments} />
    </>
  );
};

export default CommentPublication;

/*{data && data.comments.length == 0 ? (
                    <div key={data.photo.id}>
                      <p>Sem comentários</p>
                    </div>
                  ) : (
                    <CommentPublication
                      key={data.photo.id}
                      id={data.photo.id}
                      comments={data.comments}
                    />
                  )}
                  <CommentForm id={data.comment_post_ID} /> */
