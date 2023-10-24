"use client"

import { Product } from "@/type"
import Image from "next/image"

interface ProductCardProps {
  data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={data?.images?.[0]?.url} 
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
      </div>
    </div>
  )
}

export default ProductCard