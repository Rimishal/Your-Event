// import { headerLinks } from '@/constants';
// import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React from 'react'

// const NavItems = () => {

//   const pathname = usePathname();
//   return (
//      <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
//       {headerLinks.map((link) => {
//         const isActive = pathname === link.route;
        
//         return (
//           <li
//             key={link.route}
//             className={`${
//               isActive && 'text-primary-500'
//             } flex-center p-medium-16 whitespace-nowrap`}
//           >
//             <Link href={link.route}>{link.label}</Link>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }
// export default NavItems

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex w-full flex-col items-start gap-5 md:flex-row md:justify-between">
      {headerLinks.map((link) => {
        // Normalize pathname: remove trailing slash
        const normalizedPathname = pathname?.replace(/\/$/, '');
        const normalizedLink = link.route.replace(/\/$/, '');
        const isActive = normalizedPathname === normalizedLink;

        return (
          <li
            key={link.route}
            className={`flex items-center justify-center p-medium-16 whitespace-nowrap ${
              isActive ? 'text-blue-500 font-semibold' : 'text-gray-700'
            }`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
