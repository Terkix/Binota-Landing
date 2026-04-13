import { Accordion } from '@base-ui-components/react/accordion';
import type * as React from 'react';
import { AccordionStyles } from '@/app/styles';

export default function FeaturesAccordion() {
  return (
    <Accordion.Root className={AccordionStyles.root}>
      <Accordion.Item className={AccordionStyles.item}>
        <Accordion.Header>
          <Accordion.Trigger className={AccordionStyles.trigger}>
            Built for Resilience
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className={AccordionStyles.panel}>
          <div className={AccordionStyles.panelContent}>
            STABLE is backed by more collateral than it issues, eliminating the risk of undercollateralization
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={AccordionStyles.item}>
        <Accordion.Header>
          <Accordion.Trigger className={AccordionStyles.trigger}>
            Multiple Assets, One Stable Foundation
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className={AccordionStyles.panel}>
          <div className={AccordionStyles.panelContent}>
            Utilize BNB as yield-bearing collateral
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={AccordionStyles.item}>
        <Accordion.Header>
          <Accordion.Trigger className={AccordionStyles.trigger}>
            Custom Rates for Custom Strategies
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className={AccordionStyles.panel}>
          <div className={AccordionStyles.panelContent}>
            Borrowers set interest rates, enabling flexible capital strategies and custom risk profiles.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={AccordionStyles.item}>
        <Accordion.Header>
          <Accordion.Trigger className={AccordionStyles.trigger}>
            Customize and Isolate
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className={AccordionStyles.panel}>
          <div className={AccordionStyles.panelContent}>
            Open and manage separate troves across assets, giving you full control over each position.
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}

function PlusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 12 12" fill="currentcolor" {...props}>
      <title>Plus Icon</title>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}
