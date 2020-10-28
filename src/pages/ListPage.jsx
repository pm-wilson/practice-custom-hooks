import React, { useState } from 'react';
import CharacterList from '../components/characters/CharacterList';

const ListPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <button
        onClick={() => setPage(page => page - 1)} disabled={page <= 1} >&lt;</button>
      <button onClick={() => setPage(page => page + 1)}>&gt;</button>
      <CharacterList page={page} />
    </div>
  );
};

export default ListPage;
