import awardImg from '../../assets/partner/nodejs_logo.png';
import awardImg1 from '../../assets/partner/reactnative-logo-small2.png';
import awardImg2 from '../../assets/partner/sql_logo.png';
import awardImg3 from '../../assets/partner/mongodb_logo.png';
import awardImg4 from '../../assets/partner/fastapi_logo.png';
import awardImg5 from '../../assets/partner/flutter-logo-removebg-preview.png';
import awardImg6 from '../../assets/partner/Shopify-Logo.png';
import awardImg7 from '../../assets/partner/tailwind-logo-SMALL.png';


function BrandCarouselMob() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg1} class="block h-225" alt="Award 20" />
        </div>
        <div class="carousel-item active relative float-left w-full">
          <img src={awardImg} class="block h-225" alt="Award 1" />
        </div>
        
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg2} class="block h-225" alt="Award 2" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg3} class="block h-225" alt="Award 2" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg4} class="block w-auto" alt="Award 2" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg5} class="block w-auto" alt="Award 2" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg6} class="block w-auto" alt="Award 2" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg7} class="block w-auto" alt="Award 2" />
        </div>
        
        
      </div>
    </div>
  );
}

export default BrandCarouselMob;
