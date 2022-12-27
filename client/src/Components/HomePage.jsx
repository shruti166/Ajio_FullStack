import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { Box, Image } from '@chakra-ui/react';
import OwlCarousel from 'react-owl-carousel';


const images = [
    "https://assets.ajio.com/cms/AJIO/WEB/29112022-D-MHP-topbanner-midseasonsale-4080.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-D-MHP-topbannercarousel-p3-categorydays-internationalbrands-upto70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-D-MHP-topbannercarousel-p1-stealoftheday-sportsshoes-brands-under2299.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/03122022-D-UHP-topbanner-Prebuzz-5090.gif",
    
]

const images2 = [
   " https://assets.ajio.com/cms/AJIO/WEB/D-Payupto5Bankoffer.jpg",
   "https://assets.ajio.com/cms/AJIO/WEB/D-RelianceOne-Bankoffer.jpg"
]

const images3 = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-p1-bestofwinter-upto75.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-westernwear.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-ethnicwear.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-footwear.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Kidswear.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Home&Kitchen.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Acessories.jpg"
    
]

const images4 = [
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p2-vanheusen-min40.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p3-andglobaldesi-brands-min60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p4-weddingcollection-brands-min65.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p5-leewrangler-brands-min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p5-leewrangler-brands-min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p6-westerndresses-brands-starting499.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p7-innerwear-brands-starting199.jpg"
    
]

const images5 = [
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-D-UHP-men-p1-brands-shirts-flat65.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-D-UHP-men-p2-brands-min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-D-UHP-men-p3-brands-footwear-3060.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-D-UHP-men-p5-internationalbrands-upto65.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-D-UHP-men-p5-internationalbrands-upto65.jpg"
    
]
const images6 = [
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-UHP-D-UHPwomen-p1-m&s-newbalance-upto70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-UHP-D-UHPwomen-p2-fivebyinc5-everqupid-starting799.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-UHP-D-UHPwomen-p3-puma-min40.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-UHP-D-UHPwomen-p4-aurelia-globaldesi-flat65.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-UHP-D-UHPwomen-p5-clovia-zivame-starting199.jpg"
    
]

const images7 = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p1-upto70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p2-min30.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-trendscarousel-Azorte-flat30.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p4-min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p5-upto70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p6-starting249.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p7-under499.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-trends-p8-under999.jpg"
    
]
const responsive = {
    responsiveClass: true,
    loop:true,
    autoplay:true,
    nav: true,
    margin: 10,
    smartSpeed: 300,
    navClass: ['prev', 'next'],
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
       
        }
    },
}


export const HomePage = () => {

  return (
    <div>
    
    <Box width="100%" marginTop=  "30px" cursor="pointer" overflow= "hidden">
        <Box width="100%" >
            <OwlCarousel {...responsive} className="owl-theme1" >
            {images.map((img, idx)=>(
                <Box key = {idx+1} className='hover-underline-banner1' width="100%" margin="auto" mt={10} >
                    <Image w="1468px"  height= "450px" marginTop= {{base: "100px"}} src={img} />
                </Box>
            ))}
            </OwlCarousel>
        </Box>
        
    </Box>
    

    
    <Box width="100%" margin="auto" cursor="pointer">
    <Box width="100%" >
        <OwlCarousel {...responsive} className="owl-theme2" >
        {images2.map((img1, idx)=>(
            <Box key = {idx +1} className='hover-underline-banner2' width="100%" margin="auto" mt={10} >
                <Image w="1434px"  height= "123px" marginTop= {{base: "-45px"}} src={img1} />
            </Box>
        ))}
        </OwlCarousel>
    </Box>
    
</Box>

            <div className="bag_section_banner" style = {{marginTop: "10px", cursor: "pointer"}}>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-opt-1.gif" width= "1440px"height = "90" alt="" />
            </div>
            <div className="brands_section_banner">
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-Header.jpg" alt="" />

            </div>
            <div className="brands_section" style = {{display: "flex", animation: "ease-out", cursor: "pointer"}}>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p1-levis.jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p2-adidas.jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p3-campus.jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p4-puma.jpg" alt="" /></div>
            </div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Header.jpg" alt="" />
            </div>
            
            <Box width="100%" margin="auto" cursor="pointer" >
            <Box width="100%" >
            <OwlCarousel {...responsive} className="owl-theme3" >
            {images3.map((img2, idx)=>(
                <Box key = {idx + 1}className='hover-underline-banner3' width="100%" margin="auto" mt={10} >
                    <Image w="1468px"  height= "450px" marginTop= {{base: "-45px"}} src={img2} />
                </Box>
            ))}
            </OwlCarousel>
        </Box>
        
    </Box>
    
        <div className="ajio_exclusive_section" style = {{marginTop: "4px"}}>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-Header.jpg" alt="" />
        </div>
        <div className="exclusive_section" style = {{display: "flex", animation: "ease-out", cursor: "pointer"}}>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyAJIO-p1-Exclusiverange-REVISED%20(1).jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p2-ProduktbyJ&J.jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p3-Avaasa.jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p4-Gas.jpg" alt = "" /></div>
            </div>
        <div className="shineStyle_banner">
                <div><img src="https://assets.ajio.com/cms/AJIO/WEB/D-JIT-Header.jpg" alt="" /></div>

        </div>
        
        <Box width="100%" margin="auto" cursor="pointer" >
            <Box width="100%" >
            <OwlCarousel {...responsive} className="owl-theme4" >
            {images4.map((img3, idx)=>(
                <Box key = {idx + 1}className='hover-underline-banner4' width="100%" margin="auto" mt={10} >
                    <Image w="1468px"  height= "450px" marginTop= {{base: "-45px"}} src={img3} />
                </Box>
            ))}
            </OwlCarousel>
        </Box>
        
    </Box>
   
    <div className="ajioService_banner" style = {{cursor: "pointer"}}>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-AJioservice-header.jpg" alt="" />
    </div>
    <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-AJioservice-Nextday.jpg" alt="" />
    </div>
    <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-Header.jpg" alt="" />
    </div>
    <div className="latest_launches">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/2022_GAP_AJIO_Cozy%20Club_Desktop_w1440px%20X%20h470px_Unisex.jpg" alt="" />
    </div>

    <div className = "latestLauch_section" style = {{display: "flex", overflow: "auto", whiteSpace: "nowrap", cursor: "pointer"}}>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-LatestLaunches-lancer-neqw.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-p3-truereligion-new.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-LatestLaunches-710-new.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-LatestLaunches-KendallKylie.jpg"  alt = "" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-p1-Acai-new.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-p2-FyreRose-new.jpg"  alt="" /></div> 
               
    </div>

    <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-Header.jpg" alt="" />
    </div>
    <div className="westernWear_wonders" style = {{display: "flex", cursor: "pointer"}}>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p1-starting499.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p2-starting599.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p3-starting999.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p4-starting899.jpg"  alt = "" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p5-min50.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p6-starting399.jpg"  alt="" /></div>
               
    </div>
    <div className = "himFavt_section">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHPmen-Header.jpg" alt="" />

    </div>

    <Box width="100%" margin="auto" cursor="pointer" >
            <Box width="100%" >
            <OwlCarousel {...responsive} className="owl-theme5" >
            {images5.map((img4, idx)=>(
                <Box key = {idx + 1}className='hover-underline-banner5' width="100%" margin="auto" mt={10} >
                    <Image w="1468px"  height= "450px" marginTop= {{base: "-45px"}} src={img4} />
                </Box>
            ))}
            </OwlCarousel>
        </Box>
    </Box>
   
    <div className="herFavt_section">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHPWomen-Header.jpg" alt="" />
    </div>
    
    <Box width="100%" margin="auto" cursor="pointer" >
            <Box width="100%" >
            <OwlCarousel {...responsive} className="owl-theme6" >
            {images6.map((img5, idx)=>(
                <Box  key = {idx + 1}className='hover-underline-banner6' width="100%" margin="auto" mt={10} >
                    <Image w="1468px"  height= "450px" marginTop= {{base: "-45px"}} src={img5} />
                </Box>
            ))}
            </OwlCarousel>
        </Box>
    </Box>
   

    <div className="ethnicBanner">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-Header.jpg" alt="" />
    </div>
    <div className="ethnic_section" style ={{display: "flex", cursor: "pointer"}}>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-ethnicwear-kurtas-edited.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p1-starting499.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p3-starting499.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p4-upto80.jpg"  alt = "" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-ethnicwear-footwear-edited.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p6-starting499.jpg"  alt="" /></div>
    </div>
    <div className="latestTrends">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-Trends-Header.jpg" alt="" />
    </div>

    
    <Box width="100%" margin="auto" cursor="pointer" >
            <Box width="100%" >
            <OwlCarousel {...responsive} className="owl-theme7" >
            {images7.map((img6, idx)=>(
                <Box  key = { idx + 1}className='hover-underline-banner7' width="100%" margin="auto" mt={10} >
                    <Image w="1468px"  height= "450px" marginTop= {{base: "-45px"}} src={img6} />
                </Box>
            ))}
            </OwlCarousel>
        </Box>
    </Box>
   
    <div className="hiddenGemsBanner">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-header.jpg" alt="" />
    </div>
    <div className="hiddenGemsSection" style ={{display: "flex", cursor: "pointer"}}>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-nakd.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-wknd.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-frenchconnection.jpg"  alt = "" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-lcwaikiki.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p6-starting499.jpg"  alt="" /></div> 
    </div>
    <div className="amazingAddon_banner">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-Header.jpg" alt="" />

    </div>
    <div className="amazingAddOn_section" style ={{display: "flex", cursor: "pointer"}}>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p1-sports&casualshoes.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p2-flipflops,sandals.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p3-sneakers.jpg"  alt = "" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p4-watches.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p6-starting499.jpg"  alt="" /></div> 
    </div>
    <div className="lookLikeAStar_banner">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-Header.jpg" alt="" />
    </div>
    <div className= "lookLikeAStar_section" style ={{display: "flex", cursor: "pointer"}}>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p1-Levis.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p2-puma.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p13-Performax.jpg"  alt = "" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p3-adidas.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p6-starting499.jpg"  alt="" /></div> 

    </div>
    <div className="lilChamps_banner">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-header.jpg" alt="" />
    </div>
    <div className= "lilChanps_section" style ={{display: "flex", cursor: "pointer"}}>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p1-3060.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p2-starting559ac.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p3-min40.jpg"  alt = "" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p4-upto70.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p6-starting499.jpg"  alt="" /></div> 

    </div>
    <div className="bandOfBrand_banner">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-Header.jpg" alt="" />
    </div>
    <div className= "bandsOfBrands_section" style ={{display: "flex", cursor: "pointer"}}>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p1-uspa.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p2-M&S.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p3-nike.jpg"  alt = "" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p4-ax.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p6-starting499.jpg"  alt="" /></div> 

    </div>
    <div className="grid" style = {{display: "grid", gridTemplateColumns: "repeat(4,1fr)"}}>
        <div style = {{marginRight: "0.5px", marginBottom: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p1-trends.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px", marginBottom: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p1-trends.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px", marginBottom: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p3-home.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px", marginBottom: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p4-sneakerrhood.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px", marginBottom: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p9-winterwear.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px", marginBottom: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p5-aceesories.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px", marginBottom: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p6-beauty.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px", marginBottom: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p7-internationalbrands.jpg" alt="" /></div>

    </div>
    <div className="ajioCares">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip%20new%20d.jpg" alt="" />
    </div>
</div>
  )
}