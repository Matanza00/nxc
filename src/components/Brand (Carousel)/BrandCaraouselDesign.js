import awardImg from '../../assets/partner/Figma-logo.png';
import awardImg2 from '../../assets/partner/adobe-photoshop-logo-SMALL2.png';
import awardImg3 from '../../assets/partner/adobe-ill-logo-SMALL.png';
import awardImg4 from '../../assets/partner/adobe-xd-logo-SMALL.png';


function BrandCarouselDesign() {
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
      </div>
    </div>
  );
}

export default BrandCarouselDesign;
