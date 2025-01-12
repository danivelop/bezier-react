import React from 'react'

function SvgCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.676 4.824l-1.88-.684-5.472 15.035 1.88.684 5.472-15.035zM2 12L6.697 17l1.474-1.385-3.398-3.616L8.17 8.386 6.697 7 2 12zm20 0L17.303 17l-1.473-1.385 3.398-3.616-3.398-3.614L17.303 7 22 12z"
      />
    </svg>
  )
}

export default SvgCode
