// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "../ui/button"
// import NavItems from "./NavItems"
// import MobileNav from "./MobileNav"

// const Header = () => {
//   return (
//     <header className="w-full  border-b">
//         <div className ="wrapper flex items-center justify-between">
// <Link href='/' className="w-36">
// <Image
//  src="/assets/images/logo.jpeg" width={128} height={36}
// alt="Your Event Lgo" />

// </Link> 

// {/* <SignedIn> */}
//           <nav className="md:flex-between hidden w-full max-w-xs">
//             <NavItems />
//           </nav>
//         {/* </SignedIn> */}

// <div className="flex w- 32 justify-end gap-3">
//   {/* <SignedIn> */}
//             <UserButton afterSignOutUrl="/" />
//             <MobileNav />
//           {/* </SignedIn> */}
// {/* <SignedOut> */}
//   <Button asChild className="rounded-full" size={"lg"}>
// <Link href="/sign-in">
// login
// </Link>
//   </Button> 
  
// {/* </SignedOut> */}
// </div>
//         </div>
//     </header>
//   )
// }

// export default Header

// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import NavItems from "./NavItems";
// import MobileNav from "./MobileNav";

// const Header = () => {
//   return (
//     <header className="w-full border-b">
//       <div className="wrapper flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="w-36">
//           <Image
//             src="/assets/images/logo.jpeg"
//             width={128}
//             height={36}
//             alt="Your Event Logo"
//           />
//         </Link>

//         {/* Desktop Navigation (only when signed in) */}
//         <SignedIn>
//           <nav className="hidden md:flex">
//             <NavItems />
//           </nav>
//         </SignedIn>

//         {/* Right side */}
//      <div className="flex w-32 justify-end gap-3">
//   {/* Only show when logged in */}
//   {/* <SignedIn> */}
//     <MobileNav />
//     <UserButton afterSignOutUrl="/" />
//   {/* </SignedIn> */}

//   {/* Only show when logged out */}
//   {/* <SignedOut> */}
//     <Button asChild className="rounded-full" size="lg">
//       <Link href="/sign-in">Login</Link>
//     </Button>
//   {/* </SignedOut> */}
// </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
 
// "use client";

// import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import NavItems from "./NavItems";
// import MobileNav from "./MobileNav";
// import { Button } from "../ui/button";

// const Header = () => {
//   const { user } = useUser();

//   return (
//      <header className="w-full border-b">
//       <div className="wrapper flex items-center justify-between">
//         <Link  href="/" className="w-36">
//           <Image 
//             src="/assets/images/logo.jpeg" width={128} height={38}
//             alt="Evently logo" 
//           />
//         </Link>
//          <SignedIn>
//           <nav className="md:flex-between hidden w-full max-w-xs">
//             <NavItems />
//           </nav>
//         </SignedIn>
       
//         <div className="flex w-32 justify-end gap-3">
//           <SignedIn>
//             <UserButton afterSignOutUrl="/" />
//             <MobileNav />
//           </SignedIn>
//           <SignedOut>
//             <Button asChild className="rounded-full" size="lg">
//               <Link href="/sign-in">
//                 Login
//               </Link>
//             </Button>
//           </SignedOut>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


"use client";

import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Header = () => {
  const { user } = useUser();

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="w-36">
          <Image 
            src="/assets/images/logo.jpeg" 
            width={128} 
            height={38} 
            alt="Evently logo" 
          />
        </Link>

        {/* Desktop Nav - Only show on md+ screens */}
        <SignedIn>
          <nav className="hidden md:flex w-full justify-between max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        {/* Right side: User / Login */}
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
