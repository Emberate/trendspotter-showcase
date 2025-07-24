import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import productsImage from "@/assets/products-collection.jpg";

const Index = () => {
  const categories = [
    {
      title: "Men",
      subtitle: "Shirts, T-shirts & more",
      image: productsImage,
      discount: "40-70% OFF",
    },
    {
      title: "Women",
      subtitle: "Kurtas, Sarees & more",
      image: productsImage,
      discount: "50-80% OFF",
    },
    {
      title: "Kids",
      subtitle: "T-shirts, Shirts & more",
      image: productsImage,
      discount: "40-60% OFF",
    },
    {
      title: "Beauty",
      subtitle: "Makeup, Skincare & more",
      image: productsImage,
      discount: "30-50% OFF",
    },
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "Casual Cotton T-Shirt",
      brand: "Roadster",
      price: 599,
      originalPrice: 999,
      discount: 40,
      image: productsImage,
      rating: 4.2,
    },
    {
      id: "2",
      name: "Floral Print Dress",
      brand: "Libas",
      price: 1299,
      originalPrice: 2199,
      discount: 41,
      image: productsImage,
      rating: 4.3,
      isWishlisted: true,
    },
    {
      id: "3",
      name: "Slim Fit Jeans",
      brand: "Flying Machine",
      price: 1799,
      originalPrice: 2999,
      discount: 40,
      image: productsImage,
      rating: 4.1,
    },
    {
      id: "4",
      name: "Ethnic Kurta Set",
      brand: "Biba",
      price: 2399,
      originalPrice: 3999,
      discount: 40,
      image: productsImage,
      rating: 4.4,
    },
    {
      id: "5",
      name: "Sports Sneakers",
      brand: "Puma",
      price: 3499,
      originalPrice: 5999,
      discount: 42,
      image: productsImage,
      rating: 4.0,
    },
    {
      id: "6",
      name: "Formal Blazer",
      brand: "Arrow",
      price: 4999,
      originalPrice: 7999,
      discount: 38,
      image: productsImage,
      rating: 4.2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <HeroSection />
        
        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                subtitle={category.subtitle}
                image={category.image}
                discount={category.discount}
              />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <button className="text-primary font-medium hover:underline">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </section>

        {/* Sale Banner */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-myntra-pink to-myntra-orange rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">MEGA SALE</h2>
            <p className="text-xl mb-4">Up to 80% OFF on Fashion & Beauty</p>
            <button className="bg-white text-myntra-pink px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Shop Sale
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
