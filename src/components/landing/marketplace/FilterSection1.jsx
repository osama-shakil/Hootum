// 'use client'

// import * as React from "react"
// import { Button } from "@/components/ui/button"
// import { 
//   Select, 
//   SelectContent, 
//   SelectItem, 
//   SelectTrigger, 
//   SelectValue 
// } from "@/components/ui/select"
// import { ChevronDown, X } from 'lucide-react'

// const categories = ["All items", "Art", "Antique", "Sculpture", "Cards", "Watches"]

// export default function FilterSection1() {
//   const [activeCategory, setActiveCategory] = React.useState("All items")

//   return (
//     <div className="flex items-center justify-between p-6 border-b">
//       <div className="flex items-center space-x-4">
//         <Select>
//           <SelectTrigger className="w-[300px]">
//             <SelectValue placeholder="Recently added" />
//             {/* <ChevronDown className="h-4 w-4 opacity-50" /> */}
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="recent">Recently added</SelectItem>
//             <SelectItem value="popular">Most popular</SelectItem>
//             <SelectItem value="price-asc">Price: Low to High</SelectItem>
//             <SelectItem value="price-desc">Price: High to Low</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//         <div className="flex space-x-2">
//           {categories.map((category) => (
//             <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`px-4 w-24 rounded-full py-2 text-sm ${
//               activeCategory === category 
//                 ? 'bg-black text-white ' 
//                 : 'hover:bg-accent hover:text-accent-foreground'
//             }`}
//           >
//             {category}
//           </button>
//           ))}
//         </div>
//       <Button 
//       variant="outline" 
//       className="flex items-center gap-3 rounded-full px-6"
//     >
//       Filter
//       <div className="p-1 rounded-full bg-black">
//         <X className="h-3 w-3 text-white" />
//       </div>
//     </Button>
//     </div>
//   )
// }
'use client'
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { ChevronDown, X } from 'lucide-react'

const categories = ["All items", "Art", "Antique", "Sculpture", "Cards", "Watches"]

export default function FilterSection1() {
  const [activeCategory, setActiveCategory] = React.useState("All items")

  return (
    <div className="hidden md:flex flex-col space-y-4 p-4 border-b md:flex-row md:items-center md:justify-between md:space-y-0 md:p-6">
      <div className="hidden lg:flex justify-between items-center w-full md:w-auto">
        <Select>
          <SelectTrigger className="w-[200px] md:w-[300px]">
            <SelectValue placeholder="Recently added" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Recently added</SelectItem>
            <SelectItem value="popular">Most popular</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>

      
      </div>

      {/* Categories - Scrollable on mobile */}
      <div className="w-full overflow-x-auto pb-2 md:w-auto md:pb-0">
        <div className="flex space-x-2 md:space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4  w-18 md:w-24 rounded-full py-2 text-xs  md:text-sm ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* Filter Button - Show on desktop only */}
      <Button
        variant="outline"
        className="hidden lg:flex items-center gap-3 rounded-full px-6"
      >
        Filter
        <div className="p-1 rounded-full bg-black">
          <X className="h-3 w-3 text-white" />
        </div>
      </Button>
    </div>
  )
}