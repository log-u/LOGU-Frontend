import Icon, { IconProps } from '../Icon';

const ArchiveIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.2915 9.1665V19.9998H5.2915V9.1665"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.125 12.5H14.4583"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.9583 5H3.625V9.16667H21.9583V5Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default ArchiveIcon;
