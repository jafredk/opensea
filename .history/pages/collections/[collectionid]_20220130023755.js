import React from 'react';
import { useRouter } from 'next/router';

const Collection = () => {
    const router = useRouter()
    console.log(router.query)
    console.log(router.query.collectionId)
  return <h2>{router.query.collectionid}</h2>
}

export default Collection;
