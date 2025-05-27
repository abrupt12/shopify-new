import { useState } from 'react';
import { Button } from '../ui/button';
import { Star, Check, Loader2, ShoppingCart, Plus, Minus } from 'lucide-react';
import React from 'react';

// Add cart context at the top of the file
interface CartContextType {
  count: number;
  setCount: (count: number) => void;
}

export const CartContext = React.createContext<CartContextType>({
  count: 0,
  setCount: () => {},
});

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('light');
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState('/images/product/Image 1.jpeg');
  const [quantity, setQuantity] = useState(1);
  const { count, setCount } = React.useContext(CartContext);

  const discountedPrice = 79;
  const basePrice = Math.round(discountedPrice / 0.6); // Calculate original price based on 40% off
  const discountPercentage = 40;

  const handleAddToCart = () => {
    setCount(count + quantity);
    // You could also add a toast notification here
    alert(`Added ${quantity} item${quantity > 1 ? 's' : ''} to cart`);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handlePurchase = () => {
    // TODO: Implement purchase flow
    // This would typically integrate with a payment processor like Stripe
    alert(`Processing your order...\nTotal: $${discountedPrice}`);
  };

  const colors = [
    { 
      id: 'light', 
      name: 'Light Wood', 
      class: 'bg-[#E5D3B3]',
      image: '/images/product/light-wood-display.svg',
      thumbnail: '/images/product/Image 1.jpeg'
    },
    { 
      id: 'white', 
      name: 'Matte White', 
      class: 'bg-gray-100',
      image: '/images/product/matte-white-display.svg',
      thumbnail: '/images/product/Image 2.jpeg'
    },
    { 
      id: 'black', 
      name: 'Matte Black', 
      class: 'bg-gray-900',
      image: '/images/product/Image 3.jpeg',
      thumbnail: '/images/product/Image 4.jpeg'
    },
  ];


  const features = [
    '✓ Lumora Display',
    '✓ Custom mount',
    '✓ Power cord',
    '✓ Everything you need for simple install',
    '✓ 3 sleek frame options',
    '✓ Synced calendars',
    '✓ Unlimited profiles',
    '✓ Free 1 month Family Membership trial'
  ];

  const specs = [
    { label: 'Width', value: '16.5 in' },
    { label: 'Height', value: '26.7 in' },
    { label: 'Depth', value: '1.2 in' },
    { label: 'Weight', value: '16 lbs' },
    { label: 'Internet', value: 'Dual-band 802.11 A/B/G/N Wi-Fi' },
    { label: 'Power', value: 'AC110-120V 50/60Hz' }
  ];

  const previewImages = [
    { src: '/images/product/Image 1.jpeg', alt: 'Calendar view with family profiles' },
    { src: '/images/product/Image 2.jpeg', alt: 'Task management interface' },
    { src: '/images/product/Image 3.jpeg', alt: 'Family schedule overview' },
    { src: '/images/product/Image 4.jpeg', alt: 'Daily routine setup' },
    { src: '/images/product/Image 5.jpeg', alt: 'Family member profiles' },
    { src: '/images/product/Image 6.jpeg', alt: 'Smart home controls' }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Promotional Banner */}
      <div className="bg-sky-900 text-white text-center py-3">
        <p className="text-sm">
          Limited Time Offer - Save {discountPercentage}% with code <span className="font-bold">SUMMER15</span>
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Image Section */}
          <div className="flex gap-8">
            {/* Vertical Thumbnails */}
            <div className="flex flex-col gap-4">
              {previewImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedPreview(image.src);
                    setImageLoading(true);
                    setImageError(false);
                  }}
                  className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    selectedPreview === image.src
                      ? 'border-[#00796B] shadow-lg'
                      : 'border-gray-200 hover:border-[#00796B]'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error(`Failed to load thumbnail: ${image.src}`);
                        e.currentTarget.src = '/images/product/light-wood-display.svg';
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Main Product Image */}
            <div className="flex-1">
              <div className="bg-[#F9F7F4] rounded-2xl p-8 relative min-h-[600px] flex items-center justify-center">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#F9F7F4] rounded-2xl">
                    <Loader2 className="w-8 h-8 text-[#00796B] animate-spin" />
                  </div>
                )}
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#F9F7F4] rounded-2xl">
                    <p className="text-red-500">Failed to load image</p>
                  </div>
                )}
                <img
                  src={selectedPreview}
                  alt={previewImages.find(img => img.src === selectedPreview)?.alt || 'Product preview'}
                  className={`w-full rounded-2xl shadow-lg transition-opacity duration-300 ${
                    imageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => {
                    setImageLoading(false);
                    setImageError(false);
                  }}
                  onError={() => {
                    console.error(`Failed to load main image: ${selectedPreview}`);
                    setImageLoading(false);
                    setImageError(true);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Lumora Display</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">4.8/5 (203 reviews)</span>
              </div>
              <p className="text-xl text-gray-600">
                The centralized touchscreen that makes household organization an easier, shared responsibility for everyone in your home.
              </p>
            </div>

            {/* Price */}
            <div className="bg-[#F9F7F4] rounded-xl p-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold">${discountedPrice}</span>
                <span className="text-xl text-gray-500 line-through">${basePrice}</span>
                <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E6F7F4] text-[#00796B]">
                  Save {discountPercentage}% - Limited Time Only
                </span>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Color: {colors.find(c => c.id === selectedColor)?.name}</h3>
                <div className="flex gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => {
                        setSelectedColor(color.id);
                        setImageLoading(true);
                      }}
                      className={`w-12 h-12 rounded-full transition-all duration-200 ${
                        selectedColor === color.id 
                          ? 'ring-2 ring-[#00796B] ring-offset-2 scale-110' 
                          : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.id === 'light' ? '#E5D3B3' : color.id === 'white' ? '#FFFFFF' : '#000000' }}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>

              {/* Buy Button */}
              <div className="space-y-4">
                {/* Quantity Selector */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-[#003545] font-medium">Quantity</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={decrementQuantity}
                      className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-5 h-5 text-[#003545]" />
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Plus className="w-5 h-5 text-[#003545]" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-white border-2 border-[#00796B] text-[#00796B] hover:bg-gray-50 text-lg py-6 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    onClick={handlePurchase}
                    className="flex-1 bg-[#00796B] hover:bg-[#00695C] text-lg py-6 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Buy now
                  </Button>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div>
              <h3 className="text-lg font-semibold mb-4">What's included?</h3>
              <ul className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-sky-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mental Load Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-[#003545] leading-tight">
                Easing the mental load<br />of managing family life
              </h2>
              <p className="text-lg text-gray-700">
                Remembering appointments. Making grocery lists. Reminding the kids to clean up. Running a household comes with a burden of invisible labor that typically falls on one parent, leading to frustration and burnout — but now it doesn't have to. Because with Lumora Display, family organization becomes an easier, shared responsibility for everyone in your home. Instead of messy whiteboards and reminders on your phone, you get a single, sleek display with everything you need, designed for the whole family to use.
              </p>
              <p className="text-xl font-medium text-[#003545]">
                Don't do it all on your own. Empower your household with Lumora.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/product/Image 1.jpeg" 
                alt="Family using Lumora Display"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison Section */}
      <section className="bg-[#F9F7F4] py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#003545] mb-16">
            So much more than just a digital calendar
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-[#003545] rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-8">Lumora</h3>
              <ul className="space-y-6">
                {[
                  { text: "Created by moms.", subtext: "Built from the ground up for families" },
                  { text: "Companion App", subtext: "works on iOS and Android" },
                  { text: "Free features without Membership", subtext: "including Shared Family Calendar, Unlimited Profiles, and over-the-air updates" },
                  { text: "Kid-friendly icons", subtext: "engage kids that aren't yet reading" },
                  { text: "Routines", subtext: "created by parents help kids build independence" },
                  { text: "Streaks", subtext: "help gamify consistent habits" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#00FFD5] flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#003545]" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.text}</div>
                      <div className="text-gray-300">{item.subtext}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-12">
              <h3 className="text-2xl font-bold mb-8 text-[#003545]">DIGITAL DISPLAYS</h3>
              <ul className="space-y-6">
                {[
                  "One Lumora family can sync information to 2 or more Displays",
                  "Calendar events can be shared and viewed on external calendars (Google, iCal, etc.)",
                  "Custom profile images allows families to personalize individual profiles",
                  "Research-driven behavior change to drive healthy habits as a family"
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#E6F7F4] flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#00796B]" />
                      </div>
                    </div>
                    <span className="text-gray-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engineered for everyday life Section */}
      <section className="bg-[#F9F7F4] py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="/images/hero/specs-mobile.jpg" 
                    alt="Lumora Display Features"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-[#003545] mb-8">
                  Engineered for everyday life
                </h2>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-[#003545] mb-2">Anti-glare touchscreen</h3>
                    <p className="text-gray-700">Crystal clear visibility from any angle with our premium anti-glare coating. The touchscreen remains responsive and easy to read even in bright conditions.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-[#003545] mb-2">Smart mounting system</h3>
                    <p className="text-gray-700">Built-in level and innovative wall mount design makes installation a breeze. Mount securely in minutes with included hardware.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-[#003545] mb-2">Seamless connectivity</h3>
                    <p className="text-gray-700">Dual-band Wi-Fi and Bluetooth ensure your display stays connected and synced with the companion app and your smart home devices.</p>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-xl font-semibold text-[#003545] mb-2">Clean cable management</h3>
                    <p className="text-gray-700">Thoughtfully designed power management system keeps cords tidy and hidden, maintaining the sleek aesthetic of your space.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold text-[#003545] mb-6">Technical Specs</h2>
                <div className="mb-12">
                  <h3 className="text-2xl text-[#003545] mb-4">Beautiful design meets family-first function.</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Lumora Display features a customizable frame, smudge-resistant screen, bluetooth + Wi-Fi capabilities, and more.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {specs.map((spec, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4">
                        <div className="text-gray-600">{spec.label}</div>
                        <div className="font-medium text-[#003545]">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="hidden lg:block">
                  <img 
                    src="/images/hero/specs.jpg" 
                    alt="Lumora Display Technical Specifications"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
                <div className="lg:hidden">
                  <img 
                    src="/images/hero/specs-mobile.jpg" 
                    alt="Lumora Display Technical Specifications Mobile"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="bg-[#F9F7F4] py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-[#003545]">Simple installation</h3>
              <p className="text-gray-700">
                Installing your Lumora Display takes 10 minutes or less, with all the hardware you need included. It's easier than installing most TVs.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-[#003545]">Blends in beautifully</h3>
              <p className="text-gray-700">
                With three sleek frames to choose from and any background you want, your Lumora Display will be a centerpiece you're proud to show off.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-[#003545]">Backed by experts</h3>
              <p className="text-gray-700">
                To develop Lumora Display, we collaborated with child development specialists, psychologists, and organizational experts to create research-backed solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage; 