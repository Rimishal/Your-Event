// import {
//   Sheet,
//   SheetTrigger,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetDescription,
//   SheetClose,
// } from "@/components/ui/sheet"

// import { Sheet } from "lucide-react"
// import Image from "next/image"
// import { SheetTrigger } from "../ui/sheet"
// import NavItems from "./NavItems"

// const MobileNav = () => {
//   return (
//      <nav className="md:hidden">
//       <Sheet>
//         <SheetTrigger className="align-middle">
//           <Image 
//             src="/assets/icons/menu.svg"
//             alt="menu"
//             width={24}
//             height={24}
//             className="cursor-pointer"
//           />
//         </SheetTrigger>
//         <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
//           <Image 
//             src="/assets/images/logo.svg"
//             alt="logo"
//             width={128}
//             height={38}
//           />
//           <Separater className="border border-gray-50" />
//           <NavItems />
//         </SheetContent>
//       </Sheet>
//     </nav>
//   )
// }

// export default MobileNav


import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import Image from "next/image";
import NavItems from "./NavItems";
import { Separator } from "@/components/ui/separator"; // ✅ correct import

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">


    <SheetHeader>
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          </SheetHeader>

  <Image 
    src="/assets/images/logo.svg"
    alt="logo"
    width={128}
    height={38}
  />

  <Separator className="border border-gray-200" />

  <NavItems />
</SheetContent>


        {/* <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />

          <Separator  className="border border-gray-50"/> 

          <NavItems />
        </SheetContent> */}
      </Sheet>
    </nav>
  );
};

export default MobileNav;
