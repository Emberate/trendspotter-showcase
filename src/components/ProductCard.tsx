import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating?: number;
  isWishlisted?: boolean;
}

const ProductCard = ({
  name,
  brand,
  price,
  originalPrice,
  discount,
  image,
  rating,
  isWishlisted = false,
}: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-all duration-300 p-0">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${
            isWishlisted ? "text-red-500" : "text-muted-foreground"
          }`}
        >
          <Heart className="h-4 w-4" fill={isWishlisted ? "currentColor" : "none"} />
        </Button>
        {discount && (
          <Badge className="absolute top-2 left-2 bg-primary hover:bg-primary">
            {discount}% OFF
          </Badge>
        )}
      </div>
      
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">{brand}</p>
        <h3 className="text-sm font-medium line-clamp-1">{name}</h3>
        
        <div className="flex items-center space-x-2">
          <span className="text-base font-bold">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
          )}
          {discount && (
            <span className="text-sm text-myntra-orange font-medium">({discount}% OFF)</span>
          )}
        </div>
        
        {rating && (
          <div className="flex items-center space-x-1">
            <span className="text-xs bg-green-600 text-white px-1 py-0.5 rounded">
              {rating} ★
            </span>
            <span className="text-xs text-muted-foreground">(2.1k)</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;