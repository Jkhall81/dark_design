import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import PlainLogo from "./PlainLogo";
import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      className="relative py-32 text-center font-medium md:py-40"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter"></div>
      <div className="glass-container to slate-900 rounded-lg bg-gradient-to-b from-slate-800 p-4 md:rounded-xl">
        <PlainLogo />
      </div>
      <div className="mt-8 max-w-xl text-balance text-5xl">
        <PrismicText field={slice.primary.heading} />
      </div>
      <ButtonLink field={slice.primary.button_link} className="mt-6">
        {slice.primary.button_text || "Learn More"}
      </ButtonLink>
    </Bounded>
  );
};

export default CallToAction;