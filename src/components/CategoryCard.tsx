import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  discount?: string;
}

const CategoryCard = ({ title, subtitle, image, discount }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-none hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
            {discount}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm opacity-90">{subtitle}</p>
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;