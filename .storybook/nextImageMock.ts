// import * as NextImage from "next/image";

// //next/imageの差し替え
// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props: any) =>
//     typeof props.src === "string" ? (
//       <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//     ) : (
//       <OriginalNextImage {...props} unoptimized />
//     )
// });
