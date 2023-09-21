import React from "react";
import { useMatomo } from "@datapunt/matomo-tracker-react";

const MyComponent = () => {
  const { trackPageView, trackEvent } = useMatomo();

  React.useEffect(() => {
    trackPageView({});
  }, []);

  return (
    <button onClick={() => trackEvent({ category: "button", action: "click" })}>
      Cliquez sur moi
    </button>
  );
};

export default MyComponent;
