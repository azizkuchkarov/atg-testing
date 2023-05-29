import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/ks1#gpa',
    name: 'ГПА',
    description: 'Газоперекачивающие агрегаты',
  },
  {
    href: '/ks1#generator1',
    name: 'Газогенератор',
    description:
      `Caterpillar, Jenbaher, VOLVO, CUMMINS`,
  },
  {
    href: '/ks1#cleaning1',
    name: 'Зона очистки',
    description:
      'Системы очистки технологического газа на КС',
  },
  {
    href: '/ks1#avo1',
    name: 'АВО',
    description: 'Аппараты воздушного охлаждения',
  },
  {
    href: '/ks1#measuring1',
    name: 'Замерная зона ',
    description: 'ГАЗОИЗМЕРИТЕЛЬНАЯ СТАНЦИЯ "УЗЕЛ ЗАМЕРА РАСХОДА ГАЗА НА ГРАНИЦЕ КАЗАХСТАНА И УЗБЕКИСТАНА',
  },
  {
    href: '/ks1#esd',
    name: 'ESD',
    description: 'Аварийный останов',
  },
  {
    href: '/ks1#firefighting',
    name: 'ПОЖАРОТУШЕНИЕ КОМПРЕССОРНЫХ СТАНЦИЙ ',
    description: 'Автоматическая установка пожаротушения (АУПТ)',
  },
  {
    href: '/ks1#bptg',
    name: 'БПТГ',
    description: 'Блоки подготовки топливного газа ',
  },
  {
    href: '/ks1#ksb',
    name: 'КСВ',
    description: 'Компрессор сжатого воздуха ',
  },
  {
    href: '/ks1#sewerage',
    name: 'Канализация',
    description: 'Системы канализации ',
  },



  
//   { title: 'Measuring zone', id: 'measuring1' },
//   { title: 'KSB', id: 'ksb' },
//   { title: 'BPTG', id: 'bptg' },
//   { title: 'System ESD', id: 'esd' },
//   { title: 'Firefighting', id: 'firefighting' },
//   { title: 'Sewerage', id: 'sewerage' },


]



export function Guides() {
  return (
    <>
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
      Оборудование
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="uppercase text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="uppercase mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Подробнее
              </Button>
            </p>
          </div>
        ))}
      </div>
      </div>
      {/*  */}
         
    </>

      )
}
