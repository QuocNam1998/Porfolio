import "./index.css";
type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};
export const SkeletonLoader = ({ className, ...rest }: Props) => {
  return <div {...rest} className={`${className} skeleton`}></div>;
};
