// Typography classes
export const TypographyClasses = {
  h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mb-16',
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mb-16',
  h3: 'text-sm md:text-lg lg:text-2xl leading-snug tracking-narrowest text-primary-200 mb-8',
  h4: 'text-sm md:text-lg lg:text-2xl leading-snug uppercase tracking-narrowest text-primary-200 mb-16',
  h5: 'text-xs md:text-md lg:text-xl leading-snug mb-8',
  h6: 'text-xs md:text-xs lg:text-sm leading-snug mb-4 uppercase tracking-narrowest',
  body: 'text-base text-gray-900 dark:text-gray-100 leading-relaxed',
  bodySmall: 'text-sm text-gray-900 dark:text-gray-100 leading-relaxed',
  bodyLarge: 'text-lg text-gray-900 dark:text-gray-100 leading-relaxed',
  caption: 'text-xs text-gray-900 dark:text-gray-100',
  link: 'text-blue-600 text-gray-900 dark:text-blue-100 hover:text-blue-100 underline',
  mono: 'font-[family-name:var(--font-geist-mono)]',
} as const;

// Button classes
export const ButtonClasses = {
  button:
    'bg-secondary-600 border-b-6 border-solid border-secondary-800 border-b-6 shadow-base' +
    'hover:bg-black hover:border-white hover:border-b-6 hover:border-l-6 ' +
    'flex flex-row gap-6 items-center text-primary-200 px-20 py-8 h-13 mt-24 pointer-events-auto uppercase tracking-narrowest',
  buttonText: 'flex text-white text-2xl',
  buttonIcon: 'flex w-8 h-8',
} as const;

// Card Styles
export const CardStyles = {
  card:
    'border-1 border-solid border-neutral-200 px-16 py-16 h-full ' +
    'hover:border-secondary-400' +
    'transition-shadow duration-300 shadow-hover',
  cardSmall:
    'border-1 border-solid border-neutral-200 p-6 md:p-12 h-full ' +
    'hover:border-secondary-400 ' +
    'transition-shadow duration-300 shadow-hover',
  cardGrid: 'border-1 border-solid border-neutral-200 h-full ' + '' + '',
  title: 'min-w-max bg-secondary-800 w-full px-10',
} as const;

// Navigation menu Styles
export const NavigationStyles = {
  root: 'min-w-max bg-secondary-800 w-full px-10',
  list: 'relative flex items-left',
  item: 'hover:border-primary-200',
  link: 'flex py-4 px-10 ' + 'hover:bg-secondary-200 hover:text-primary-200 ' + 'active:bg-cyan-100 active:text-cyan-900',
  title: '',
} as const;

// Accordion menu Styles
export const AccordionStyles = {
  root: 'w-full',
  item: 'border-b-2 border-solid border-neutral-200 h-full last:border-b-0 ' + '' + 'transition duration-300',
  trigger:
    'group ' +
    'flex w-full items-baseline justify-between py-12 px-12 ' +
    'text-sm text-left sm:text-md md:text-lg lg:text-lg leading-snug tracking-narrowest uppercase ' +
    'focus-visible:z-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary-600',
  panel:
    'h-[var(--accordion-panel-height)] overflow-hidden bg-black border-t-1 border-white ' +
    'font-sans text-white text-xl leading-tight tracking-wide ' +
    'transition-[height] ease-in-out duration-500 data-[ending-style]:h-0 data-[starting-style]:h-0 ',
  title: '',
  panelContent: 'p-8',
} as const;
