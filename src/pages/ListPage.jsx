import React, { useState } from 'react';
import CharacterList from '../components/characters/CharacterList';
import styles from './styles.css';

const ListPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <button
        onClick={() => setPage(page => page - 1)} disabled={page <= 1} >&lt;</button>
      <button onClick={() => setPage(page => page + 1)} disabled={page >= 47} >&gt;</button>
      <div className={styles.namelistcontainer}>
        <CharacterList page={page} />
      </div>
    </div>
  );
};

export default ListPage;
