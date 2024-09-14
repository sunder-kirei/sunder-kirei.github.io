import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./hello_jp.module.css";

export function HelloJp({
  className,
  play,
  ...props
}: HTMLAttributes<SVGSVGElement> & { play: boolean }) {
  return (
    <svg
      width="473.70001220703125"
      height="79.5999984741211"
      viewBox="0 0 473.7 79.6"
      xmlns="http://www.w3.org/2000/svg"
      id="hello_jp"
      className={twMerge("w-full h-full", play && styles["active"], className)}
      {...props}
    >
      <g
        id="svgGroup"
        strokeLinecap="round"
        fillRule="evenodd"
        fontSize="9pt"
        stroke="#000"
        strokeWidth="0.25mm"
        fill="#000"
        style={{ stroke: "#000", strokeWidth: "0.25mm", fill: "#000" }}
      >
        <path
          d="M 2.1 47.4 L 5.2 47.8 A 39.164 39.164 0 0 0 3.559 53.362 A 35.798 35.798 0 0 0 3.4 54.15 Q 2.8 57.3 2.8 60.3 Q 2.8 67 9.7 71.05 Q 16.461 75.019 29.272 75.098 A 84.807 84.807 0 0 0 29.8 75.1 A 181.119 181.119 0 0 0 39.645 74.842 A 155.619 155.619 0 0 0 43.3 74.6 Q 49.7 74.1 54.85 73.25 A 66.877 66.877 0 0 0 57.869 72.685 Q 59.419 72.355 60.727 71.984 A 27.075 27.075 0 0 0 63.1 71.2 L 63.2 74.3 A 31.941 31.941 0 0 1 61.225 74.858 Q 58.806 75.466 55.3 76.05 Q 50.917 76.78 45.427 77.252 A 180.781 180.781 0 0 1 43.6 77.4 A 177.167 177.167 0 0 1 33.363 77.869 A 200.969 200.969 0 0 1 29.8 77.9 A 70.825 70.825 0 0 1 22.434 77.536 Q 17.969 77.069 14.2 76 A 30.644 30.644 0 0 1 9.59 74.308 Q 7.022 73.109 5.076 71.509 A 17.245 17.245 0 0 1 3.75 70.3 A 12.87 12.87 0 0 1 0.009 61.352 A 16.916 16.916 0 0 1 0 60.8 Q 0 57.3 0.65 53.95 Q 1.3 50.6 2.1 47.4 Z M 5.6 12.6 L 5.6 9.5 Q 10.9 10.2 17.5 10.5 A 293.92 293.92 0 0 0 27.681 10.781 A 327.283 327.283 0 0 0 31.2 10.8 A 203.939 203.939 0 0 0 40.315 10.602 A 204.724 204.724 0 0 0 40.35 10.6 A 210.257 210.257 0 0 0 46.256 10.254 A 179.757 179.757 0 0 0 48.8 10.05 Q 52.8 9.7 56.2 9.4 L 56.2 12.5 A 505.778 505.778 0 0 0 52.758 12.721 Q 50.941 12.844 48.93 12.991 A 812.988 812.988 0 0 0 48.8 13 A 291.261 291.261 0 0 1 42.425 13.394 A 333.679 333.679 0 0 1 40.2 13.5 Q 35.7 13.7 31.2 13.7 A 308.731 308.731 0 0 1 22.532 13.583 A 255.89 255.89 0 0 1 17.65 13.4 A 315.559 315.559 0 0 1 9.226 12.893 A 269.179 269.179 0 0 1 5.6 12.6 Z"
          id="0"
          vectorEffect="non-scaling-stroke"
          className={styles["svg-elem-1"]}
        ></path>
        <path
          d="M 128.6 1.5 L 132.1 3 Q 131.6 3.8 130.7 5.15 A 42.747 42.747 0 0 0 129.575 6.935 A 51.409 51.409 0 0 0 128.9 8.1 A 139.844 139.844 0 0 0 128.081 9.484 Q 126.75 11.763 124.8 15.25 Q 122.2 19.9 119.1 25.45 Q 116 31 113.1 36.4 A 765.273 765.273 0 0 0 111.052 40.239 Q 110.251 41.751 109.538 43.116 A 395.395 395.395 0 0 0 108.2 45.7 A 34.828 34.828 0 0 1 112.127 41.929 Q 114.538 39.969 117.06 38.759 A 21.441 21.441 0 0 1 117.4 38.6 A 26.235 26.235 0 0 1 121.647 37.058 A 19.043 19.043 0 0 1 126.5 36.4 Q 130.9 36.4 134.2 39.2 Q 137.299 41.829 137.576 46.927 A 18.465 18.465 0 0 1 137.6 47.6 Q 137.7 51.3 137.75 54.9 Q 137.8 58.5 137.8 61.8 Q 137.8 65.1 137.9 67.9 A 12.621 12.621 0 0 0 138.266 70.501 Q 138.666 72.052 139.484 73.193 A 6.606 6.606 0 0 0 140.85 74.6 A 10.136 10.136 0 0 0 145.563 76.552 A 13.54 13.54 0 0 0 147.6 76.7 A 17.071 17.071 0 0 0 153.545 75.684 A 15.778 15.778 0 0 0 156.7 74.1 Q 160.7 71.5 163.65 67.45 A 45.759 45.759 0 0 0 168.009 60.171 A 41.982 41.982 0 0 0 168.5 59.1 Q 170.4 54.8 171.3 51.5 L 173.7 53.5 A 74.583 74.583 0 0 1 170.459 61.415 A 60.017 60.017 0 0 1 167.5 66.85 A 33.326 33.326 0 0 1 163.159 72.516 A 27.223 27.223 0 0 1 158.95 76.1 A 19.287 19.287 0 0 1 150.286 79.313 A 24.835 24.835 0 0 1 147.2 79.5 A 22.04 22.04 0 0 1 144.388 79.333 Q 141.313 78.936 139.45 77.6 A 10.852 10.852 0 0 1 137.437 75.759 A 8.403 8.403 0 0 1 135.9 73.05 A 20.802 20.802 0 0 1 135.204 70.507 A 15.47 15.47 0 0 1 134.9 68.1 Q 134.8 64.9 134.8 61.5 L 134.8 54.55 Q 134.8 51 134.6 47.6 A 10.987 10.987 0 0 0 134.23 44.958 A 7.647 7.647 0 0 0 132.2 41.45 A 7.569 7.569 0 0 0 128.729 39.543 Q 127.567 39.243 126.196 39.205 A 14.471 14.471 0 0 0 125.8 39.2 A 16.859 16.859 0 0 0 119.027 40.66 A 21.385 21.385 0 0 0 116.7 41.85 Q 112.2 44.5 108.6 48.45 Q 105 52.4 102.9 56.3 Q 101.905 57.984 100.792 60.284 A 89.383 89.383 0 0 0 100.1 61.75 Q 98.6 65 97.2 68.4 Q 95.8 71.8 94.75 74.75 Q 93.885 77.181 93.393 78.764 A 43.591 43.591 0 0 0 93.2 79.4 L 90.1 78.2 Q 91.9 73.1 94.9 66.55 Q 97.9 60 101.5 52.8 Q 105.1 45.6 108.85 38.5 Q 112.6 31.4 116.05 25.1 A 2044.75 2044.75 0 0 1 118.916 19.884 Q 120.223 17.512 121.389 15.417 A 1118.71 1118.71 0 0 1 122.15 14.05 Q 124.8 9.3 126.2 6.9 A 245.847 245.847 0 0 0 126.862 5.567 Q 127.162 4.957 127.427 4.408 A 141.54 141.54 0 0 0 127.6 4.05 Q 128.2 2.8 128.6 1.5 Z"
          id="1"
          vectorEffect="non-scaling-stroke"
          className={styles["svg-elem-2"]}
        ></path>
        <path
          d="M 200.3 3 L 204.1 3.4 Q 203.9 4 203.7 4.7 A 84.046 84.046 0 0 0 203.35 5.963 A 92.451 92.451 0 0 0 203.3 6.15 Q 203.1 6.9 202.9 7.8 Q 202.2 11.4 201.45 15.35 Q 200.7 19.3 200.05 23.45 Q 199.4 27.6 198.9 31.8 Q 198.4 36 198.1 40.05 A 107.655 107.655 0 0 0 197.805 46.946 A 97.461 97.461 0 0 0 197.8 47.9 Q 197.8 53.7 198.15 58.55 Q 198.5 63.4 199.2 69.3 L 201.45 63 Q 202.7 59.5 203.95 56.1 A 1336.782 1336.782 0 0 1 204.838 53.691 Q 205.188 52.745 205.503 51.898 A 676.583 676.583 0 0 1 206.1 50.3 L 208.3 51.9 Q 207.544 53.894 206.598 56.384 A 26553.584 26553.584 0 0 1 205.7 58.75 Q 204.2 62.7 202.95 66.4 Q 201.7 70.1 201.3 72.2 A 30.019 30.019 0 0 0 201.07 73.509 A 36.37 36.37 0 0 0 200.95 74.35 Q 200.8 75.5 200.9 76.5 Q 201 77.2 201.1 78 Q 201.189 78.716 201.279 79.191 A 9.668 9.668 0 0 0 201.3 79.3 L 198.5 79.6 A 76.071 76.071 0 0 1 197.364 74.654 Q 196.594 70.75 196 66 Q 195 58 195 47.9 A 114.947 114.947 0 0 1 195.483 37.511 A 125.733 125.733 0 0 1 195.55 36.8 Q 196.1 31.1 196.95 25.6 Q 197.8 20.1 198.6 15.4 A 627.63 627.63 0 0 0 199.158 12.072 Q 199.588 9.463 199.9 7.4 A 69.729 69.729 0 0 0 200.036 6.399 Q 200.138 5.606 200.2 4.95 Q 200.3 3.9 200.3 3 Z M 223.6 50.5 L 226.6 50.9 Q 225.8 53.8 225.35 56.25 Q 224.9 58.7 224.9 60.8 A 10.141 10.141 0 0 0 225.262 63.439 A 12.318 12.318 0 0 0 225.6 64.5 A 6.931 6.931 0 0 0 226.681 66.393 Q 227.23 67.09 227.989 67.748 A 12.702 12.702 0 0 0 228.35 68.05 A 10.486 10.486 0 0 0 230.148 69.196 Q 231.099 69.684 232.272 70.093 A 25.062 25.062 0 0 0 234.3 70.7 Q 236.92 71.372 240.669 71.592 A 67.171 67.171 0 0 0 244.6 71.7 A 127.923 127.923 0 0 0 253.619 71.393 A 109.603 109.603 0 0 0 257.5 71.05 Q 263.6 70.4 269.1 69.1 L 269.2 72.4 Q 265.755 73.166 261.284 73.697 A 126.559 126.559 0 0 1 258.45 74 Q 252.2 74.6 245.1 74.6 Q 234.825 74.6 229.373 72.046 A 14.329 14.329 0 0 1 227.5 71 A 12.562 12.562 0 0 1 224.016 67.631 Q 222.25 65.033 222.112 61.59 A 14.721 14.721 0 0 1 222.1 61 A 23.88 23.88 0 0 1 222.177 59.145 Q 222.275 57.884 222.5 56.45 A 97.516 97.516 0 0 1 222.842 54.418 Q 223.002 53.521 223.192 52.542 A 173.982 173.982 0 0 1 223.6 50.5 Z M 226.8 15.4 L 226.8 12.1 A 51.782 51.782 0 0 0 229.725 12.576 Q 231.038 12.754 232.506 12.897 A 102.889 102.889 0 0 0 235.6 13.15 Q 240.8 13.5 246.5 13.5 Q 252.2 13.5 257.4 13.1 A 133.23 133.23 0 0 0 260.905 12.787 Q 262.546 12.617 263.953 12.421 A 57.351 57.351 0 0 0 266 12.1 L 266 15.4 Q 262.6 15.8 257.4 16.05 Q 252.2 16.3 246.5 16.3 Q 240.8 16.3 235.55 16.05 Q 230.427 15.806 226.97 15.419 A 72.671 72.671 0 0 1 226.8 15.4 Z"
          id="2"
          vectorEffect="non-scaling-stroke"
          className={styles["svg-elem-3"]}
        ></path>
        <path
          d="M 316.1 0 L 319.8 0.3 A 20.617 20.617 0 0 0 319.507 1.359 Q 319.358 1.955 319.217 2.642 A 42.453 42.453 0 0 0 319.05 3.5 A 85.879 85.879 0 0 0 318.772 5.086 Q 318.653 5.814 318.559 6.47 A 50.622 50.622 0 0 0 318.5 6.9 Q 318.1 9.3 317.35 13.3 Q 316.6 17.3 315.55 22.15 Q 314.5 27 313.3 31.9 Q 312.1 36.8 310.85 41 Q 309.905 44.175 308.989 46.549 A 42.788 42.788 0 0 1 308.4 48 A 47.147 47.147 0 0 1 316.977 42.192 A 39.718 39.718 0 0 1 323.15 39.6 A 52.513 52.513 0 0 1 336.435 37.192 A 61.123 61.123 0 0 1 339.8 37.1 A 43.819 43.819 0 0 1 345.318 37.427 Q 349.64 37.977 352.9 39.45 A 20.391 20.391 0 0 1 357.071 41.933 A 15.651 15.651 0 0 1 360.7 45.9 A 16.796 16.796 0 0 1 363.249 53.833 A 20.635 20.635 0 0 1 363.3 55.3 A 23.327 23.327 0 0 1 362.54 61.384 A 18.452 18.452 0 0 1 359.6 67.55 A 23.016 23.016 0 0 1 353.118 73.478 A 29.843 29.843 0 0 1 349.25 75.5 Q 342.801 78.312 334.143 79.15 A 70.238 70.238 0 0 1 333.6 79.2 Q 326.228 79.855 317.716 79.236 A 128.562 128.562 0 0 1 313.9 78.9 L 313.3 75.9 Q 322.4 77 330.85 76.45 Q 339.3 75.9 345.95 73.5 A 29.429 29.429 0 0 0 351.412 70.904 A 22.157 22.157 0 0 0 356.5 66.65 Q 360.4 62.2 360.4 55.4 Q 360.4 48.6 355.15 44.25 A 16.845 16.845 0 0 0 349.638 41.286 Q 347.188 40.474 344.198 40.138 A 40.316 40.316 0 0 0 339.7 39.9 Q 330.5 39.9 322.1 42.95 Q 313.7 46 308.2 52.2 A 35.907 35.907 0 0 0 306.92 53.826 A 30.479 30.479 0 0 0 306.4 54.55 Q 305.6 55.7 304.8 57.1 L 301.7 55.9 A 86.636 86.636 0 0 0 304.804 49.045 A 109.94 109.94 0 0 0 307 43.1 Q 309.4 36 311.2 28.85 Q 313 21.7 314.15 15.8 A 237.072 237.072 0 0 0 314.678 13.006 Q 315.231 9.977 315.536 7.773 A 62.664 62.664 0 0 0 315.7 6.5 A 142.205 142.205 0 0 0 316.012 3.602 A 129.264 129.264 0 0 0 316.05 3.2 Q 316.2 1.6 316.1 0 Z M 292.6 17.3 L 292.5 14.1 Q 295.6 14.6 300.5 15.05 A 108.842 108.842 0 0 0 306.391 15.437 A 88.84 88.84 0 0 0 309.7 15.5 A 183.137 183.137 0 0 0 314.632 15.43 Q 317.233 15.359 320.115 15.219 A 298.161 298.161 0 0 0 320.5 15.2 Q 326.5 14.9 333 14.3 Q 339.5 13.7 345.9 12.75 A 161.995 161.995 0 0 0 353.588 11.426 A 135.592 135.592 0 0 0 357.9 10.5 L 357.9 13.9 Q 352.1 14.9 345.65 15.75 Q 339.2 16.6 332.8 17.15 A 364.779 364.779 0 0 1 323.481 17.834 A 321.433 321.433 0 0 1 320.5 18 Q 314.6 18.3 309.8 18.3 A 124.453 124.453 0 0 1 301.183 18.009 A 114.809 114.809 0 0 1 301.05 18 Q 296.8 17.7 292.6 17.3 Z"
          id="3"
          vectorEffect="non-scaling-stroke"
          className={styles["svg-elem-4"]}
        ></path>
        <path
          d="M 449.3 1.4 L 453 1.4 Q 452.8 3 452.65 4.3 Q 452.5 5.6 452.4 7 Q 452.331 8.375 452.286 10.152 A 216.898 216.898 0 0 0 452.25 11.85 Q 452.2 14.7 452.2 17.7 L 452.2 23 Q 452.2 27.6 452.4 33.1 Q 452.6 38.6 452.9 44.3 A 780.51 780.51 0 0 1 453.294 52.597 A 688.552 688.552 0 0 1 453.4 55.25 Q 453.594 60.331 453.6 64.428 A 178.635 178.635 0 0 1 453.6 64.7 Q 453.6 66.9 453 69.35 A 13.004 13.004 0 0 1 451.184 73.446 A 15.089 15.089 0 0 1 450.8 74 Q 449.2 76.2 446.25 77.55 Q 443.3 78.9 438.6 78.9 A 43.585 43.585 0 0 1 433.543 78.627 Q 428.13 77.993 424.875 75.883 A 12.017 12.017 0 0 1 424.25 75.45 Q 419.6 72 419.6 66.4 A 10.343 10.343 0 0 1 421.151 60.987 A 13.004 13.004 0 0 1 421.7 60.15 Q 423.677 57.373 427.515 55.571 A 22.099 22.099 0 0 1 428 55.35 Q 432.2 53.5 438.5 53.5 A 42.797 42.797 0 0 1 445.869 54.114 A 37.063 37.063 0 0 1 449 54.8 Q 453.9 56.1 458.25 58.3 Q 462.6 60.5 466.45 63.3 Q 470.3 66.1 473.7 69.1 L 471.8 71.9 Q 467.1 67.4 462 63.85 Q 456.9 60.3 451.05 58.2 A 35.88 35.88 0 0 0 442.099 56.271 A 43.605 43.605 0 0 0 438.2 56.1 A 28.171 28.171 0 0 0 433.356 56.492 Q 429.549 57.158 426.75 58.95 Q 422.3 61.8 422.3 66.2 A 7.997 7.997 0 0 0 425.112 72.481 A 10.941 10.941 0 0 0 426.4 73.45 A 15.131 15.131 0 0 0 430.67 75.307 Q 433.581 76.1 437.3 76.1 A 28.471 28.471 0 0 0 440.359 75.947 Q 443.53 75.603 445.533 74.488 A 8.402 8.402 0 0 0 445.6 74.45 A 9.75 9.75 0 0 0 448.125 72.429 A 8.581 8.581 0 0 0 449.65 69.95 A 15.476 15.476 0 0 0 450.595 66.371 A 20.675 20.675 0 0 0 450.8 63.4 Q 450.8 60.6 450.6 55.7 Q 450.4 50.8 450.1 45 Q 449.8 39.2 449.6 33.45 A 365.237 365.237 0 0 1 449.463 28.658 Q 449.416 26.463 449.404 24.49 A 214.576 214.576 0 0 1 449.4 23.2 L 449.4 14.35 A 304.474 304.474 0 0 1 449.414 11.338 Q 449.438 8.975 449.5 7.1 L 449.5 4.15 A 20.657 20.657 0 0 0 449.462 2.861 Q 449.413 2.075 449.3 1.4 Z M 399.4 1.3 L 403.1 1.7 Q 402.9 2.3 402.7 3 A 15.76 15.76 0 0 0 402.449 4.01 A 18.624 18.624 0 0 0 402.35 4.5 Q 402.2 5.3 402 6.2 Q 401.3 9.8 400.55 13.95 A 378.662 378.662 0 0 0 399.276 21.442 A 417.666 417.666 0 0 0 399.1 22.55 Q 398.4 27 397.9 31.45 Q 397.4 35.9 397.1 40.15 A 123.03 123.03 0 0 0 396.846 45.125 A 99.47 99.47 0 0 0 396.8 48.1 Q 396.8 53.9 397.2 58.75 Q 397.6 63.6 398.4 69.5 Q 399.173 67.094 400.205 64.134 A 333.64 333.64 0 0 1 400.55 63.15 Q 401.8 59.6 403.1 56.15 A 255.814 255.814 0 0 1 404.033 53.71 Q 404.404 52.755 404.746 51.903 A 128.629 128.629 0 0 1 405.4 50.3 L 407.4 51.8 A 263.728 263.728 0 0 1 406.58 54.062 Q 406.209 55.071 405.789 56.194 A 523.124 523.124 0 0 1 404.9 58.55 Q 403.4 62.5 402.1 66.2 A 96.915 96.915 0 0 0 401.366 68.366 Q 400.644 70.588 400.3 72.1 Q 400.1 73.1 400 74.3 A 14.351 14.351 0 0 0 399.953 75.167 Q 399.937 75.873 400 76.5 Q 400.1 77.2 400.2 78 Q 400.289 78.716 400.379 79.191 A 9.668 9.668 0 0 0 400.4 79.3 L 397.6 79.6 A 97.172 97.172 0 0 1 396.592 75.084 Q 396.089 72.567 395.632 69.706 A 186.849 186.849 0 0 1 395.1 66.15 A 107.387 107.387 0 0 1 394.31 58.296 Q 394.039 54.157 394.005 49.531 A 181.388 181.388 0 0 1 394 48.2 A 108.984 108.984 0 0 1 394.284 40.491 A 128.581 128.581 0 0 1 394.6 36.8 Q 395.2 30.8 396.05 24.95 Q 396.9 19.1 397.7 14.1 A 1626.8 1626.8 0 0 0 398.081 11.706 Q 398.589 8.503 398.949 6.133 A 553.006 553.006 0 0 0 399 5.8 Q 399.172 4.597 399.27 3.615 A 35.705 35.705 0 0 0 399.3 3.3 Q 399.4 2.2 399.4 1.3 Z M 421.1 23.5 L 421.1 20.4 Q 425.3 20.8 429.25 21 Q 433.2 21.2 437.5 21.2 Q 446.4 21.2 455.15 20.55 Q 463.9 19.9 471.2 18.5 L 471.2 21.5 Q 463.1 22.9 454.45 23.55 Q 445.8 24.2 437.2 24.2 A 157.642 157.642 0 0 1 431.638 24.105 A 133.135 133.135 0 0 1 429.25 24 Q 425.5 23.8 421.1 23.5 Z"
          id="4"
          vectorEffect="non-scaling-stroke"
          className={styles["svg-elem-5"]}
        ></path>
      </g>
    </svg>
  );
}
