// import { Button } from "@/components/ui/button"

// export default function Home() {
//   return (
//     <div className="p-4">
//       <Button>Click Me</Button>
//     </div>
//   )
// }


// import { Button } from "@/components/ui/button"

// export default function Home() {
//   return (
//     <main>
     
//     </main>
//   )
// }


// export default function Home() {
//   return (
//     <div className="bg-red-500 text-white p-4">
//       Tailwind CSS is working!
//     </div>
//   )
// }
// export default function Home() {
//   return (
//     <button className="bg-red-600 text-white px-4 py-2 rounded">
//       Simple Red Button
//     </button>
//   )
// }


import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import CategoryFilter from "@/components/CategoryFilter"; // correct path adjust karo


export default function HomePage() {
  return (
     <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl md:text-5xl font-bold">
  Host, Connect, Celebrate: Your Events, Our Platform!
</h1>

            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
       <h2 className="text-3xl md:text-4xl font-bold">
  Trust by <br /> Thousands of Events
</h2>


        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          {/* <CategoryFilter/> */}
        </div>

      </section>
    </>
  )
}
