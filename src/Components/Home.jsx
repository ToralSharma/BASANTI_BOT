import React from 'react';
import './Home.scss';
import "../App.css"
import { Navbar } from "./Navbar";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const handleStyleSwipe = () => {
    // Logic for handling Style Swipe button click
    console.log('Style Swipe clicked');
    navigate('/style');
  };

  const handleMaybeLater = () => {
    // Logic for handling Maybe Later button click
    console.log('Maybe Later clicked');
  };

  return (
    <div className="home">
      <div className="know-your-aesthetic">
        <div className="close-button">X</div>
        <div className="header">
          <h1>Know Your Aesthetic</h1>
        </div>
        <div className="buttons">
          <button className="style-swipe" onClick={handleStyleSwipe}>
            STYLE SWIPE RIGHT NOW!
          </button>
          <button className="maybe-later" onClick={handleMaybeLater}>
            MAYBE LATER
          </button>
        </div>
      </div>
      {/* <img style={{width:"100%"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/0aee0d7a-a9ba-4881-aafc-21f6b5c3e4691642158269057-Desktop_Bank-Offer.jpg" alt="" />
      <img style={{ width: "95%", marginLeft: "2.5%", height: "200px" }} src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/16/f9ceb57d-ee89-4d93-923a-33fbe554283d1642317227306-DK1_2-599_01.jpg" alt="" />
      <img style={{width: "95%", marginLeft: "2.5%", height: "150px" }} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/4e32982e-2e5e-47d6-8187-147059fce2171642158268993-Unbelievable-Deals.jpg" alt="" /> */}
      <div className="set">
        <div>
          <img style={{ width: '100%', }}
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/e6d2213f-2797-4b11-aa72-0ab85f912ab91641702713591-USPA-_UCB.jpg" alt="" />
        </div>
        <div>
             < img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/982eb1ae-0f43-4ec9-88cf-2c3ccaf0cc9b1641702713015-Louis_Philippe-_Arrow.jpg" alt="" />
        </div>
        <div>
             <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/bc56d434-5411-45e7-a2d5-7809771e58b41641966742688-Red_Tape-_Provogue.jpg" alt="" />
       </div>
        <div>
          <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/c7fd80c5-dc04-4c20-a0c0-9eda118a2d4e1641966742758-Roadster-_Mast_-_Harbour.jpg" alt="" />
       </div>
        <div>
           <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/4c3abcb4-1d49-4103-b428-e4924bfd937e1642129866295-2.jpg" alt="" />
        </div>  
      </div>

      {/* <br></br>
      <img style={{width: "95%", marginLeft: "2.5%", height: "140px"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/9dee2107-6680-471e-97d6-aff7d1937a621642158269007-Winter-Wear-Collection.jpg" alt="" />
      <div className="set">
        <div>
          <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/5b7a32cd-715f-4d39-b8ab-cfb8a96426251641884921511-RTF-Winterwear_Wrogn_USPA.jpg" alt="" />
        </div>
        <div>
           < img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/9677a355-d48f-44ca-a037-fa94400161cc1641884921466-RTF-Winterwear_Roadster.jpg" alt="" />
        </div>
        <div>
           <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/6b4c7e8d-d78d-4232-80b5-f49b2c7ebdb61641884921424-RTF-Winterwear_M_H_Here_NoW.jpg" alt="" />
       </div>
        <div>
          <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/a1f85afb-7ecc-4488-b589-a17f4c768dbc1641884921410-RTF-Winterwear_H_M.jpg" alt="" />
       </div>
        <div>
           <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/e270b9c7-75c4-47da-81e9-2d862d3fad6b1641884921459-RTF-Winterwear_Puma_HRXm.jpg" alt="" />
        </div>
      </div> */}

      {/* <br></br>
      <img style={{width: "95%", marginLeft: "2.5%", height: "120px"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/a5f53400-bb99-4ebd-b621-ffb50abdf6d61642158269013-Most-Loved-Brands.jpg" alt="" />
      <div className="set">
        <div>
          <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/e29cd784-b6ee-4e2e-9807-d631c5d062cb1642011117202-Libas_HP-Top-Tile.jpg" alt="" />
        </div>
        <div>
           < img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/c46aecf8-af8b-438e-8e0a-82a4c2671c651642011117216-Vishudh_HP-Top-Tile.jpg" alt="" />
        </div>
        <div>
           <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/901bb1a2-6d87-44b0-af68-33e3949dfedf1642057411431-levis.jpg" alt="" />
       </div>
        <div>
          <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/69d8bb1f-d3df-490d-bd32-5637c6cc3d611642011117170-DressBerry_HP-Top-Tile.jpg" alt="" />
       </div>
        <div>
           <img style={{width:'100%'}}  src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/1f663a79-3580-4c8c-b9de-7c51e6330f721642011117235-Roadster_HP-Top-Tile.jpg" alt="" />
        </div>
      </div> */}

    </div>
  );
};