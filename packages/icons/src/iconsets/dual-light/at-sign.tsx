import { memo, ReactElement, SVGProps } from 'react';
export const AtSign = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.279 20 14.4852 19.7006 15.555 19.169C16.0495 18.9232 16.6497 19.1249 16.8955 19.6194C17.1413 20.114 16.9396 20.7142 16.445 20.96C15.1049 21.626 13.5947 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13C22 14.409 21.6473 15.5353 20.987 16.3277C20.3167 17.132 19.4033 17.5 18.5 17.5C17.2731 17.5 16.0324 16.8089 15.4101 15.6567C14.5168 16.4901 13.318 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1256 7 14.1643 7.37194 15 7.99963C15.0002 7.44752 15.4478 7 16 7C16.5523 7 17 7.44772 17 8V14C17 14.8839 17.7362 15.5 18.5 15.5C18.8467 15.5 19.1833 15.368 19.4505 15.0473C19.7277 14.7147 20 14.091 20 13V12C20 7.58172 16.4183 4 12 4ZM15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
