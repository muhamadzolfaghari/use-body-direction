import * as React from "react";

type DirectionType = "rtl" | "ltr" | string;

const useBodyDirection = () => {
  const directionRef = React.useRef<DirectionType>();
  const [direction, setDirection] = React.useState<DirectionType>();

  React.useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  React.useEffect(() => {
    setDirection(document.body.style.direction);
  }, []);

  React.useEffect(() => {
    function handleStyleChanged(mutations: MutationRecord[]) {
      const newDirection = (mutations[0].target as HTMLBodyElement).style.direction;

      if (newDirection !== directionRef.current) {
        setDirection(document.body.style.direction);
      }
    }

    const observer = new MutationObserver(handleStyleChanged);
    observer.observe(document.body, {
      attributeFilter: ["style"]
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return direction;
};

export default useBodyDirection;
