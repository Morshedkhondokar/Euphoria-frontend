import HeroSlider from "../components/home/HeroSlider";


const slides = [
  {
    eyebrow: "Summer 2026 Collection",
    title: "Modern Resort Casual",
    subtitle: "Premium shirts for the modern South Asian man. Crafted for comfort, designed for style.",
    btnText: "Shop Now",
    btnLink: "/shop",
    secondBtnText: "View All",
    secondBtnLink: "/products",
    image: "/images/slide1.jpg",
  },
  {
    eyebrow: "New Arrivals",
    title: "Elevate Your Look",
    subtitle: "Discover the latest styles curated just for you.",
    btnText: "Explore",
    btnLink: "/new",
    image: "/images/slide2.jpg",
  },
];

const Home = () => {
  
  return (
    <div className="mt-16">
      <HeroSlider slides={slides}/>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
        asperiores, soluta debitis officia quis ipsa explicabo distinctio ut
        culpa. Exercitationem corporis provident odit, quisquam neque molestias
        eum sunt veritatis ratione debitis, voluptatibus rerum, id quibusdam
        totam velit dolorum iusto! Aut modi aperiam placeat similique,
        reiciendis eligendi voluptatem quod natus, reprehenderit, dolores
        tempora quibusdam. Aliquid voluptatem eaque error molestiae quod minus!
        Alias exercitationem, perferendis sit minima sunt recusandae repudiandae
        aliquam! Quaerat, autem provident dignissimos tempora est officia
        adipisci nobis corrupti, velit a incidunt facilis modi numquam nesciunt
        fugiat, molestias repellat beatae rerum harum assumenda soluta
        praesentium impedit? Illum ipsa tenetur illo?
      </p>
    </div>
  );
};

export default Home;
