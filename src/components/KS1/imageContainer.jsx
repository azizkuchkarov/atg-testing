import React from 'react';
import Image from 'next/image'

import GCS1 from '@/images/GCS/1921.png'
import GCS2 from '@/images/GCS/1922.png'
import GCS3 from '@/images/GCS/1923.png'
import GCS4 from '@/images/GCS/1924.png'
import GCS5 from '@/images/GCS/1925.png'
import GCS6 from '@/images/GCS/1926.png'

export function ImageContainer () {
  return (

    
<>
  <div className="flex flex-col ">
    <div className="flex justify-center">
      <a href="https://youtu.be/pfnakFRsb-Y" target="_blank" rel="noopener noreferrer">
        <Image
          src={GCS1}
          alt="Image 1"
          className="w-full my-0 ease-in duration-300 hover:scale-125  "
        />
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <Image
          src={GCS2}
          alt="Image 2"
          className="w-full my-0 ease-in duration-300 hover:scale-125"
        />
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <Image
          src={GCS3}
          alt="Image 3"
          className="w-full my-0 ease-in duration-300 hover:scale-125"
        />
      </a>
    </div>
    <div className="flex justify-center">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <Image
          src={GCS4}
          alt="Image 4"
          className="w-full my-0 ease-in duration-300 hover:scale-125"
        />
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <Image
          src={GCS5}
          alt="Image 5"
          className="w-full my-0 ease-in duration-300 hover:scale-125"
        />
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <Image
          src={GCS6}
          alt="Image 6"
          className="w-full my-0 ease-in duration-300 hover:scale-125"
        />
      </a>
    </div>
  </div>
</>


        
  );
};
