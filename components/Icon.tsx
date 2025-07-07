import React, { SVGProps, ReactElement } from 'react';
import clsx from 'clsx';

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
  label?: string;
};

interface Props extends IconProps {
  children: ReactElement<SVGProps<SVGSVGElement>>;
}

const Icon = ({
  size = 24,
  color = 'text-black',
  className = '',
  label,
  children,
}: Props) => {
  const dimensionStyle =
    typeof size === 'number' ? { width: size, height: size } : {};

  return (
    <span
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      className={clsx(
        'inline-flex items-center justify-center',
        typeof size === 'string' ? size : '',
        color,
        className,
      )}
      style={dimensionStyle}
    >
      {children}
    </span>
  );
};

export default Icon;
