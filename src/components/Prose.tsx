import clsx from "clsx";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "text-neutral-300 prose prose-sm max-w-none"
      )}
    >
      {children}
    </div>
  );
}
