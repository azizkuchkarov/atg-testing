import GCompressor from '@/images/GCompressor/GCompressor.png'
import Image from 'next/image'

export function Compressor1() {
  return (
    <Image className='w-full my-0'  alt='GCOmpressor' src={GCompressor}  />
    // <Image src={GCompressor} layout="responsive" />
  )
}
