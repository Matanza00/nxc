import awardImg from '../../assets/partner/Microsoft-Cloud-Solution-Provider-logo.png';
import awardImg2 from '../../assets/partner/adobe-logo-removebg-preview.png';
import awardImg3 from '../../assets/partner/aws-partner-logo-removebg-preview.png';
import awardImg4 from '../../assets/partner/microsoft_azure-logo-removebg-preview.png';
import awardImg5 from '../../assets/partner/Blender-logo-removebg-preview.png';
import awardImg6 from '../../assets/partner/Unreal-Engine-New-Logo.png';
import awardImg7 from '../../assets/partner/React-Symbol.png';
import awardImg8 from '../../assets/partner/WordPress-logo.png';
import awardImg9 from '../../assets/partner/flutter-logo-removebg-preview.png';
import awardImg10 from '../../assets/partner/Shopify-Logo.png';
import awardImg11 from '../../assets/partner/Figma-logo.png';
import awardImg12 from '../../assets/partner/Godaddy-logo.png';


function AwardCarousel() {
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
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg10} class="block w-auto" alt="Award 2" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg11} class="block w-auto" alt="Award 2" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg12} class="block w-auto" alt="Award 2" />
        </div>
      </div>
    </div>
  );
}

export default AwardCarousel;
