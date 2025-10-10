import React, { useState, useEffect } from "react";
import "./OptimizedImage.css";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  style = {},
  loading = "lazy",
  placeholder = true,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder ? "" : src);

  useEffect(() => {
    if (!placeholder) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
  }, [src, placeholder]);

  return (
    <div className="optimized-image-container" style={style}>
      {!imageLoaded && placeholder && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      <img
        src={imageSrc || src}
        alt={alt}
        className={`${className} ${
          imageLoaded ? "image-loaded" : "image-loading"
        }`}
        loading={loading}
        onLoad={() => setImageLoaded(true)}
        style={{ opacity: imageLoaded || !placeholder ? 1 : 0 }}
      />
    </div>
  );
};

export default OptimizedImage;
