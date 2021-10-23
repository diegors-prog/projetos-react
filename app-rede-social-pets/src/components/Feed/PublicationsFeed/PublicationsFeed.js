import React from 'react';
import styles from './PublicationsFeed.module.css';
import { ReactComponent as Views } from '../../../Assets/ionic-md-thumbs-up.svg';
import { ReactComponent as Comments } from '../../../Assets/awesome-comment-dots.svg';
import { UserContext } from '../../../UserContext';
import PublicationDelete from './PublicationDelete/PublicationDelete';

const PublicationsFeed = ({ publication }) => {
  const user = React.useContext(UserContext);
  return (
    <div className={styles.publication}>
      <div className={styles.profile}>
        <span>{publication.author.substr(0, 1).toUpperCase()}</span>
        {user.data && user.data.username === publication.author ? (
          <PublicationDelete id={publication.id} />
        ) : (
          <p>{publication.author}</p>
        )}
      </div>
      <img src={publication.src} alt="imagem html" />
      <div className={styles.description}>
        <div className={styles.viewComment}>
          <h2>{publication.title}</h2>
          <div className={styles.icons}>
            <Views className={styles.svg} />
            <Comments className={styles.svg} />
          </div>
        </div>
        <span>{publication.tipo_animal}</span>
        <p>{publication.description}</p>
      </div>
    </div>
  );
};

export default PublicationsFeed;
