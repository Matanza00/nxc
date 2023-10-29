import awardImg8 from '../../assets/partner/React-Symbol.png';
import awardImg9 from '../../assets/partner/nodejs_logo.png';
import awardImg2 from '../../assets/partner/WordPress-logo.png';
import awardImg3 from '../../assets/partner/Flask-logo-SMALL.png';
import awardImg4 from '../../assets/partner/sql_logo.png';
import awardImg5 from '../../assets/partner/mongodb_logo.png';
import awardImg6 from '../../assets/partner/fastapi_logo.png';
import awardImg7 from '../../assets/partner/flutter-logo-removebg-preview.png';
import awardImg from '../../assets/partner/django-logo.png';
import awardImg1 from '../../assets/partner/tailwind-logo-SMALL.png';

function BrandCarouselWeb() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <img src={awardImg} class="block w-auto" alt="Award 1" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg2} class="block w-auto" alt="Award 20" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg2} class="block w-auto" alt="Award 2" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg3} class="block w-auto" alt="Award 2" />
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
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg8} class="block w-auto" alt="Award 2" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg9} class="block w-auto" alt="Award 2" />
        </div>
        
        
      </div>
    </div>
  );
}

export default BrandCarouselWeb;
