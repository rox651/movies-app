import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import type { ComponentChildren } from "preact";

type MarkdownProps = {
  children: string;
};

type AnchorProps = {
  href?: string;
  title?: string;
  children?: ComponentChildren;
};

const Anchor = ({ href, title, children }: AnchorProps) => (
  <a
    href={href}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-primary hover:text-primary/80"
  >
    {children}
  </a>
);

const components = { a: Anchor } as Partial<Components>;

const Markdown = ({ children }: MarkdownProps) => {
  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
};

export default Markdown;
