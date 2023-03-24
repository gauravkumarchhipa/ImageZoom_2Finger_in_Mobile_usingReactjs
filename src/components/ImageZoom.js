import ImageGallery from "react-image-gallery";
import PinchZoom from "react-pinch-and-zoom";
import "../app.css";
const images = [
  {
    original: "https://source.unsplash.com/random/200x200?sig=1",
    
  },
 
];
export default function ImageZoom() {
  const renderItem = (item) => {
    return (
      <PinchZoom
      className={""}
      debug={false}
      minZoomScale={1}
      maxZoomScale={1}
      boundSize={undefined}
      contentSize={undefined}
    >
        <img
          src={item.original}
          alt={item.originalAlt}
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          
        />
      </PinchZoom>
    );
  };

  return (
    <div className="image">
      <ImageGallery
        items={images}
        renderItem={renderItem}
        showFullscreenButton={true}
        useBrowserFullscreen={true}
        showPlayButton={false}
        autoPlay={true}
        
      />
    </div>
  );
}


