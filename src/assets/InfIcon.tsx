interface Props {
  fill?: string;
  height?: string;
}

function InfoIcon({ fill = "#5E5E5E", height = "28" }: Props) {
  return (
    <svg
      width={height}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <g style={{ mixBlendMode: "normal" }}>
        <g style={{ mixBlendMode: "normal" }} />
        <g style={{ mixBlendMode: "normal" }}></g>
        <path
          id="形状"
          d="M2.33325 14.0001C2.33325 20.444 7.55591 25.6667 13.9999 25.6667C20.4439 25.6667 25.6666 20.444 25.6666 14.0001C25.6666 7.55603 20.4439 2.33337 13.9999 2.33337C7.55591 2.33337 2.33325 7.55603 2.33325 14.0001ZM23.3333 14.0001C23.3333 19.1544 19.1542 23.3334 13.9999 23.3334C8.84564 23.3334 4.66656 19.1544 4.66656 14.0001C4.66656 8.84576 8.84564 4.66669 13.9999 4.66669C19.1542 4.66669 23.3333 8.84576 23.3333 14.0001ZM15.1666 8.16669L15.1666 10.5001L12.8333 10.5001L12.8333 8.16669L15.1666 8.16669ZM15.1666 19.8334L15.1666 12.8334L12.8333 12.8334L12.8333 19.8334L15.1666 19.8334Z"
          clipRule="evenodd"
          fill={fill}
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default InfoIcon;
