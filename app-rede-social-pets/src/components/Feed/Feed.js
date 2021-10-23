import React from 'react';
import styles from './Feed.module.css';
import useFetch from '../../Hooks/useFetch';
import { PUBLICATIONS_GET } from '../../api';
import PublicationsFeed from './PublicationsFeed/PublicationsFeed';
import Error from '../Errors/Error';
import Loading from '../Loading/Loading';

const Feed = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPublications() {
      const { url, options } = PUBLICATIONS_GET();
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPublications();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className={`${styles.feed} container`}>
        {data.map((publication) => (
          <PublicationsFeed key={publication.id} publication={publication} />
        ))}
      </section>
    );
  else return null;
};

export default Feed;
