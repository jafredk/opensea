import React from 'react';
import { useRouter } from 'next/router';

const Collection = () => {
    const router = useRouter()
    console.log(router.query)
    console.log(router.query.collectionid)
  return <div></div>
}

export default Collection;
