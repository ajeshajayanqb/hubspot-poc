'use client';

import { useEffect } from 'react';

type FormTargetProps = {
  target: string;
};

const FormTarget = ({ target }: FormTargetProps) => {
  return (
    <div className="mt-12 h-full w-full">
      <div className=" h-full w-full" id={target} />
    </div>
  );
};

type HubSpotFormProps = {
  region: string;
  portalId: string;
  formId: string;
  target: string;
  // eslint-disable-next-line no-unused-vars
  onFormSubmit?: (data: HTMLFormElement) => void;
  // eslint-disable-next-line no-unused-vars
  onFormSubmitted?: (data: HTMLFormElement) => void;
  // eslint-disable-next-line no-unused-vars
  onFormReady?: (form: HTMLFormElement) => void;
};

export const HubSpotForm = ({
  region,
  portalId,
  formId,
  target,
  onFormReady,
  onFormSubmit,
  onFormSubmitted,
}: HubSpotFormProps) => {

  useEffect(() => {
    const initHubSpot = () => {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      document.body.appendChild(script);
      script.addEventListener('load', () => {
        if ((window as any).hbspt) {
          (window as any).hbspt.forms.create({
            region,
            portalId,
            formId,
            target: `#${target}`,
            onFormSubmit,
            onFormSubmitted,
            onFormReady,
          });
        }
      });
    };

    initHubSpot();
  }, []);

  return <FormTarget target={target} />;
};
