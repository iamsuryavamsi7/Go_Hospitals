import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function HeadlessUIDialog1({ImageURL, imgSrc, imgDesc}) {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const proceedPayment = () => {

    close()

    window.location.href = `${ImageURL}`

  }

  return (
    <>

		<a
			onClick={open}
            className='cursor-pointer'
		>
			<img 
                src={`${imgSrc}`}
            />
		</a>

		<Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div className="flex min-h-full items-center justify-center p-4">
				<DialogPanel
				transition
				className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
				>
				<DialogTitle as="h3" className="text-base/7 font-medium text-white">
				UPI Payment Initialized
				</DialogTitle>
				<p className="mt-2 text-sm/6 text-white/50">
				You are being redirected to your UPI payment app. Please complete the payment by entering the required amount. Afterward, kindly share the payment confirmation on WhatsApp.
				</p>
				<div className="mt-4">
					<Button
					className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
					onClick={proceedPayment}
					>
					Okay, Got it !
					</Button>
				</div>
				</DialogPanel>
			</div>
			</div>
		</Dialog>
		</>
  )
}
