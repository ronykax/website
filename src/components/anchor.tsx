export const Anchor = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={className} rel="noopener noreferrer" target="_blank" {...props}>
    {children}
  </a>
);
