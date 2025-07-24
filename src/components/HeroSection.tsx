import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden rounded-lg mb-8">
      <img
        src={heroImage}
        alt="Fashion Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Fashion
              <span className="block bg-gradient-to-r from-myntra-pink to-myntra-orange bg-clip-text text-transparent">
                That Speaks
              </span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover the latest trends in fashion, beauty, and lifestyle. 
              Express yourself with our curated collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-myntra-pink to-myntra-orange hover:opacity-90 transition-opacity"
              >
                Shop Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;