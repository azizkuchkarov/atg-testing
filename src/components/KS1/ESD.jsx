import { Heading } from '@/components/Heading'
import Image from 'next/image'




export function ESD() {
  return (
    <>
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="esd">
      АВАРИЙНЫЙ ОСТАНОВ (ESD)
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        </div>
        <p>
        В производственных процессах определенная часть автоматизированной приводной арматуры должна оснащаться системой аварийного останова ESD (Emergency Shut Down) для обеспечения защиты трубопровода и оборудования от возможных повреждений

Аварийный останов (ESD) представляет собой дистанционный сигнал аварийной команды, имеющий приоритет над любыми другими командами. В зависимости от типа работы арматуры, срабатывание аварийного останова может быть настроено на:

- экстренное открытие
- экстренное закрытие
- оставаться в текущем положении</p>
        <p>
        Кроме этого, для повышения эксплуатационной готовности привода в экстремальных условиях, можно настроить аварийный останов таким образом, чтобы превышение максимального момента или перегрева двигателя не учитывались.

При повышенных требованиях к уровню безопасности, команда аварийного останова может быть сертифицирована по спецификации SIL (уровня 2 или 3). Подробнее в разделе, посвященному данной спецификации SIL.

Если привод оборудован промышленной сетью, команда аварийного останова будет дополнительно доступна как по сети, так и на контрольном дисплее привода.

Функция аварийного останова (ESD) присутствует во встроенных модулях управления и в блоке INTELLI+® разработки BERNARD CONTROLS.
        </p>
      </div>
         
    </>

      )
}
