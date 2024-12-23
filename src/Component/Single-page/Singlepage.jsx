import React from 'react';
import ImageGallery from "react-image-gallery";
// Import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import Header from '../Header';
import Footer from '../Footer';

const Singlepage = () => {
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        <div>
            <Header />
            <div className="flex ">

<div className="w-[50%]">

<ImageGallery 
                items={images} 
                 
                showNav={false} 
                showBullets={false} 
                autoPlay={false}
                showPlayButton={false}
                showFullscreenButton={false}
            />

</div>
<div className="w-[50%]">

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex accusantium id laudantium magnam in alias pariatur placeat, exercitationem qui ea quis molestias similique perferendis. Eius, consequatur architecto. Assumenda inventore laborum sed, eligendi doloremque ad sunt, ex blanditiis voluptatum deleniti quo facilis enim quia architecto ipsum commodi, cum nostrum aut.</p>

</div>

            </div>
           
            <Footer />
        </div>
    );
}

export default Singlepage;
