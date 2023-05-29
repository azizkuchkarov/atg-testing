import { Heading } from '@/components/Heading'
import Image from 'next/image'
import contacts from '@/images/screenshots/contacts.png'




export function KSB() {
  return (
    <>
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="ksb">
        KSB
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
      <p>Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ullam.</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde doloremque minus modi ipsa voluptate nesciunt excepturi cupiditate at animi fugit, accusamus possimus rerum autem ad.
        </p>
         <Image alt='image' src={contacts}  />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde doloremque minus modi ipsa voluptate nesciunt excepturi cupiditate at animi fugit, accusamus possimus rerum autem ad.
        </p>
      </div>
         
    </>

      )
}
