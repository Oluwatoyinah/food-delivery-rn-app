import AuthBanner from "@/assets/images/auth-banner.png";
import FoodBanner1 from "@/assets/images/food-banner1.webp";
import FoodBanner4 from "@/assets/images/food-banner-4.webp";
import FoodBanner3 from "@/assets/images/food-banner-3.webp";
import FoodBanner2 from "@/assets/images/food-banner-2.webp";

export const images = { AuthBanner };

export const onBoarding = [
  {
    id: 1,
    title: "Welcome to TyFood",
    description:
      "Discover delicious food from your favorite restaurants delivered right to your door. Let’s get started!",
    banner: FoodBanner1,
  },
  {
    id: 2,
    title: "Explore Local Flavors",
    description:
      "Browse a wide selection of cuisines and find your next meal. From pizza to sushi, we’ve got it all!",
    banner: FoodBanner2,
  },
  {
    id: 3,
    title: "Order In Just a Few Clicks",
    description:
      "Enjoy a seamless ordering experience with our user-friendly interface. Your next meal is just a tap away!",
    banner: FoodBanner3,
  },
  {
    id: 4,
    title: "Lightning Fast Delivery",
    description:
      "Our dedicated delivery team is ready to bring your food to you quickly and safely. Get ready to dig in!",
    banner: FoodBanner4,
  },
];
