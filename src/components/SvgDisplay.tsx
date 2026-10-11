// SVG string safe rendering component
// SVG strings in demo data are rendered through this component

interface SvgDisplayProps {
  svg: string;
  className?: string;
}

export default function SvgDisplay({ svg, className }: SvgDisplayProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden="true"
    />
  );
}
