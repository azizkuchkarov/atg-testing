import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import {yangisvg2} from '@/images/yangisvg2.svg'
import Image from 'next/image'
import yangiSVG from '@/components/KS1/yangiSVG.jsx'





export function Measuring() {
  return (
    <>
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="measuring1">
      Замерная зона
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">


     {/* <Image
          src={yangisvg2}
          alt="Image 1"
          className="w-full my-0 ease-in duration-300 hover:scale-125  "
        /> */}


<yangiSVG/>

      </div>
      </div>
         
    </>

      )
}
