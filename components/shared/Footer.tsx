// import Image from "next/image"
// import Link from "next/link"

// const Footer = () => {
//   return (
//    <footer className="border-t">
//       <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
//         <Link href='/'>
//           <Image 
//             src="/assets/images/logo.jpeg"
//             alt="logo"
//             width={128}
//             height={38}
//           />
//         </Link>

//         <p>2023 Evently. All Rights reserved.</p>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-5 px-6">
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-center">
        
        {/* Logo - left on desktop, center on mobile */}
        <Link href="/" className="mx-auto md:mx-0">
          <Image 
            src="/assets/images/logo.jpeg"
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>

        {/* Text - right on desktop, below logo on mobile */}
        <p className="mt-2 md:mt-0 text-gray-700">2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

