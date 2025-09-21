import type { PropsWithChildren } from "preact/compat";

const ErrorText = ({ children }: PropsWithChildren) => {
  return <p className="mt-1 text-xs text-red-600">{children}</p>;
};

export default ErrorText;
