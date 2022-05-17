import React, { useState } from "react";
import Notification from "./Notification";

const SocialLink = (props) => {
  // eslint-disable-next-line react/prop-types
  const { icon, link, name, value } = props;

  const cloneIcon = React.cloneElement(icon, {
    size: "30",
    className:
      "text-white h-[60px] w-[60px] p-3 group-hover:text-lgbtq-pink duration-300",
  });

  const [showToolTip, setShowToolTip] = useState(false);

  const copyValue = (value) => {
    /*let $temp = document.createElement("input");
    document.body.appendChild($temp);
    $temp.value = value;
    $temp.select();
    $temp.setSelectionRange(0, 99999);*/

    navigator.clipboard.writeText(value);
    /*console.log($temp.value);
    document.body.removeChild($temp);*/
  };

  const handleCopyClick = () => {
    if (!showToolTip) {
      copyValue(value);
      setShowToolTip(true);
      setTimeout(() => {
        setShowToolTip(false);
      }, 2000);
    }
  };

  return (
    <div className="group w-fit select-none">
      {link ? (
        <a
          className="flex items-center group-hover:text-lgbtq-pink duration-300"
          href={link}
          rel="noopener noreferrer nofollow external"
        >
          {cloneIcon}
          <span className="">{name}</span>
        </a>
      ) : (
        <div className={!showToolTip ? "cursor-pointer" : "cursor-default"}>
          <span
            className="flex items-center group-hover:text-lgbtq-pink duration-300"
            onClick={handleCopyClick}
          >
            {cloneIcon}
            <span className="">{name}</span>
          </span>
          <Notification
            value="Copied!"
            className={showToolTip ? "opacity-100" : "opacity-0 translate-y-16"}
          />
        </div>
      )}
    </div>
  );
};

export default SocialLink;
