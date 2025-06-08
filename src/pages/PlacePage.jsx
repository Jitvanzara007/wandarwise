import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { countries } from "../data/countries.jsx";
import {
  FiArrowRight,
  FiMapPin,
  FiStar,
  FiClock,
  FiCalendar,
  FiDollarSign,
  FiInfo,
  FiX,
  FiMap,
  FiSun,
  FiThermometer,
  FiLoader,
  FiCheck,
} from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const PlacePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [place, setPlace] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      dragFree: false,
      draggable: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedImageIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    // First try to get place data from navigation state
    if (location.state?.place) {
      setPlace(location.state.place);
      return;
    }

    // If no state, find the place in the countries data
    let foundPlace = null;
    let cityName = "";
    let countryName = "";
    let countryId = "";

    for (const country of countries) {
      for (const city of country.cities || []) {
        const placeInCity = city.places?.find((p) => {
          const placeId = String(p.id).toLowerCase();
          const searchId = String(id).toLowerCase();
          return (
            placeId === searchId || p.name?.toLowerCase().includes(searchId)
          );
        });
        if (placeInCity) {
          foundPlace = placeInCity;
          cityName = city.name;
          countryName = country.name;
          countryId = country.id;
          break;
        }
      }
      if (foundPlace) break;
    }

    // Debug: Log the found place and its fields
    if (foundPlace) {
      console.log("DEBUG: Found place for id", id, foundPlace);
    } else {
      console.error("DEBUG: No place found for id", id);
    }

    if (foundPlace) {
      setPlace({
        ...foundPlace,
        cityName,
        countryName,
        countryId,
      });
      // Debug: Log the final place object
      console.log("DEBUG: Final place object set in state", {
        ...foundPlace,
        cityName,
        countryName,
        countryId,
      });
    } else {
      console.error("Place not found:", id);
      navigate("/countries");
    }

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id, navigate, location.state]);

  // Place-specific galleries
  const placeGalleries = {
    "sensoji-temple": [
      "https://i.pinimg.com/originals/42/26/d7/4226d73eb81a2acb51e86939d63c94c4.jpg",
      "https://tse3.mm.bing.net/th?id=OIP.SE-0Q7foc6YunqMTNMRPgwHaE8&pid=Api&P=0&h=180",
      "https://cdn.contexttravel.com/image/upload/w_1500,q_60/v1684373090/blog/Discovering%20Asakusa%2C%20Tokyo%27s%20Historic%20Neighborhood/Asakusa%20Blog%20Post/1.jpg",
      "https://www.touristinjapan.com/wp-content/uploads/2018/06/39574872171_e8020cece7_k.jpg",
    ],
    "tokyo-tower": [
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    ],
    "shibuya-crossing": [
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80",
    ],
    "tsukiji-market": [
      "https://thecreativeadventurer.com/wp-content/uploads/2017/09/img_5e17ee0dd47e5-1500x1000-1.jpg",
      "https://middleclass.sg/wp-content/uploads/2022/12/Maguroya-Kurogin-Tsukiji-Market.jpg",
      "https://media.istockpicture.com/id/2058342237/photo/tsukiji-outer-market-in-tokyo-japan.jpg?s=612x612&w=0&k=20&c=OvY60P0SL4o5a2X_IaOZcyDTPvCUmMoKaZ0a0H-4yGI=",
      "https://www.urtrips.com/wp-content/uploads/2022/10/Tsukiji-Outer-Market-Tokyo_2.jpg",
    ],
    "fushimi-inari": [
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://static.333travel.nl/web-images/06/2019/5cf7e45b191f7/japan-kyoto-fushimi-inari-shrine-4.jpeg",
      "https://st.depositphotos.com/1980693/4138/i/950/depositphotos_41381419-stock-photo-fushimi-inari-taisha-shrine-in.jpg",
      "https://1.bp.blogspot.com/-DKxHENWaCJU/YE7ygnVfP7I/AAAAAAAAobs/bXMk9veRjFkbtXz3Cvd5gfVVxtpQNDU6gCLcBGAsYHQ/s1920/1.jpg",
    ],
    "kinkaku-ji": [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fhttps://images7.alphacoders.com/522/522070.jpg",
      "https://www.encirclephotos.com/wp-content/uploads/Japan-Kyoto-Kinkaku-ji-Golden-Pavilion-1440x961.jpg",
      "https://www.japan-guide.com/g18/3908_top.jpg",
    ],
    "arashiyama-bamboo": [
      "https://mykyotophoto.com/wp-content/uploads/2016/01/150824_Kyoto-Arashiyama-Bamboo-Grove-810373.jpg",
      "https://photos.smugmug.com/Kyoto/Arashiyama-Walking-Tour/i-VF7rCVc/0/aa45cc6c/L/shutterstock_704364358-L.jpg",
      "https://i.pinimg.com/originals/ca/60/6b/ca606b0fad13c4571438225d096a14c2.jpg",
    ],
    "kiyomizu-dera": [
      "https://a.cdn-hotels.com/gdcs/production188/d1098/f58c71c1-3e16-4bbd-840b-676482ccbfd5.jpg",
      "https://a.cdn-hotels.com/gdcs/production184/d1612/12c8731c-afae-4a11-a3e3-e792eaa16061.jpg",
      "https://live.staticflickr.com/65535/51365042302_e80fac885f_b.jpg",
      "https://cdn.pixabay.com/photo/2020/08/22/21/44/temple-5509448_1280.jpg",
    ],
    "osaka-castle": [
      "https://i.pinimg.com/originals/17/3d/1f/173d1f141dd11a9374c3927dad4c9e03.jpg",
      "https://wallpapers.com/images/hd/osaka-castle-bridge-cma74iqo19xdhawb.jpg",
      "https://live.staticflickr.com/65535/52817133745_f5bf2b5c1e_b.jpg",
    ],
    dotonbori: [
      "https://guide.en-vols.com/wp-content/uploads/aftg/2022/02/GettyImages-1138049211_Osaka_MED.jpg",
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/492000/492069-dotonbori.jpg",
      "https://cdn1.katadata.co.id/media/images/temp/2023/10/18/Dotonbori-2023_10_18-21_12_36_14b79bfd2c3bc22f37145a2afbcf49f0.jpg",
      "https://i0.wp.com/www.theculturemap.com/wp-content/uploads/2020/05/two-days-in-osaka-dotonbori-best-places.jpg",
    ],
    "eiffel-tower": [
      "/src/assets/effieltower.png",
      "http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/09/eiffel-tower-1.jpg",
      "https://wallpapercave.com/wp/wp3948290.jpg",
      "http://www.pixelstalk.net/wp-content/uploads/2016/06/Free-eiffel-tower-wallpaper.jpg",
    ],
    "louvre-museum": [
      "https://media.cntraveler.com/photos/5ec3000a557e8346a0651316/master/w_1600%2Cc_limit/TheLouvreMuseum-Paris-GettyImages-1193604575.jpg",
      "/src/assets/louvre-museum.png",
      "https://www.fodors.com/wp-content/uploads/2019/08/07_TheLouvre101__ShouldIBuymyTickets_shutterstock_746133424.jpg",
      "http://3.bp.blogspot.com/-kgKvmVcVSkg/UblmUJOvl0I/AAAAAAAAOyM/UNxifu31_fc/s1600/Louvre+interior+design.jpg",
    ],
    "promenade-des-anglais": [
      "https://www.laterlite.com/wp-content/uploads/2021/02/promenade-nizza-latermix-cem-classic-6.jpg",
      "https://a.cdn-hotels.com/gdcs/production67/d1598/ef47e715-d543-4f3e-b13e-4f3e65fd9722.jpg",
      "https://perfectlyprovence.co/wp-content/uploads/2017/04/Promenade-des-Anglais-Nice-Walkers.jpg",
      "https://a.cdn-hotels.com/gdcs/production13/d6/710e35f1-6e7f-45a9-b657-39f9722a84a7.jpg",
    ],
    "basilique-notre-dame": [
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/basilica-of-notre-dame-de-nice-interior-artur-bogacki.jpg",
      "https://pohcdn.com/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2023-01/basilica-of-notre-dame-de-nice.jpg",
      "https://www.wanderingbaboon.com/wp-content/uploads/2020/10/ccimage-shutterstock_222715771.jpg",
      "https://live.staticflickr.com/65535/52817784035_9a8c098a99_b.jpg",
    ],
    "place-de-la-bourse": [
      "https://img.fotocommunity.com/bordeaux-place-de-la-bourse-7dcaf55d-3593-4e0b-aa69-e532a3b4f82a.jpg?height=1080",
      "https://www.franciaturismo.net/wp-content/uploads/sites/4/bordeaux-specchio-acqua-place-de-la-bourse.jpg",
      "https://www.atterrir.com/wp-content/uploads/2015/09/9769214661_9c38fdcc6e_k.jpg",
      "https://thumbs.dreamstime.com/b/tram-place-de-la-bourse-bordeaux-france-gironde-91290448.jpg",
    ],
    "cite-du-vin": [
      "https://images.sudouest.fr/2015/12/10/57e0ffc366a4bde778c5d4d4/default/le-projet-beneficiera-d-un-tout-nouveau-site-internet-en-debut-d-annee-2016.jpg",
      "https://images.sudouest.fr/2016/05/25/57e1076e66a4bde778cbbcbc/default/1000/six-bouteilles-geantes-dediees-aux-grandes-familles-du-vin.jpg",
      "https://images.sudouest.fr/2016/05/25/57e1076e66a4bde778cbbcbc/default/1000/six-bouteilles-geantes-dediees-aux-grandes-familles-du-vin.jpg",
      "https://www.sudissimo.com/wp-content/uploads/2016/05/cite-du-vin-interieur-bordeaux-1024x603.jpg",
    ],
    "mont-saint-michel": [
      "https://www.catholicnewsagency.com/images/shutterstock-1466597783.jpg?jpg",
      "https://thumbs.dreamstime.com/b/interior-church-abbey-mont-saint-michel-france-august-has-been-protected-as-french-monument-44292782.jpg",
      "https://www.airpano.ru/files/saint_michel_02_big.jpg",
      "https://thumbs.dreamstime.com/b/mont-saint-michel-abbey-france-world-famous-abbey-mont-saint-michel-france-267889054.jpg",
    ],
    "medieval-village-mont-saint-michel": [
      "https://photos.smugmug.com/Normandie-Lovers/Mont-saint-michel/Remparts/i-HB4dmhP/0/101b0ec9/L/remparts_mont_saint_michel-31-L.jpg",
      "https://littleweekends.fr/wp-content/uploads/2020/03/Village-medieval-Mont-Saint-Michel.jpg",
      "https://photos.smugmug.com/photos/i-Ph5JwnK/1/L/i-Ph5JwnK-L.jpg",
      "https://images.musement.com/cover/0003/92/thumb_291674_cover_header.jpeg",
    ],
    "lavender-fields-valensole": [
      "https://bucketlistbri.com/wp-content/uploads/2020/04/DSC06116-min-1080x675.jpg",
      "http://slowtraveltours.com/wp-content/uploads/2014/08/lavender_field_valensole_plateau_provence_france.jpg",
      "https://img.freepik.com/premium-photo/lavender-fields-valensole-provence-france-ai-generated_538213-11430.jpg",
      "https://as1.ftcdn.net/v2/jpg/01/61/54/48/1000_F_161544834_omhtFzmSA4hYgompPs9nOeIEE1iG0s8e.jpg",
    ],
    "aix-en-provence": [
      "https://images.ctfassets.net/bth3mlrehms2/19bDzytF4BAVAFlg1aKZso/008f0f9ddef3996f3d3d0356d21da869/iStock-612255330.jpg?w=3680&h=2456&fl=progressive&q=50&fm=jpg",
      "https://thumbs.dreamstime.com/b/aix-en-provence-city-france-june-central-square-cafes-bars-old-town-south-78282795.jpg",
      "https://images.musement.com/cover/0001/74/thumb_73820_cover_header.png?&q=60&fit=crop",
      "https://cdn.generationvoyage.fr/2021/01/guide-aix-en-provence.jpg",
      "https://cdn.thecrazytourist.com/wp-content/uploads/2021/06/ccimage-shutterstock_615557792.jpg",
    ],
    "burj-khalifa": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://cdn.urlaubsguru.at/wp-content/uploads/2019/04/iStock-183346577.jpg",
      "https://4.bp.blogspot.com/-gdL9SiYCsMI/U24bmbCD_nI/AAAAAAAAN5Y/SZ9magvUEE8/s1600/Burj+Khalifa+New+Wallpapers+(2).jpg",
      "https://cdn.pixabay.com/photo/2020/03/11/14/32/burj-khalifa-4922317_1280.jpg",
    ],
    "palm-jumeirah": [
      "https://media.radissonhotels.net/image/radisson-beach-resort-palm-jumeirah-dubai/beach/16256-147704-f75263259_3xl.jpg?impolicy=HomeHero",
      "https://shre.ae/wp-content/uploads/2022/12/Palm-Jumeirah-Views-Luxury-Sea-view-apartments-for-Sale-in-Dubai-Sobha-Seahaven.jpg",
      "https://www.dubaitravelplanner.com/wp-content/uploads/2020/09/W_Dubai_DXBTP_105581106_dxbtp-wet-deck-pool-7749-hor-clsc.jpg",
      "https://do84cgvgcm805.cloudfront.net/article/594/1200/9f68110858ca5df485574c2ef9bfa091887c1822762bb9d95dc49ca96559bcbd.jpg",
      "https://pix10.agoda.net/hotelImages/223/2238751/2238751_17051512570052989686.jpg?s=1024x768",
    ],
    "dubai-mall": [
      "https://www.telegraph.co.uk/content/dam/Travel/hotels/middle-east/united-arab-emirates/dubai/dubai-shopping-guide-lead.jpg",
      "https://www.visitdubai.com/-/media/gathercontent/poi/t/the-dubai-mall/fallback-image/the-dubai-mall-poi-shutterstock.jpg",
      "https://images.ctfassets.net/wdjnw2prxlw8/4kZjac0MOm8yI3jFg4jOCK/721abfa90557c1169d42c5fd3081df99/the_dubai_mall_interior.jpg",
      "https://www.travoh.com/wp-content/uploads/2022/12/Dubai-Aquarium-And-Underwater-Zoo-The-Dubai-Mall.jpg",
      "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/dacnmqHT-dubais-best-malls-1.jpg",
    ],
    "sheikh-zayed-mosque": [
      "https://images3.alphacoders.com/804/thumb-1920-804430.jpg",
      "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/domes-minaret-and-pillars-in-Sheikh-Zayed-Grand-Mosque.jpg",
      "https://wareontheglobe.com/wp-content/uploads/2023/01/IMG_7882-1-1024x768.jpeg",
      "https://mydubai.media/wp-content/uploads/2023/10/image-16.jpg",
    ],
    "ferrari-world": [
      "https://www.wideworldtrips.com/wp-content/uploads/2021/07/ferrari-world-abu-dhabi-2.jpg",
      "https://www.ctctourism.com/image/catalog/14062022/FW5.jpg",
      "https://www.emiradosarabesunidos.net/wp-content/uploads/2019/05/Ferrari-Abu-Dhabi-1.jpg",
      "https://car-images.bauersecure.com/wp-images/5868/0000866dbbdb-1be0-456d-a.jpg",
      "http://www.expatmedia.net/wp-content/uploads/2019/02/ferrari1.jpg",
    ],
    colosseum: [
      "https://cdn1.matadornetwork.com/blogs/1/2023/02/Colosseum-Rome-arena-inside.jpg",
      "https://help-tourists-in-rome.com/wp-content/uploads/2019/08/ROM_Kollossem-Vorplatz.jpg",
      "https://romesite.com/images/colosseum-rome.jpg",
      "https://origenoticias.com/wp-content/uploads/2015/06/Coliseo-romano-3.jpg",
    ],
    "vatican-museums": [
      "https://i.pinimg.com/originals/d6/2c/70/d62c70632eaec730b36b1c03a7145f33.jpg",
      "https://www.italyguides.it/images/gridfolio/rome/vatican-museums/vatican.museums.120.jpg",
      "https://www.fodors.com/wp-content/uploads/2018/10/5_UltimateRome_VaticanMuseum.jpg",
      "https://www.italyguides.it/images/gridfolio/rome/vatican-museums/vatican.museums.090.jpg",
      "https://www.vaticanmuseumsrome.com/images/pinacoteca-vatican-museums.jpg",
    ],
    "trevi-fountain": [
      "https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/06/dest_italy_rome_trevi_fountain_gettyimages-1046369134_universal_within-usage-period_88946.jpg",
      "https://www.tripsavvy.com/thmb/zbeV0xRNDsQb4qHZW_jIsFFbsA8=/2256x1496/filters:fill(auto,1)/DSC_0017-5c76c3edc9e77c0001f57b49.jpg",
      "http://www.directsupplynetwork.org/wp-content/uploads/the_trevi_fountain_of_rome.jpg",
      "https://www.benvenutolimos.com/blog/wp-content/uploads/2017/11/00-story-image-trevi-fountain-rome-runs-red.jpg",
    ],
    "st-marks-square": [
      "http://images.trvl-media.com/media/content/shared/images/travelguides/destination/179981/St-Marks-Square-84108.jpg",
      "https://www.zastavki.com/pictures/originals/2017Cities_St._Mark_s_Square_in_Venice_112885_.jpg",
      "https://d3e1m60ptf1oym.cloudfront.net/2ace1cc2-4fcb-4365-b548-942c1e6439ea/M47428-FR-01_uxga.jpg",
      "https://www.venicetraveltips.com/wp-content/uploads/2023/06/st-marks-square-venice.jpg",
    ],
    "grand-canal": [
      "https://imgcld.yatra.com/ytimages/image/upload/v1482473037/Venice_Grand_Canal.jpg",
      "https://visit-venice-italy.global.ssl.fastly.net/pics/bridges_venice/rialto-bridge-in-venice-italy-06.jpg",
      "https://imagesofvenice.com/wp-content/uploads/2020/10/ven_grand-canal-feature-3-blog.jpg",
      "https://cdn.tourcms.com/a/6659/18/3/large.jpg",
    ],
    "uffizi-gallery": [
      "https://www.miamibeb.com/wp-content/uploads/2021/08/uffizi-gallery-royalty-free-image-1570792563.jpg",
      "https://thetourguy.com/wp-content/uploads/2020/10/Uffizi-gallery-florence-feature-1440-675.jpg",
      "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/179893/Uffizi-Gallery-Galleria-Degli-Uffizi-31663.jpg",
      "https://www.canonburyantiques.com/ckfinder/userfiles/images/The%20Tribuna%20-%20Uffizi%20Gallery%20Florence%20Canonbury%20Antiques.jpg",
      "https://thetourguy.com/wp-content/uploads/2021/12/Is-it-worth-doing-a-tour-of-the-Uffizi-Gallery-1440-x-675.jpg",
    ],
    "sagrada-familia": [
      "https://4.bp.blogspot.com/-ML-dXdisX-o/VsDiSdkE3WI/AAAAAAAAXgI/5BIyn8qEgsM/s1600/BARCELONA-SAGRADA-FAMILIA-NAU-PRINCIPAL.jpg",
      "https://cdn.britannica.com/38/122138-050-B556649B/Antoni-Gaudi-Temple-Expiatori-de-la-Sagrada-Familia-Barcelona-Spain.jpg",
      "http://www.barcelonacheckin.com/img/stored_images/barcelona/articles_images/Inside.jpg",
      "https://cdn.citywonders.com/media/16601/gaudi-sagrada-familia-barcelona.jpg",
    ],
    "park-guell": [
      "https://www.reisroutes.be/userfiles/fotos/park-g-252-ell_1784_xl.jpg",
      "https://www.magicdreamsbarcelona.com/wp-content/uploads/2022/01/guell-park-g7f7320d6d_1920-copia.jpg",
      "https://a.cdn-hotels.com/gdcs/production192/d1884/c260d3fd-142b-445d-9e39-72a3dc0442a4.jpg",
      "https://i.pinimg.com/originals/a3/57/c6/a357c68bfe4e771813bf6d5dd72563d4.jpg",
    ],
    "casa-batllo": [
      "https://www.femturisme.cat/_fotos/establiments/general/12116-02-Casa-Batllo-Barcelona-Antoni-Gaudi.jpg",
      "https://randomtrip.net/wp-content/uploads/2023/08/z-portada-patio-de-luces-casa-batllo-1-2.jpg",
      "https://barcelona-home.com/blog/wp-content/upload/2013/09/casa_batllo_21.jpg",
      "https://www.bcn.travel/wp-content/uploads/casa-batllo-facade.jpg",
    ],
    "la-rambla": [
      "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/09/plaza-de-catalunya.jpg",
      "https://cdn.getyourguide.com/img/tour/5cebb18a05387.jpeg/145.jpg",
      "https://cdn-imgix.headout.com/microbrands-content-image/image/ce2c18a54e0228f9cf4fdbcccf41f74a-la%20rambla.jpg",
      "https://guidetourism.net/wp-content/uploads/2023/03/0The-La-Rambla-most-famous-street-in-Barcelona.jpg",
    ],
    "prado-museum": [
      "https://static01.nyt.com/images/2019/01/30/arts/30PRADO-3/29PRADO-3-videoSixteenByNineJumbo1600.jpg",
      "https://images.musement.com/cover/0002/22/thumb_121543_cover_header.jpeg?&q=60&fit=crop",
      "https://www.citylifemadrid.com/wp-content/uploads/prado2.jpg",
      "https://cdn-imgix.headout.com/tour/14488/TOUR-IMAGE/302311a1-f1af-4ffb-a22a-0dd09c267896-7920-madrid-prado-a-royal-collection-03.jpg?fm=pjpg&auto=compress&w=1200&crop=faces&fit=min",
      "https://d36tnp772eyphs.cloudfront.net/blogs/1/2017/06/Inside-the-Museo-del-Prado.jpg",
    ],
    "retiro-park": [
      "https://a.cdn-hotels.com/gdcs/production84/d314/ef4c0fcd-c07e-41c2-b847-774f1eccaa73.jpg",
      "https://a.cdn-hotels.com/gdcs/production86/d1205/3596db38-0609-4f0d-b7be-1a98527384c6.jpg",
      "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178281/El-Retiro-Park-50963.jpg",
      "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178281/El-Retiro-Park-50965.jpg",
    ],
    "plaza-mayor": [
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://www.tripsavvy.com/thmb/Ell2hp1DNZaHLelpv0n_dN0caqw=/5525x0/filters:no_upscale():max_bytes(150000):strip_icc()/Madrid-PlazaMayor-1-b337c8860dee4a30a4165096ac059c45.jpg",
      "https://www.10posti.it/photos/spain-madrid-main-square-plaza-mayor-2.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/ca/e4/d7/caption.jpg?w=1400&h=-1&s=1",
    ],
    "manchester-art-gallery": [
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article8373569.ece/ALTERNATES/s1227b/JS50586251.jpg",
      "https://www.reisroutes.be/userfiles/fotos/manchester-art-gallery-bezoeken-manchester_39276_xl.jpg",
      "https://www.mancunianmatters.co.uk/wp-content/uploads/2021/08/Uncertain-Futures-installation-in-Manchester-Art-Gallery-Photo-Andrew-Brooks_12-970x605.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjurfwuzkV2dvJkHx8Qw9V3ERMDsdtcg2CvkX2pCv9k0CppR2I7ovGguF3sqpXgoD-4sPWjkCHZ-y-rrnnhwwjuuW3BbiKwmNmc48rv6xu7Na01WVPRe298iWJrqKwXx_5FUEXOTTOSJufMR6PJMlq-CSynHNyhe-W4L433jSACRN1GG1BIkeSlGeyo-A/s1400/Dandy_Style_Decorated_Dandy_Exhibition.jpg",
    ],
    alcazar: [
      "https://s.inyourpocket.com/gallery/seville/2019/09/real-alcazar-patio-doncellas-sevilla-59184254-istock.jpg",
      "https://pixelz.cc/wp-content/uploads/2019/03/royal-alcazar-of-seville-palace-seville-spain-uhd-4k-wallpaper.jpg",
      "https://www.thediscoveriesof.com/wp-content/uploads/2018/07/Alcazar-Seville-6.jpg",
      "https://cdn-imgix.headout.com/tour/19842/TOUR-IMAGE/7f9e452b-50fe-4819-afcc-f286c3cd7867-10643-seville-skip-the-line-royal-alcazar-09.jpg",
      "https://sevillecityguide.com/images/seville-spain.jpg",
    ],
    "seville-cathedral": [
      "https://www.adrianohotel.com/img/textareas/Historia-de-la-Catedral-de-Sevilla.jpg",
      "https://images.musement.com/cover/0048/31/seville-cathedral-4-jpeg_header-4730502.jpeg",
      "https://spainguides.com/wp-content/uploads/2021/03/Seville_Cathedral.jpg",
      "https://multimedia.andalucia.org/media/30C5694873514DF5BFE17164EAF1B940/img/D7A3268E8AA94F1594FAC32FB03380E3/1611304799973slider-interior-catedral7909304964114478417.jpg?responsive",
    ],
    alhambra: [
      "https://www.origenonline.es/wp-content/uploads/2020/07/La-Alhambra-de-Granada-2-FILEminimizer.jpg",
      "https://ychef.files.bbci.co.uk/976x549/p05d1gkg.jpg",
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2022/09/23/232462.jpg",
      "https://cdn-imgix.headout.com/media/images/58da77effa54b9c430bbabfd2a54f135-Alhambra%20Granada.jpeg?auto=format&w=814.9333333333333&h=458.4&q=90&fit=crop&ar=16:9",
    ],
    albaicin: [
      "https://i1.wp.com/notaboutthemiles.com/wp-content/uploads/2018/10/granada-3107980_1920.jpg?ssl=1",
      "https://touristjourney.com/wp-content/uploads/2020/12/Stroll-through-the-ancient-streets-of-Albaicin-on-the-Alhambra-Albaicin-Granada-Old-Town-tour-from-Granada-scaled.jpg",
      "https://www.andalusietop10.nl/wp-content/uploads/sites/2/2020/09/granada-albaicin.jpg",
      "https://touristjourney.com/wp-content/uploads/2020/09/Explore-Granadas-Old-Town-on-the-scaled.jpg",
    ],
    "dalt-vila": [
      "https://discoveribiza.com/wp-content/uploads/2019/03/Dalt-Vila-at-nightime-870x420.jpg",
      "https://www.andalucia.org/media/2019/01/dalt-vila-granada.jpg",
      "https://www.granadainfo.com/images/dalt-vila/dalt-vila-granada.jpg",
      "https://www.granadainfo.com/images/dalt-vila/dalt-vila-mirador-san-nicolas.jpg",
      "https://www.granadainfo.com/images/dalt-vila/dalt-vila-calle.jpg",
    ],
    "cala-comte": [
      "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/03/paisaje-cala-conta.jpg",
      "https://www.boatsibiza.com/wp-content/uploads/2018/08/Cat-Milton-Cala-Conta-1.jpg",
      "https://cancurreu.com/images/recursos/noticias-2024/hamacas-y-sombrillas-de-cala-comte-ibiza.jpg",
      "https://gezievreni.com/wp-content/uploads/2018/02/Cala-Comte-%C4%B0biza.jpg",
    ],
    //thailand
    "grand-palace": [
      "https://thecreativeadventurer.com/wp-content/uploads/2020/04/Bangkok-Grand-Palace07.jpg",
      "https://www.exploreshaw.com/wp-content/uploads/2018/06/DSCF6576.jpg",
      "https://destinationtheworld.co/wp-content/uploads/2023/01/d91f9918-aa7e-45aa-9fe3-b25f61dbe8ad.jpg",
      "https://i0.wp.com/magic-places.ch/wp-content/uploads/2014/05/Grand-Palace-Bangkok.jpg?ssl=1",
    ],
    "wat-arun": [
      "https://img3.oastatic.com/img2/77047234/max/variant.jpg",
      "https://www.exploreshaw.com/wp-content/uploads/2018/06/DSCF6802.jpg",
      "https://www.bring-you.info/wp-content/uploads/2023/01/wat-arun-16-900x675.jpg",
      "https://4.bp.blogspot.com/-Y2OhvAaIAgo/VlpnlwVIMBI/AAAAAAAARbM/4z_Q_Sx6lZk/s1600/Wat%2BArun%2BBangkok.jpg",
    ],
    "chatuchak-market": [
      "https://www.thatbangkoklife.com/wp-content/uploads/2020/02/chatuchak-market-guide1.jpg",
      "https://www.stayhotelbkk.com/wp-content/uploads/2017/10/shutterstock_326772830-1024x683.jpg",
      "https://www.agoda.com/wp-content/uploads/2024/02/Bangkok-Chatuchak-Market.jpg",
      "https://thecitylane.com/wp-content/uploads/2023/04/X1003282.jpg",
    ],
    "patong-beach": [
      "https://a.cdn-hotels.com/gdcs/production117/d994/8246449d-c344-4459-b57f-9e6b8aa57660.jpg",
      "https://a.cdn-hotels.com/gdcs/production85/d968/a61c5327-52ee-4359-a566-a1bcbfa850c7.jpg",
      "https://www.flyinghighonpoints.com/wp-content/uploads/2019/02/IMG_6795.jpg",
      "https://content.phuket101.net/wp-content/uploads/20170722181914/patong-copy-2.jpg",
    ],
    "big-buddha": [
      "https://www.easybook.com/images/destination/Thailand/Phuket/PhuketBigBuddha/PhuketBigBuddha2.jpg",
      "https://content.phuket101.net/wp-content/uploads/20200531202116/how-to-go-to-big-buddha-phuket.jpg",
      "https://i.ytimg.com/vi/Qd-j0RysrWQ/maxresdefault.jpg",
    ],
    "wat-phra-singh": [
      "https://thrillingtravel.in/wp-content/uploads/2018/08/Wat-Phra-Singh_Chiang-Mai-1024x683.jpg",
      "https://live.staticflickr.com/8215/8409715161_186d656c9a_b.jpg",
      "https://catmotors.net/wp-content/uploads/2022/05/Chiang-Mai-Travel-Guide.jpg",
    ],
    "doi-suthep": [
      "https://kohplanner.com/wp-content/uploads/2023/05/Doi-Suthep-Pui-National-Park-2.jpg",
      "https://content.api.news/v3/images/bin/eb7e1fd367628a4cc9f8d09ff4fcc94a",
      "https://www.novo-monde.com/Images/articles/doi-suthep/panorama-chiang-mai.jpg",
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_800,f_auto/w_74,x_13,y_13,g_south_west,l_klook_water/activities/gnab2soauicyucq4faax/+",
    ],
    //australia
    "sydney-opera-house": [
      "https://media3.architecturemedia.net/site_media/media/cache/72/ba/72ba30ae39da2bd619901670e502d2cd.jpg",
      "https://images7.alphacoders.com/428/428368.jpg",
      "https://static.dezeen.com/uploads/2022/09/sydney-opera-house-concert-hall-renewal-arm-architecture-daniel-boud_dezeen_2364_hero.jpg",
      "https://www.oceaniepourleszeros.com/wp-content/uploads/2023/08/Sydney-Opera-House-.webp",
    ],
    "bondi-beach": [
      "https://chilby.com.au/image/cache/data/cpsnswap1-1024x684.jpg",
      "https://www.bondi38.com.au/wp-content/uploads/2023/01/bondi-beach-australia.jpg",
      "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178312/Bondi-Beach-31100.jpg",
      "https://foundtheworld.com/wp-content/uploads/2017/02/Bondi-Beach-1.png",
    ],
    "harbour-bridge": [
      "https://cdn.britannica.com/33/155133-050-962670B6/Sydney-Harbour-Bridge-Australia-Syndey.jpg",
      "https://www.bridgeclimb.com/getmedia/cb0b32c9-3a4b-477e-bf5a-483094417413/bridgeclimb-summit-climb-route-sydney-harbour-bridge-cp.jpg",
      "https://mysydneydetour.com/wp-content/uploads/2022/04/Sydney-Harbour-bridge-at-sunset.jpg",
      "https://d3e1m60ptf1oym.cloudfront.net/e06423e2-42ab-4055-b42e-2209ce679686/150714-A335_uxga.jpg",
    ],
    "great-ocean-road": [
      "https://www.melbournebuscharters.com.au/wp-content/uploads/2019/08/melbourne-bus-hire-1.jpg",
      "https://images.myguide-cdn.com/melbourne/companies/from-great-ocean-road-12-apostles-full-day-tour/large/from-great-ocean-road-12-apostles-full-day-tour-600604.jpg",
      "https://www.travelforever.com.au/wp-content/uploads/2018/02/3D-Great-Ocean-Road-9.jpg",
      "https://wildlifetours.com.au/wp-content/uploads/adelaide-to-melbourne-great-ocean-road-tour.webp",
    ],
    "federation-square": [
      "https://www.ytravelblog.com/wp-content/uploads/2014/03/melbourne-5-050.jpg",
      "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178283/Federation-Square-39872.jpg",
      "https://livingnomads.com/wp-content/uploads/2019/03/18/Federation_Square_Melbourne.jpg",
    ],
    "surfers-paradise": [
      "https://www.agoda.com/wp-content/uploads/2020/08/Surfers-Paradise-things-to-do-in-Gold-Coast-Australia.jpg",
      "https://www.aquaduck.com.au/wp-content/uploads/2020/07/PNR_SURFERS-PARADISE-ALLIANCE_2019-1-large.jpg",
      "https://beachtraveldestinations.com/wp-content/uploads/2016/05/Surfers-Paradise.jpg",
    ],
    'dreamworld': [
      "https://www.ytravelblog.com/wp-content/uploads/2014/06/Dreamworld-Gold-Coast-Australia.jpg",
      "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/6053143/Dreamworld-54742.jpg",
      "https://www.ytravelblog.com/wp-content/uploads/2014/06/Dreamworld-122.jpg",
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_696,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ginecgaoq0muvoiewkcx/DreamworldEntryTicketinGoldCoast.jpg",
    ],
    "kings-park": [
      "http://images.trvl-media.com/media/content/shared/images/travelguides/destination/180013/Kings-Park-And-Botanic-Garden-40092.jpg",
      "https://crew-explorer.com/wp-content/uploads/2013/08/Kings-Park-and-Botanic-Garden-Perth-Australia.jpg",
      "https://i.pinimg.com/originals/ef/d1/9f/efd19f17005637f613c20df2f440df99.jpg",
    ],
    "rottnest-island": [
      "https://www.ytravelblog.com/wp-content/uploads/2015/01/Rottnest-Island-Western-Australia-12.jpg",
      "https://freedomdestinations.co.uk/wp-content/uploads/Rottnest-Island-Western-Australia5-700x465.jpg",
      "https://www.ytravelblog.com/wp-content/uploads/2015/01/Rottnest-Island-Western-Australia-75.jpg",
    ],
    "great-barrier-reef": [
      "https://pacifichotelcairns.com.au/wp-content/uploads/2019/05/reef-1.jpg",
      "https://www.cairns-australia.com/media/images/gallery/gallery-reef.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/20/e6/24.jpg",
    ],
    "daintree-rainforest": [
      "https://cairnstour.com.au/files/2015/11/daintree-rainforest.jpg",
      "https://www.cairnsholidayspecialists.com.au/shared_resources/media/one-of-many-creeks-in-the-daintr-26096_960x960.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/df/2d/8b.jpg",
    ],
    "ayers-rock": [
      "https://www.jetstar.com/_/media/destinations/images/australia/ayers-rock-uluru/poi/121760-51.jpg?rev=7ad7144ea48546d3b9f63786c4cb5cd8&w=320&rc=1&cw=320&ch=200&cx=0&cy=0&hash=6E3DD759393D6AF60975EB7A3769A9D235F5919C%20320w,/_/media/destinations/images/australia/ayers-rock-uluru/poi/121760-51.jpg?rev=7ad7144ea48546d3b9f63786c4cb5cd8&w=480&rc=1&cw=480&ch=300&cx=0&cy=0&hash=D4F3CCAD60D0C044D5FCC3BFA1CA45F17E60D459%20480w,/_/media/destinations/images/australia/ayers-rock-uluru/poi/121760-51.jpg?rev=7ad7144ea48546d3b9f63786c4cb5cd8&w=640&rc=1&cw=640&ch=400&cx=0&cy=0&hash=17A527B37CA9EB9B154862C2D810D5F55ED83EE9%20640w,/_/media/destinations/images/australia/ayers-rock-uluru/poi/121760-51.jpg?rev=7ad7144ea48546d3b9f63786c4cb5cd8&w=720&rc=1&cw=720&ch=450&cx=0&cy=0&hash=887BB472E91399900188CDB58B4CCA71FC079DD1%20720w",
      "http://www.exploreshaw.com/wp-content/uploads/2020/08/Webp.net-compress-image-5.jpg",
      "https://www.gannett-cdn.com/-mm-/47ee2e93153b2ae49539b6b33110bd2eac7a66e7/c=0-141-2118-1338/local/-/media/2018/04/13/USATODAY/USATODAY/636592477387543798-Uluru---Visitors-stand-spellbound-and-transfixed-by-the-sheer-beauty.jpg?width=2118&height=1197&fit=crop&format=pjpg&auto=webp",
    ],
    "kata-tjuta": [
      "https://cdn.audleytravel.com/-/-/79/165782-kata-tjuta-central-australia.jpg",
      "https://www.holidify.com/images/foreign/compressed/attr_2670.jpg",
      "https://www.fodors.com/wp-content/uploads/2018/12/17_Uluru101__ShouldItakeatour%EF%80%A5_dreamstime_xl_37099052.jpg",
    ],

    //United Kingdom
    "buckingham-palace": [
      "https://media.timeout.com/images/100686093/image.jpg",
      "https://akns-images.eonline.com/eol_images/Entire_Site/2015120/rs_1024x759-150220103046-1024-2buckinham-palace-inside.ls.22015.jpg?fit=inside%7C900:auto&output-quality=90",
      "http://prod.static9.net.au/_/media/2016/11/22/10/39/GettyImages100500944.jpg",
      'https://www.londontopsightstours.com/wp-content/uploads/2019/08/6-1024x767.png'
    ],
    "tower-of-london": [
      "https://fthmb.tqn.com/fH93Hp7mYPKOhLmLwwsKG-FD_QU=/3943x2448/filters:fill(auto,1)/GettyImages-575673057-59743675d088c00010183841.jpg",
      "https://www.thehistoryhub.com/wp-content/uploads/2014/09/Chapel-Inside-of-The-Tower-of-London.jpg",
      "https://thumbs.dreamstime.com/b/king-s-life-guard-infantry-uniform-front-waterloo-block-tower-london-england-uk-unesco-world-heritage-site-277035659.jpg",
      "http://www.wandermum.co.uk/wp-content/uploads/2017/10/london-1780559_1280.jpg"
    ],
    "british-museum": [
      "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/the-British-Museum.jpg",
      "https://www.e-architect.com/wp-content/uploads/2020/12/british-museum-great-court-building-f071220-n1.jpg",
      "https://www.oceanlight.com/stock-photo/inside-british-museum-picture-28317-192359.jpg",
      'https://www.cuddlynest.com/blog/wp-content/uploads/2022/12/free-london-museums-natural-history-museum-1-scaled.jpg'
    ],
    "london-eye": [
      "https://www.civitatis.com/f/reino-unido/londres/entradas-london-eye-r32.jpg",
      "https://cdn.londonandpartners.com/3/6829d50/YXBwLnNoYXJpbnBpeC5jb20vaW1hZ2VfZXh0ZXJuYWxfdXJscy84YWE0NDNjZC05M2YzLTQxZWMtODgzMS1lY2YwMzY1ZWI5MzY/8aa443cd-93f3-41ec-8831-ecf0365eb936.jpg",
      "https://www.findingtheuniverse.com/wp-content/uploads/2022/09/London-Eye-ticket-Line_by_Laurence-Norah.jpg",
    ],

    "edinburgh-castle": [
      "https://www.webbaviation.co.uk/aerial/_data/i/galleries/z_Scotland/Edinburgh/Edinburgh_Castle_db58673-me.jpg",
      "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Edinburgh-castle.jpg",
      "https://a.cdn-hotels.com/gdcs/production163/d1651/440a7fb1-4a52-4c83-8131-25895b6a02b5.jpg",
      "https://1.bp.blogspot.com/-a-64ERilkcw/XsfdmMbLRyI/AAAAAAAAG6g/LjHmh9bCiZ4l9Xh7GcDBTY0Qr2r65pMdQCLcBGAsYHQ/s1600/01+Edinburgh+Castle.jpg",
    ],
    "royal-mile": [
      "https://a.cdn-hotels.com/gdcs/production163/d1461/07c0b027-66a3-4574-9b26-40c228ee5f29.jpg",
      "https://i.pinimg.com/originals/34/e2/d9/34e2d94b3b1165237a9b4277642e6c8f.jpg",
      "https://www.thetouchofsound.com/wp-content/uploads/2014/07/Royal-Mile-Edinburgh-Scotland.jpg",
      "https://i.pinimg.com/originals/90/d4/3a/90d43a0dd47fc78770dd608493f265ba.jpg",
    ],
    "old-trafford": [
      "https://traveldigg.com/wp-content/uploads/2016/08/Old-Trafford-Stadium-Photo.jpg",
      "https://c1.wallpaperflare.com/preview/607/198/353/stadium-old-trafford-manchester-united-football.jpg",
      "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2022/03/15092449/ot1.jpg",
      "https://wallpaperaccess.com/full/4295822.jpg",
    ],
    "beatles-story": [
      "https://i2-prod.liverpoolecho.co.uk/incoming/article9109651.ece/ALTERNATES/s1227b/448161.jpg",
      "https://englandrover.com/wp-content/uploads/2018/08/VB34169908-beatles-story-liverpool.jpg",
      "https://live.staticflickr.com/2574/3896944001_1443793965_b.jpg",
    ],
    "albert-dock": [
      "https://a.cdn-hotels.com/gdcs/production37/d719/8b3d057d-cb1f-4e10-8882-32262111d6cb.jpg",
      "https://a.cdn-hotels.com/gdcs/production95/d1445/7e0f7e1e-993c-4e04-a4ed-3a975fb61cda.jpg",
      "https://a.cdn-hotels.com/gdcs/production28/d367/264c28ef-7ffb-4380-86bc-c0eab64bc475.jpg",
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://tmpdmsmedia.newmindmedia.com/wsimgs/Royal_Albert_Dock_1__72276510.png",
    ],
    "roman-baths": [
      "https://steveoldhamphotography.com/wp-content/uploads/2012/07/baths.jpg",
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-roman-baths-bath-somerset-england-joe-daniel-price.jpg",
      "https://www.theenglishhome.co.uk/wp-content/uploads/2019/06/web-Torchlit-Summer-Evenings-2019-43.gif",
    ],
    "bath-abbey": [
      "https://images.adsttc.com/media/images/6231/0088/bf5d/eb1b/183c/e70c/large_jpg/fcb-bath-abbey-c-hufton-plus-crow-011.jpg?1647378668",
      "https://www.historyhit.com/app/uploads/2020/11/Bath-Abbey.jpg",
      "https://images.adsttc.com/media/images/6231/008c/bf5d/eb1b/183c/e710/large_jpg/fcb-bath-abbey-c-hufton-plus-crow-007.jpg?1647378694",
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res40/136000/136992-Bath-Abbey.jpg",
    ],

    // United states
    "statue-of-liberty": [
      "https://www.pixelstalk.net/wp-content/uploads/2015/06/hd-wallpaper-of-statue-of-liberty-in-new-york.jpg",
      "https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/statueliberty_julienneschaer-098_ade18569-a8db-2480-d62e197cc6f43b4b.jpg",
      "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/09/1200/675/statue-of-liberty-1.jpg?ve=1&tl=1",
    ],
    "central-park": [
      "http://www.blackchickontour.com/wp-content/uploads/2009/10/Central-Park-and-Fall-Leaves.jpg?w=650",
      "https://a.cdn-hotels.com/gdcs/staging142/d271/46af3f13-1f67-4a1d-807d-0c38d64c6548.jpg",
      "https://wallpaperaccess.com/full/1408260.jpg",
      "https://images.adsttc.com/media/images/5bc8/ad3b/f197/cc6b/2200/03c9/large_jpg/06_Alternative-Central-Park-6.jpg?1539878195",
    ],
    "times-square": [
      "https://www.tripsavvy.com/thmb/mYqOPd4-7awhRigPXzmKuGHNpzE=/3864x2577/filters:no_upscale():max_bytes(150000):strip_icc()/times-square---new-york-city-588653038-5b9c9e9546e0fb002439510b.jpg",
      "https://usaguidedtoursny.com/wp-content/uploads/2016/10/USAGT_New_Day_Tour_NY_044.jpg",
      "https://wallpaperaccess.com/full/232865.jpg",
    ],
    "hollywood-sign": [
      "https://www.tripsavvy.com/thmb/bjCMql0HbpeijaXVmVrbvZkPCiM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Los-Angeles-Assignment-1-89WEB-5c742ac746e0fb0001f87d3b.jpg",
      "https://ktla.com/wp-content/uploads/sites/4/2013/09/hollywood-sign.jpg?resize=256",
      "https://tse3.mm.bing.net/th?id=OIP.JNUrC7l1vp0GbMik5ZiHEgAAAA&pid=Api&P=0&h=180",
      "https://a.cdn-hotels.com/gdcs/production1/d1118/19534e77-d327-4d60-958c-d24c1757ab86.jpg",
    ],
    "santa-monica-pier": [
      "https://a.cdn-hotels.com/gdcs/production121/d1403/7e01aafc-8dc0-435c-b213-26ad1749482c.jpg",
      "https://www.viaggi-usa.it/wp-content/uploads/2017/08/Santa-Monica-Pier-1.jpg",
      "http://blog.itrip.net/wp-content/uploads/2012/01/santa-monica-pier-itrip-vacations.jpg",
    ],
    "millennium-park": [
      "https://www.tripsavvy.com/thmb/GqDYDspQN-G2O9NJK5_IzYxJyaM=/1280x853/filters:no_upscale():max_bytes(150000):strip_icc()/85272183-56a397895f9b58b7d0d2af2e.jpg",
      "https://s3.amazonaws.com/architecture-org/files/buildings/pritzker-pavilion-eric-rogers-009-2.jpg",
      "https://www.chicagotraveler.com/wp-content/uploads/2019/06/Chicago-Parks-Millennium-Park-IMG_6735.jpg",
      "https://cdn.choosechicago.com/uploads/2019/05/bean-header-1536x612.png",
    ],
    "willis-tower": [
      "https://cdn.britannica.com/13/191113-050-C851600C/Ledge-Willis-Tower-Chicago.jpg",
      "https://a.cdn-hotels.com/gdcs/production179/d1781/4f69714b-e969-409c-a981-3b9e21d1e34c.jpg",
      "https://chicagoyimby.com/wp-content/uploads/2021/05/5-Skydeck-at-Willis-Tower.-Image-by-SOM.jpg",
    ],
    "strip": [
      "https://media.gettyimages.com/id/2160471731/photo/tourists-take-photos-near-the-las-vegas-strip-during-a-heatwave-in-las-vegas-nevada-on-july-7.jpg?s=612x612&w=0&k=20&c=CGzlqSzhEdEWSxWV0evcn4EmVMJdDnyD4j2MT9gVgz8=",
      "https://media.istockphoto.com/id/2160907164/photo/firework-in-las-vegas.webp?a=1&b=1&s=612x612&w=0&k=20&c=AnDwpZHVeKRS9KwPC5pqBMUqTQp1m2PGiO82nFzCae0=",
      "https://media.gettyimages.com/id/sb10066817l-001/photo/usa-nevada-las-vegas-las-vegas-strip-with-skyline-at-night.jpg?s=612x612&w=0&k=20&c=eJA_JeWS_5zn7le5FQlOwfe7D04rRI0U8Rh7KLSKZsM=",
    ],
    "fremont-street": [
      "https://travelnevada.com/wp-content/uploads/2014/04/FremontDesktop.jpg",
      "https://assets.cyllenius.com/media/IC0Wku3C0w6ORMp2.jpg",
      "http://edwardmorganphotography.com/wp-content/uploads/2017/05/Las-Vegas-7737.jpg",
      "http://www.lasvegas-entertainment-guide.com/image-files/xfremont-street-experience-las-vegas.jpg.pagespeed.ic.AVfIS-8OJC.jpg",
    ],
    "south-beach": [
      "https://media.cntraveler.com/photos/5834bc6f3c3a00a0310362d9/master/pass/RooftopPool-1HotelSouthBeach-MiamiFL-CRHotel.jpg",
      "https://cdn.wallpapersafari.com/0/69/O8RK9C.jpg",
      "https://a.cdn-hotels.com/gdcs/production198/d528/a26a9a43-4ebc-4d0a-b148-327c9e4792da.jpg",
      "https://santorinidave.com/wp-content/uploads/2023/04/where-to-stay-south-beach-miami.jpeg",
    ],
    "little-havana": [
      "https://media.timeout.com/images/103858983/image.jpg",
      "https://2.bp.blogspot.com/-b-BQ7ZYUfP0/UZqjyCrmJ-I/AAAAAAAAEWY/WQR1bYSAevU/s1600/little_havana-miami-cuba.jpg",
      "https://www.cestujlevne.com/obrazky/54/35/45435-1200w.jpg",
    ],
    "golden-gate-bridge": [
      "https://www.travelrealizations.com/wp-content/uploads/2023/08/Golden-Gate-Bridge-Walk-Final-Cover.jpeg",
      "https://www.travelcaffeine.com/wp-content/uploads/2013/09/san-francisco-golden-gate-bridge-morning-sun-bricker-copy.jpg",
      "http://www.wallpaperbetter.com/wallpaper/374/427/781/golden-gate-bridge-bridge-san-francisco-sunset-clouds-ocean-plants-hd-1080P-wallpaper.jpg",
    ],
    'alcatraz': [
      "https://images.westend61.de/0001007745pw/aerial-view-of-the-prison-island-of-alcatraz-in-san-francisco-bay-MINF01100.jpg",
      "https://i.ytimg.com/vi/SvxS-l1fnkU/maxresdefault.jpg",
      "https://thumbs.dreamstime.com/b/embarcadero-de-la-isla-de-alcatraz-san-francisco-california-44154644.jpg",
    ],

    // Switzerland
    "old-town": [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/a7/58.jpg",
      "https://storage.googleapis.com/easyhotel-strapi/large_Zurich_Old_Town_3_55ab5ef50f/large_Zurich_Old_Town_3_55ab5ef50f.jpg",
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/349000/349775-Old-Town-Zurich.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
      "https://www.zuerich.com/sites/default/files/image/2022/web_zurich_altstadt_megateaser1600x900_24981.jpg",
    ],
    "lake-zurich": [
      "https://cdn.thecrazytourist.com/wp-content/uploads/2017/08/Lake-Z%C3%BCrich.jpg",
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/349000/349506-Lake-Zurich.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
      "https://cdn.getyourguide.com/img/location/596216d9a6784.jpeg/88.jpg",
      "https://ak6.picdn.net/shutterstock/videos/1047674446/thumb/1.jpg",
    ],
    "jet-deau": [
      "https://media.gettyimages.com/id/130904766/photo/downtown-geneva-and-jet-d-eau.jpg?s=612x612&w=0&k=20&c=gQAUB-SjtxvWWNzy3ukGy1Xw4yUzAWqwl0anuXSUTlw=",
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/41/dd/0d/jet-d-eau-on-lake-geneva.jpg",
      "https://tse4.mm.bing.net/th?id=OIP.LS-wx9WeROCslJFDdHnIMwHaDT&pid=Api&P=0&h=180",
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/e6/f1/f7/geneva-in-the-february.jpg",
    ],
    "un-palace": [
      "https://i.redd.it/0e3p5yo1kyfz.jpg",
      "https://media.istockphoto.com/id/860587310/photo/the-majestic-palace-of-nations.jpg?s=612x612&w=0&k=20&c=fpkje46M8Mx9FW1f-TXgj7WNAQ6TU5QfzMPJ565DaFk=",
      "https://www.ricehouse.it/wp-content/uploads/2021/12/copertina.jpg",
      "https://media.istockphoto.com/photos/united-nations-office-geneva-picture-id1322902233?k=20&m=1322902233&s=612x612&w=0&h=E1F44N1EAD5dFWQJTf2eUnvUMwrtwxsSt2YV1bxadkI=",
    ],
    'jungfraujoch': [
      "https://www.touristsecrets.com/wp-content/uploads/2023/09/a-journey-to-jungfraujoch-and-the-beautiful-town-of-interlaken-switzerland-1695275852.jpg",
      "https://www.myswitzerland.com/dam/jcr:0c0c0c0c-0c0c-0c0c-0c0c-0c0c0c0c0c0c/jungfraujoch-top-of-europe.jpg",
      "https://www.jungfrau.ch/wp-content/uploads/2020/03/jungfraujoch-sphinx-observatory.jpg",
      "https://www.jungfrau.ch/wp-content/uploads/2020/03/jungfraujoch-ice-palace.jpg",
      "https://www.jungfrau.ch/wp-content/uploads/2020/03/jungfraujoch-panorama.jpg",
    ],
    "harder-kulm": [
      "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/56086/2000x2000-0-70-efb9151dc29a56d502e5fa9f77f533d1.jpg",
      "https://www.interlaken.ch/sites/default/files/styles/header_image/public/2021-05/harder-kulm-1.jpg",
      "https://www.interlaken.ch/sites/default/files/styles/header_image/public/2021-05/harder-kulm-2.jpg",
      "https://www.interlaken.ch/sites/default/files/styles/header_image/public/2021-05/harder-kulm-3.jpg",
      "https://www.interlaken.ch/sites/default/files/styles/header_image/public/2021-05/harder-kulm-4.jpg",
    ],
    "chapel-bridge": [
      "https://loveincstatic.blob.core.windows.net/loveexploring/2021/lucerne-weekend-break/chapel-bridge-lucerne.jpg",
      "https://www.astoria-luzern.ch/_thumbnails_/1350_1_kapellbruecke01.jpg?m=1500902862",
      "https://www.roadaffair.com/wp-content/uploads/2019/08/chapel-bridge-lucerne-switzerland-shutterstock_365332397.jpg",
      "https://images.fineartamerica.com/images-medium-large-5/chapel-bridge-or-kapellbrucke-in-lucerne-marilyn-burton.jpg",
      "https://livingnomads.com/wp-content/uploads/2019/06/22/Wooden-Chapel-Bridgelucerne-travel-blog-3.jpg",
    ],
    "mount-pilatus": [
      "https://www.lolaakinmade.com/wp-content/uploads/2018/02/Mount-Pilatus-Lucerne-Switzerland-007.jpg",
      "https://i.pinimg.com/originals/b0/e6/b9/b0e6b9c590303ec458a910fb792e2afd.jpg",
      "https://swissfamilyfun.com/wp-content/uploads/2006/10/pilatus-clearskies-feature.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/12/c7/07/46/die-seilbahn.jpg",
    ],
    "lake-lucerne": [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/7e/78/b3.jpg",
      "https://thumbs.dreamstime.com/b/white-swan-swimming-lake-lucerne-switzerland-274459883.jpg",
      "https://wallpapercave.com/wp/wp4531416.jpg",
      "https://www.roadaffair.com/wp-content/uploads/2019/08/aerial-view-lucerne-switzerland-shutterstock_429368422.jpg",
    ],
   ' matterhorn': [
      "https://www.travelandleisure.com/thmb/ISDM_sDW3_0NSMJTZ3jgXjpRgsk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/zermatt-switzerland-aerial_SKITOWN0123-0df880426acd494c9d8791be79b07494.jpg",
      "https://viagemsuica.com/wp-content/uploads/2019/08/Zermatt_su%C3%AD%C3%A7a_guia_viagem_passeios_M-Copy.jpg",
      "https://thumbs.dreamstime.com/b/stellisee-beautiful-lake-reflection-matterhorn-zermatt-switzerland-143922304.jpg",
      "https://reisemagazin-online.com/wp-content/uploads/2019/09/Zermatt_1176449773.jpg",
    ],
    "chillon-castle": [
      "https://i1.wp.com/perfspots.com/wp-content/uploads/2017/05/DSCF1252.jpg?fit=1400%2C933&ssl=1",
      "https://images.musement.com/cover/0024/54/thumb_2353277_cover_header.jpeg?&q=60&fit=crop",
      "https://i.pinimg.com/736x/45/6d/de/456dde58e0ad77df07d1b0348ec25f03.jpg",
      "https://c2.staticflickr.com/8/7268/7408265218_2127530797_b.jpg",
    ],
    "rochers-de-naye": [
      "https://static.mycity.travel/manage/uploads/6/24/11145/1/rochers-de-naye-ce-mardi-15-janvier-2019-vfpix-com-valentin-flauraud_2000.jpg",
      "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_3200,h_1800/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2024/10/22/09/55/25/montreux-mountain-railway.jpg",
      "https://1.bp.blogspot.com/-oXvMD3mdcRQ/XQ5-U0J7rWI/AAAAAAAAymg/ARia_I8QO6AjVDZeV-oZT_Odbd8lJYObQCLcBGAs/s1600/rochers_de_naye_2014_panorama_2000x992_72dpi_42592.jpg",
      "https://www.newlyswissed.com/wp-content/uploads/2019/12/Rochers-de-Naye-Santas-House-03.jpg",
    ],
    "marina-bay-sands": [
      "http://luxurytraveler.s3.amazonaws.com/wp-content/uploads/2016/02/21144028/marina-bay-sands-singapore_Marina-Bay-Sands-Resort.jpg",
      "https://www.businessinsider.in/photo/39250644/25-gorgeous-pools-everyone-should-swim-in-once/the-marina-bay-sands-hotel-in-singapore-has-a-stunning-infinity-rooftop-pool-on-the-hotels-57th-floor-where-guests-can-swim-and-admire-the-singaporean-skyline-.jpg",
      "https://blog.redbus.sg/wp-content/uploads/2017/06/image-1.jpg",
      "https://bradajohnson.net/wp-content/uploads/2020/04/IMG_6439-3-scaled.jpg",
    ],
    "gardens-by-the-bay": [
      "http://www.marriedtoplants.com/wp-content/uploads/2016/08/gardens-by-the-bay-supertree-walk_.jpg",
      "https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1485538528136-TRQH6ONVZ0ZB61MVBZ4U/Singapore-Web-131-20150411.jpg",
      "https://www.marinabaysands.com/content/dam/singapore/marinabaysands/master/main/home/sg-visitors-guide/Gardens-by-the-bay/Flower%20Dome%20interior%20GBTB_959x554.jpg",
      "https://www.explore.com/img/gallery/brave-the-72-foot-high-skywalk-at-singapores-famous-garden-of-the-bay-park/l-intro-1673626589.jpg",
    ],
    "merlion-park": [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://www.trawell.in/admin/images/upload/935304121Merlion_Park_Singapore.jpg",
      "https://www.nothingfamiliar.com/wp-content/uploads/2023/02/Merlion-Park-Harbor-Walk-1440x960.jpg",
      "https://travelmate.tech/media/images/cache/singapore_marina_bay_02_merlion_park_jpg_1920_1080_cover_70.jpg",
    ],
    "universal-studios": [
      "https://cdn-imgix.headout.com/mircobrands-content/image/90afaf4e18364b724fee6c453b32c9cf-AdobeStock_296166296_Editorial_Use_Only.jpeg",
      "https://x4.sdimgs.com/sd_static/u/202208/62ff040da7ec9.jpg",
      "https://www.streetdirectory.com/stock_images/travel/simg_show/13316311460656/253788_1024/universal_studios_singapore_sentosa/",
      "https://x2.sdimgs.com/sd_static/u/202208/62ff048de9ecf.jpg",
      "https://i.ytimg.com/vi/Wkp5SNTAZlk/maxresdefault.jpg",
    ],
    "siloso-beach": [
      "https://a.cdn-hotels.com/gdcs/production194/d310/7a15d153-5b29-4dec-ad74-56b7f475b392.jpg",
      "https://www.sentosa.com.sg/-/media/sentosa/hero-asset/attractions/beaches/silosobeachhero.jpg",
      "https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/365/2018/11/30040244/Leisure_head_21.jpg",
      "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2018/03/sentosa-siloso-beach-shutterstock.png",
    ],
    "buddha-tooth-relic": [
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/buddha-tooth-relic-temple-at-chinatown-david-jk-tan.jpg",
      "https://i.pinimg.com/originals/00/b8/da/00b8daca9c8d967c8a87d0621100b5aa.jpg",
      "https://thumbs.dreamstime.com/b/altar-inside-buddha-tooth-relic-temple-chinatown-singapore-altar-inside-buddha-tooth-relic-temple-chinatown-singapore-305866818.jpg",
      "https://thumbs.dreamstime.com/b/buddha-tooth-relic-temple-museum-chinatown-singapore-buddhist-complex-located-district-270512543.jpg",
    ],
    "sri-veeramakaliamman": [
      "https://media.istockphoto.com/id/618850452/photo/sri-veeramakaliamman-temple-in-little-india-singapore.jpg?s=612x612&w=0&k=20&c=-Iy6Txg9XkwxwKSKGK2JczsS1-ubwGVPZVIRNsaXngg=",
      "https://images.squarespace-cdn.com/content/v1/5919f7bfd2b857811c061c2f/1613901653667-652RBMQRC4PI6EDFG0W7/little-india-singapore-sri-veeramakaliamman-temple.jpg",
      "https://i.pinimg.com/originals/8e/26/b7/8e26b7966e5eaa46f143fdd40842a84d.jpg",
      "https://thumbs.dreamstime.com/b/sri-veeramakaliamman-temple-little-india-singapore-one-oldest-54898932.jpg",
    ],
    "ion-orchard": [
      "https://www.capitaland.com/content/dam/capitaland-media-library/integrateddevelopment-urbandevelopment/Singapore/Singapore/ION%20Orchard/ION-Orchard-Facade-Apr-2019.jpg.transform/cap-midres/image.jpg",
      "https://thumbs.dreamstime.com/b/singapore-june-day-view-ion-orchard-shopping-mall-onju-onjune-road-media-facade-multi-sensory-canvas-42056229.jpg",
      "https://live.staticflickr.com/65535/52308315407_e5e66c657f_b.jpg",
    ],
    

    //Germany 
    'brandenburg-gate': [

      "https://cdn.pixabay.com/photo/2019/12/13/12/00/berlin-4692820_1280.jpg",
      'https://cdn.pixabay.com/photo/2020/05/01/15/18/brand-front-of-the-brandenburg-gate-5117579_1280.jpg',
      'https://cdn.pixabay.com/photo/2012/11/19/07/08/berlin-66593_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/10/14/17/30/brandenburg-gate-988081_1280.jpg',
      '',
      
      
    ],
    "berlin-wall": [
      "https://withberlinlove.com/wp-content/uploads/2012/05/window-of-remembrance-at-gedenkstc3a4tte-berliner-mauer.jpg",
      'https://landezine.com/wp-content/uploads/2022/11/Gedenkstaette_Berliner_Mauer_NB_002_2500.jpg',
      'https://us.images.westend61.de/0001912636pw/view-of-section-of-the-wall-at-the-berlin-wall-memorial-memorial-park-bernauer-strasse-berlin-germany-europe-RHPLF28923.jpg',
      'https://images.squarespace-cdn.com/content/v1/62f74eae268c635eaa1823cc/fa909949-d935-4a6e-be5d-43dc8b0f1f9f/Wall+Memorial+2+Full+Resolution+WEB+960.jpg'
    ],
    'marienplatz':[
      'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/179896/Marienplatz-55956.jpg',
      'https://media.gettyimages.com/id/677600527/photo/new-town-hall-at-dusk.jpg?s=612x612&w=0&k=20&c=fz30HpcOmJ6VacnyDKm3fFzuBlFOHi2u84NzyWaZbws=',
      'https://media.gettyimages.com/id/2217212514/photo/a-general-view-of-supporters-in-marienplatz-in-munich-germany-ahead-of-the-uefa-champions.jpg?s=612x612&w=0&k=20&c=31uXFSyXWdwXq4N8_GnL3rxHX5UGVp9bwDNhfTfdqwY=',
      'https://media.gettyimages.com/id/2217212606/photo/football-supporters-in-marienplatz-in-munich-germany-ahead-of-the-uefa-champions-league-final.jpg?s=612x612&w=0&k=20&c=njwWWznql-72PWpX7lenFobOrmmDNOsucUTBqtybzDc='

    ],
    'neuschwanstein':[
      'https://themunichguide.de/wp-content/uploads/2020/01/neuschwanstein-castle-germany.jpg',
      'https://www.destination-munich.com/image-files/neuschwanstein-throne-room-old-photo.jpg',
      'https://www.destination-munich.com/image-files/neuschwainstein-throne-room.jpg',
      'https://www.destination-munich.com/image-files/neuschwanstein-interior.jpg',
      'https://www.destination-munich.com/image-files/neuschwainstein-sangersaal.jpg'

    ],

    'cologne-cathedral':[
      'https://cdn.tprofile.com/content/Regions/800_Cologne/GALLERY_6464d9_cologne_1.jpg',
      'https://www.tripsavvy.com/thmb/hziohNhhWd4lJIQvAD5li8dynGs=/4890x4538/filters:fill(auto,1)/CologneCathedral3-1489e8cf1ce94daaa05cfc585fedbeb1.jpg',
      'https://www.tripsavvy.com/thmb/Ov8lWKb8tAXkOlt5aGnjJ3xzVqU=/1945x1542/filters:no_upscale():max_bytes(150000):strip_icc()/colognecathedralGettyImages-181964026JorgGreuel-5a02c27e4e4f7d001a0dea0c.jpg'
    ],

    'rhine-river':
    [
      'https://bt.traveldepartment.co.uk/media/4332/cochem-experience-the-rhine-and-cologne-river-cruise.jpg?anchor=center&mode=crop&width=960&height=636&rnd=132325673930000000',
      'https://cdn.tprofile.com/content/Regions/800_Cologne/GALLERY_6464d9_cologne_1.jpg',
      'https://pizzazzerie.com/wp-content/uploads/2017/07/rhine-river-cruise-cologne-germany.jpg',
      'https://www.artsy-traveler.com/wp-content/uploads/2020/02/Canva-Aerial-view-over-the-Rhine-River-in-Cologne-Germany-scaled.jpg'
      
    ]

  };

  // Get the correct gallery based on place ID
  const getGallery = () => {
    if (!place) return [];

    // First check if place has its own gallery
    if (place.gallery) return place.gallery;

    // Then check placeGalleries using place ID
    const placeId = place.id?.toLowerCase();
    if (placeId && placeGalleries[placeId]) {
      return placeGalleries[placeId];
    }

    // If no gallery found, return empty array
    return [];
  };

  if (!place) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Place Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The place you're looking for doesn't exist.
        </p>
        <Link
          to="/countries"
          className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
        >
          <FiArrowRight className="w-5 h-5 mr-2 transform rotate-180" />
          Back to Countries
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[50vh] md:h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: `url(${place.image})`,
            transformOrigin: "center bottom",
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative h-full flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
            <Link
              to={`/countries/${place.countryId}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/countries/${place.countryId}`);
              }}
              className="inline-flex items-center text-white mb-4 md:mb-6 hover:text-amber-300 transition-colors text-sm md:text-base"
            >
              <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 mr-2 transform rotate-180" />
              Back to {place.countryName}
            </Link>
            <h1 className="text-3xl md:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
              {place.name}
            </h1>
            <div className="flex items-center text-white mb-6 md:mb-8">
              <FiMapPin className="w-4 h-4 md:w-6 md:h-6 mr-2" />
              <span className="text-base md:text-xl">
                {place.cityName}, {place.countryName}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4 animate-fade-in-delay-2">
              <div className="bg-white/10 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 rounded-full flex items-center">
                <FiStar className="w-4 h-4 md:w-5 md:h-5 mr-2 text-amber-400" />
                <span className="text-white text-sm md:text-base font-medium">
                  {place.rating || "4.8"}
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 rounded-full flex items-center">
                <FiClock className="w-4 h-4 md:w-5 md:h-5 mr-2 text-amber-400" />
                <span className="text-white text-sm md:text-base font-medium">
                  {place.duration || "2-3 hours"}
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 rounded-full flex items-center">
                <FiDollarSign className="w-4 h-4 md:w-5 md:h-5 mr-2 text-amber-400" />
                <span className="text-white text-sm md:text-base font-medium">
                  {place.price || "Varies"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 bg-white shadow-md z-30">
        <div className="max-w-6xl mx-auto px-2 md:px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "overview"
                  ? "border-amber-500 text-amber-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <FiInfo className="inline-block mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "photos"
                  ? "border-amber-500 text-amber-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <FiMap className="inline-block mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab("tips")}
              className={`px-3 md:px-6 py-2 md:py-3 font-medium text-xs md:text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "tips"
                  ? "border-amber-500 text-amber-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <FiSun className="inline-block mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
              Tips & Info
            </button>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 md:p-8">
                {/* About Section */}
                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                    About {place.name}
                  </h2>
                  <p className="text-sm md:text-base text-gray-700">{place.about}</p>
                </section>
                {/* History Section */}
                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                    History
                  </h2>
                  <p className="text-sm md:text-base text-gray-700">{place.history}</p>
                </section>
                {/* Features Section */}
                <section className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                    Features
                  </h2>
                  <ul className="list-disc list-inside text-sm md:text-base text-gray-700">
                    {place.features &&
                      place.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">{feature}</li>
                      ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        )}
        {/* Photos Tab */}
        {activeTab === "photos" && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 md:p-8">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                  Photo Gallery
                </h2>
                {/* Image Slider */}
                <div className="mb-8 md:mb-12 relative">
                  <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex">
                      {getGallery().map((photo, index) => (
                        <div
                          key={index}
                          className="embla__slide flex-shrink-0 w-full px-1 md:px-2"
                        >
                          <div className="relative">
                            <img
                              src={photo}
                              alt={`${place.name} photo ${index + 1}`}
                              className="rounded-xl w-full h-[300px] md:h-[500px] object-cover shadow"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 md:p-4 rounded-b-xl">
                              <p className="text-xs md:text-base">
                                {place.imageDescriptions?.[index] ||
                                  `Photo ${index + 1} of ${place.name}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Navigation Buttons */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-colors z-10"
                  >
                    <FiArrowRight className="w-4 h-4 md:w-6 md:h-6 transform rotate-180" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-colors z-10"
                  >
                    <FiArrowRight className="w-4 h-4 md:w-6 md:h-6" />
                  </button>
                  {/* Image Counter */}
                  <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm">
                    {selectedImageIndex + 1} / {getGallery().length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Tips & Info Tab */}
        {activeTab === "tips" && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 md:p-8">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                  Trip Info
                </h2>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-6 md:mb-8">
                  {place.bestTimeToVisit && (
                    <li className="mb-2">
                      <strong>Best Time to Visit:</strong>{" "}
                      {place.bestTimeToVisit}
                    </li>
                  )}
                  {place.openingHours && (
                    <li className="mb-2">
                      <strong>Opening Hours:</strong> {place.openingHours}
                    </li>
                  )}
                  {place.entryFee && (
                    <li className="mb-2">
                      <strong>Entry Fee:</strong> {place.entryFee}
                    </li>
                  )}
                </ul>
                <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                  Visitor Tips
                </h2>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-700">
                  {place.visitorTips &&
                    place.visitorTips.map((tip, idx) => (
                      <li key={idx} className="mb-2">{tip}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacePage;
