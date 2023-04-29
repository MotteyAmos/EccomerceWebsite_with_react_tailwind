
import hero from "../assets/images/hero.png";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import messenger from "../assets/images/messenger.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";

/*videos*/

import videoClip from "../assets/video/clip.mp4";

/*videos clip */
import clipCover1 from "../assets/video/vcover1.png";
import clipCover2 from "../assets/video/vcover2.png";
import clipCover3 from "../assets/video/vcover3.png";


export const heroApi={
    title:"play with electric nike",
    subtitle:"adapt 2.0 sneakers",
    btnText: 'explore product',
    heroimg: hero,
    socialLinks:[
        {icon:facebook},
        {icon:instagram},
        {icon:messenger},
        {icon:twitter},
        {icon:youtube}
    ],
    videos:[
        {src:videoClip, clip:clipCover3},
        {src:videoClip, clip:clipCover1},
        {src:videoClip, clip:clipCover2},
    ]
}