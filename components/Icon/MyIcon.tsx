import Icon, { IconProps } from '../Icon';

const MyIcon = (props: IconProps) => {
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
          d="M19.125 20V18.3333C19.125 17.4493 18.7563 16.6014 18.0999 15.9763C17.4435 15.3512 16.5533 15 15.625 15H8.625C7.69674 15 6.8065 15.3512 6.15013 15.9763C5.49375 16.6014 5.125 17.4493 5.125 18.3333V20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.125 12C13.7819 12 15.125 10.6569 15.125 9C15.125 7.34315 13.7819 6 12.125 6C10.4681 6 9.125 7.34315 9.125 9C9.125 10.6569 10.4681 12 12.125 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default MyIcon;
