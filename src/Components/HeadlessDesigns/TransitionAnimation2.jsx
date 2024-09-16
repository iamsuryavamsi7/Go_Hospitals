import { Button, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

export default function TransitionAnimation2({imgSrc, imgDesc, ImageURL}) {
  let [isShowing, setIsShowing] = useState(true)

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="size-[6.25rem]">
        <Transition show={isShowing}>
          <div
            onClick={() => {
              setIsShowing(false)
              setTimeout(() => setIsShowing(true), 500)
            }}
            className={clsx(
              'size-full rounded-xl shadow-lg transition duration-400',
              'data-[closed]:scale-50 data-[closed]:rotate-[-120deg] data-[closed]:opacity-0',
              'data-[leave]:duration-200 data-[leave]:ease-in-out',
              'data-[leave]:data-[closed]:scale-95 data-[leave]:data-[closed]:rotate-[0deg]'
            )}
          >

           <a
            href={`${ImageURL}`}
           >

                <img 
                    src={`${imgSrc}`}
                />

           </a>

          </div>
        </Transition>
      </div>

      <Button
        onClick={() => {
          setIsShowing(false)
          setTimeout(() => setIsShowing(true), 500)
        }}
        className="mt-5 flex items-center gap-2 rounded-full bg-white/10 py-1 px-3 text-sm/6 font-semibold text-white transition data-[hover]:scale-105 data-[hover]:bg-white/15"
      >
        <a
            href={`${ImageURL}`}
        >

            {imgDesc}

        </a>
      </Button>
    </div>
  )
}
