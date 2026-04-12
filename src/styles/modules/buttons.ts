// Button classes
export const ButtonClasses = {
  button:
    'inline-flex w-fit-content md:w-auto items-center justify-between md:justify-center ' +
    'gap-6 md:px-16 px-8 py-4 h-12 cursor-pointer' +
    'text-sm uppercase tracking-narrowest text-white transition duration-300 ' +
    'focus-visible:outline-none whitespace-nowrap ' +
    'bg-black hover:bg-secondary-800 focus:bg-secondary-800 ' +
    'border-1 border-solid border-secondary-600 ' +
    'disabled:cursor-not-allowed disabled:border-secondary-200 disabled:bg-secondary-200 disabled:shadow-none ',

  buttonText: 'flex text-white text-sm md:text-lg mt-1',
  buttonIcon: 'flex md:w-8 md:h-8 w-6 h-6',
} as const;
