interface Props {
  color: string;
  fill: string;
  height: string;
}

function SearchIcon({ color, fill, height }: Props) {
  return (
    <svg
      width={height}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <g style={{ mixBlendMode: "normal" }}>
        <g style={{ mixBlendMode: "normal" }} />
        <g style={{ mixBlendMode: "normal" }}>
          <path
            d="M14.42 13.07L17.85 15.93L16.71 16.87L13.29 14.02C12.01 14.87 10.43 15.33 8.8 15.33C4.82 15.33 1.6 12.64 1.6 9.33C1.6 6.02 4.82 3.33 8.8 3.33C12.77 3.33 16 6.02 16 9.33C16 10.69 15.44 12.01 14.42 13.07Z"
            fill={fill}
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </g>
        <g style={{ mixBlendMode: "normal" }}>
          <g style={{ mixBlendMode: "normal" }} />
          <g style={{ mixBlendMode: "normal" }}>
            <path
              d="M14.4236 13.1549L17.85 16.5448L16.718 17.665L13.2924 14.2743C12.0178 15.2855 10.4324 15.8354 8.79877 15.8331C4.82434 15.8331 1.59875 12.6411 1.59875 8.70813C1.59875 4.77513 4.82434 1.58313 8.79877 1.58313C12.7731 1.58313 15.9988 4.77513 15.9988 8.70813C16.0011 10.3247 15.4453 11.8936 14.4236 13.1549ZM14.4056 8.70911C14.408 10.1503 13.8409 11.5353 12.8256 12.5685L12.7056 12.6872C11.6616 13.6919 10.262 14.253 8.80566 14.2508C5.71124 14.2508 3.20563 11.7705 3.20563 8.70911C3.20563 5.64694 5.71124 3.16743 8.80566 3.16743C11.8992 3.16743 14.4056 5.64694 14.4056 8.70911Z"
              clip-rule="evenodd"
              fill={color}
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SearchIcon;
