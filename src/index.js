import React, { Suspense, forwardRef, lazy } from "react";

const loadable = (
  importFunc,
  { fallback = null, withForwardRef = false } = { fallback: null }
) => {
  const LazyComponent = lazy(importFunc);

  if (withForwardRef) {
    return forwardRef((innerProps, ref) => (
      <Suspense fallback={fallback}>
        <LazyComponent {...innerProps} ref={ref} />
      </Suspense>
    ));
  }

  // Regular case: return a function
  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
