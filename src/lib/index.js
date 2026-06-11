import image from "../assets/gallery1.jpg";
import image1 from "../assets/gallery2.jpg";
import image2 from "../assets/gallery3.jpg";
import image3 from "../assets/springroll.jpg";
import image4 from "../assets/chops.jpg";
import image5 from "../assets/download.jpg";

export const whatsappConfig = {
  number: "09112151750", // Replace with actual number
  message: encodeURIComponent(
    "Hello Hanamon Catering Service! I visited your website and would love to get an inquiry regarding catering services for an upcoming event. Please let me know what information you need from me. Thanks!",
  ),
};

export const whatsappUrl = `https://wa.me/${whatsappConfig.number}?text=${whatsappConfig.message}`;

export const services = [
  {
    title: "Weddings",
    description:
      "Premium reception catering and custom luxury menus tailored for your special day.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Corporate Events",
    description:
      "Elegant galas, high-profile business luncheons, and seamless conference catering.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Birthday Celebrations",
    description:
      "Private milestone parties featuring vibrant, unforgettable culinary displays.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Church Programs",
    description:
      "Respectful and efficient large-scale catering for religious gatherings and special events.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Private Events",
    description:
      "Intimate home dinners, curated tasting menus, and bespoke chef-at-home experiences.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  },
];

export const galleryImages = [
  image,
  image1,
  image2,
  image3,
  image4,
  image5,
  // "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
  // "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
  // "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80",
];

export const testimonials = [
  {
    name: "Sarah & Michael Thompson",
    role: "Wedding Clients",
    text: "Hanamon Catering made our wedding reception absolutely magical. The food was exquisite, and the presentation was breathtaking. Our guests are still talking about the signature dessert bar!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Corporate Event Planner, TechVision Inc.",
    text: "For three years running, we've trusted Hanamon for our annual gala. They consistently deliver world-class cuisine with flawless execution. Their attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Pastor Emmanuel Okonkwo",
    role: "Senior Pastor, Victory Church",
    text: "Our church program with 500+ attendees was handled with excellence and respect. The team was professional, the food was delicious, and everything ran seamlessly.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    role: "Private Birthday Celebration",
    text: "Chef Hanamon created a 5-course tasting menu that left everyone speechless. The intimate chef's table experience was beyond our expectations. Highly recommend!",
    rating: 5,
  },
];
