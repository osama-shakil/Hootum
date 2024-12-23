import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"


const curators = [
  {
    id: 6,
    name: "Kamal hassan",
    image: "/curators/06.png",
    bgColor: "bg-purple-100"
  },
  {
    id: 2,
    name: "Jalal ahmed",
    image: "/curators/02.png",
    bgColor: "bg-gray-100"
  },
  {
    id: 3,
    name: "Hassan khan",
    image: "/curators/03.png",
    bgColor: "bg-pink-100"
  },
  {
    id: 4,
    name: "Jomir uddin",
    image: "/curators/04.png",
    bgColor: "bg-yellow-100"
  }
]

export default function Curators() {
  return (
    <div className="w-full max-w-md px-4">
      <h2 className="text-3xl font-bold mb-4">Curators</h2>
      <div >
        {curators.map((curator) => (
          <Card key={curator.id} className="px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs text-white z-10 border-2 border-white">
                  {curator.id}
                </span>
                <Avatar className={`w-16 h-16 ${curator.bgColor}`}>
                  <AvatarImage src={curator.image} alt={curator.name} />
                  <AvatarFallback>{curator.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <span className="font-medium">{curator.name}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}