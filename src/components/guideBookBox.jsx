import "./../css/components/guideBookBox.css";

export default function GuideBookBox({ image, title, content1, content2, content3, content4, content5 }) {
  return (
    <div className="guidebook_box">
      <img src={image} alt="guidebook_image" className="guidebook_img" />
      <div className="explain">
        <h5 className="guidebook_title">{title}</h5>
        <p className="guidebook_content">{content1}</p>
        <p className="guidebook_content">{content2}</p>
        <p className="guidebook_content">{content3}</p>
        <p className="guidebook_content">{content4}</p>
        <p className="guidebook_content">{content5}</p>
      </div>
    </div>
  );
}
