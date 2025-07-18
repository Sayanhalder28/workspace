interface Props {
  color?: string;
  height?: string;
}

function ReportsIcon({ color, height }: Props) {
  return (
    <svg
      width={height}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <g style={{ mixBlendMode: "normal" }}>
        <path
          d="M15.75 2.25L2.25 2.25C1.83578 2.25 1.5 2.58578 1.5 3L1.5 15C1.5 15.4142 1.83578 15.75 2.25 15.75L15.75 15.75C16.1642 15.75 16.5 15.4142 16.5 15L16.5 3C16.5 2.58578 16.1642 2.25 15.75 2.25ZM3.75 4.5L3.75 6L5.25 6L5.25 4.5L3.75 4.5ZM6.75 6L6.75 4.5L8.25 4.5L8.25 6L6.75 6ZM3 7.5L15 7.5L15 14.25L3 14.25L3 7.5Z"
          clipRule="evenodd"
          fill="#D8D9D8"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
      <g style={{ mixBlendMode: "normal" }}>
        <g style={{ mixBlendMode: "normal" }} />
        <g style={{ mixBlendMode: "normal" }}>
          <path
            d="M2.25 2.25L15.75 2.25C16.1642 2.25 16.5 2.58578 16.5 3L16.5 15C16.5 15.4142 16.1642 15.75 15.75 15.75L2.25 15.75C1.83578 15.75 1.5 15.4142 1.5 15L1.5 3C1.5 2.58578 1.83578 2.25 2.25 2.25ZM15 3.75L15 6.75L3 6.75L3 3.75L15 3.75ZM3.75 4.5L5.25 4.5L5.25 6L3.75 6L3.75 4.5ZM8.25 4.5L6.75 4.5L6.75 6L8.25 6L8.25 4.5ZM3 8.25L15 8.25L15 14.25L3 14.25L3 8.25ZM6 9L3.75 9L3.75 12.75L6 12.75L6 9Z"
            clipRule="evenodd"
            fill={color}
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
}

export default ReportsIcon;
