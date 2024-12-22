import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">
          Reviews({Math.floor(Math.random() * (1000 - 100 + 1))})
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quam
          veniam laudantium soluta dolores repellat debitis quos voluptatem.
          Ipsam, veniam sunt voluptatem similique nobis sint aliquam omnis
          dignissimos quos tenetur culpa, repellat dolore adipisci commodi
          doloribus animi voluptatum, eius excepturi! Culpa qui id nemo
          consequuntur modi et doloremque autem ab. Nemo tempore aspernatur est
          quae, error doloribus. Laborum, inventore. Enim vitae aut optio, quam
          consequatur natus tempore dicta, numquam atque suscipit earum beatae
          officia, eveniet nihil deleniti architecto? Molestias facere quod
          impedit possimus, saepe voluptatum sapiente? Fugiat, veritatis
          necessitatibus laborum quidem nobis voluptates praesentium, placeat
          sint soluta non officiis corporis!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          ducimus, laboriosam officiis, vero assumenda voluptate quae tenetur
          necessitatibus soluta asperiores, eaque ipsam. Dignissimos est amet
          quibusdam enim magnam aliquam modi debitis quae vel itaque explicabo
          quaerat sit sed, facilis blanditiis fugit accusamus praesentium autem
          minus eius? Distinctio ut quibusdam ab magnam numquam nihil magni
          molestias, doloremque itaque cupiditate, pariatur error eaque
          repellendus veniam? Magnam perferendis suscipit sint a eaque natus!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
