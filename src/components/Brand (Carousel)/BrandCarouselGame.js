import awardImg from '../../assets/partner/Blender-logo-removebg-preview.png';
import awardImg2 from '../../assets/partner/Unreal-Engine-New-Logo.png';
import awardImg3 from '../../assets/partner/Figma-logo.png';
import awardImg4 from '../../assets/partner/adobe-ill-logo-SMALL.png';



function BrandCarouselGame() {
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

export default BrandCarouselGame;
