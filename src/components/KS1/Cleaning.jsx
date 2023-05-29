import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import Image from 'next/image'
import contacts from '@/images/screenshots/contacts.png'

const cleaning1 = [
  {
    href: '/authentication',
    name: 'Authentication',
    description: 'Learn how to authenticate your API requests.',
  },
  {
    href: '/pagination',
    name: 'Pagination',
    description: 'Understand how to work with paginated responses.',
  },
  {
    href: '/errors',
    name: 'Errors',
    description:
      'Read about the different types of errors returned by the API.',
  },
  {
    href: '/webhooks',
    name: 'Webhooks',
    description:
      'Learn how to programmatically configure webhooks for your app.',
  },
]

export function Cleaning1() {
  return (
    <>
      <div className="my-16 xl:max-w-none">
        <Heading level={2} id="cleaning1">
          Cleaning zone
        </Heading>
        <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
          {cleaning1.map((cleaning) => (
            <div key={cleaning.href}>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {cleaning.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {cleaning.description}
              </p>
              <p className="mt-4">
                <Button href={cleaning.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facere explicabo illum rem unde doloremque minus modi ipsa voluptate
          nesciunt excepturi cupiditate at animi fugit, accusamus possimus rerum
          autem ad.
        </p>
        <Image alt='image' src={contacts} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facere explicabo illum rem unde doloremque minus modi ipsa voluptate
          nesciunt excepturi cupiditate at animi fugit, accusamus possimus rerum
          autem ad.
        </p>
      </div>
    </>
  )
}
