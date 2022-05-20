import React, { useState } from "react";

import { BiCopy } from "react-icons/bi";

import { Button, Grid, Text, Popover, Tooltip } from "@nextui-org/react";

const SocialLink = (props) => {
  // eslint-disable-next-line react/prop-types
  const { icon, link, name, value } = props;

  const [isDisabled, setIsDisabled] = useState(false);

  // duplicate icon
  const cloneIcon = React.cloneElement(icon, {
    size: "32",
  });

  const [tooltip, setTooltip] = useState("Copy");

  const returnButton = () => {
    if (value) {
      return (
        <Button
          disabled={isDisabled}
          shadow
          icon={cloneIcon}
          color={"secondary"}
          css={{ zIndex: 1 }}
          onPress={() => {
            setIsDisabled(true);
          }}
        >
          {name}
        </Button>
      );
    } else {
      return (
        <Button
          disabled={isDisabled}
          shadow
          icon={cloneIcon}
          color={"primary"}
          onPress={() => {
            window.open(link, "_blank");
          }}
          css={{ zIndex: 1 }}
        >
          {name}
        </Button>
      );
    }
  };

  const component = () => {
    if (value) {
      // copy button
      return (
        <Popover
          css={{ zIndex: 1 }}
          onClose={() => {
            setIsDisabled(false);
          }}
        >
          <Popover.Trigger>{returnButton()}</Popover.Trigger>
          <Popover.Content>
            <Grid.Container>
              <Text css={{ p: 10, zIndex: 1 }} className="select-all">
                {value}
              </Text>
              <Tooltip
                content={tooltip}
                onVisibleChange={(visible) => {
                  if (!visible) {
                    setTimeout(() => {
                      setTooltip("Copy");
                    }, 250);
                  }
                }}
                css={{ zIndex: 1 }}
              >
                <Button
                  auto
                  rounded
                  light
                  onPress={() => {
                    navigator.clipboard.writeText(value);
                    setTooltip("Copied!");
                  }}
                  css={{ zIndex: 1 }}
                >
                  <BiCopy />
                </Button>
              </Tooltip>
            </Grid.Container>
          </Popover.Content>
        </Popover>
      );
    } else {
      // link button
      return <> {returnButton()} </>;
    }
  };

  return <Grid>{component()}</Grid>;

  /* const cloneIcon = React.cloneElement(icon, {
    size: "30",
    className:
      "text-white h-[60px] w-[60px] p-3 hover:text-lgbtq-pink duration-300",
  });

  const [showToolTip, setShowToolTip] = useState(false);

  const copyValue = (value) => {
    navigator.clipboard.writeText(value);
  };

  const handleCopyClick = () => {
    if (!showToolTip) {
      copyValue(value);
      setShowToolTip(true);
      setTimeout(() => {
        setShowToolTip(false);
      }, 2000);
    }
  }; */

  /* return (
    <div className="w-full select-none flex justify-center items-center">
      {link ? (
        <a
          className="text-white items-center duration-300"
          href={link}
          rel="noopener noreferrer nofollow external"
        >
          {cloneIcon}
        </a>
      ) : (
        <div className={!showToolTip ? "cursor-pointer" : "cursor-default"}>
          <span
            className="flex justify-center items-center  duration-300"
            onClick={handleCopyClick}
          >
            {cloneIcon}
          </span>
        </div>
      )}
      <Notification
        value="Copied!"
        className={showToolTip ? "opacity-100" : "opacity-0 translate-y-16"}
      />
    </div>
  ); */
};

export default SocialLink;
