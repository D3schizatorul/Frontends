import React from "react";

const Message = (props) => {
  return (
    <div className={`${props.name ? "justify-start" : "justify-end"} flex`}>
      <div
        className={`${
          props.name ? "bg-white" : "bg-[#bff5b5]"
        } relative flex p-2 pr-16 pl-4 m-2 lg:mx-6 rounded-[0.3rem]`}
      >
        {props.name ? (
          <span className="absolute left-[-5px] top-[0px]">
            <svg viewBox="0 0 8 13" width="8" height="13">
              <path
                opacity=".13"
                fill="#0000000"
                d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
              ></path>
              <path
                fill="white"
                d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
              ></path>
            </svg>
          </span>
        ) : (
          <span className="absolute right-[-5px] top-[0px]">
            <svg viewBox="0 0 8 13" width="8" height="13">
              <path
                opacity=".13"
                d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
              ></path>
              <path
                fill="#bff5b5"
                d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
              ></path>
            </svg>
          </span>
        )}
        <p className="text-[14px] -my-[3px] -mx-1.5">{props.message}</p>
        <p className="flex items-end text-[12px] text-gray-500 text-end pl-4 -mr-14 -my-1.5">
          {props.timestamp}
        </p>
      </div>
    </div>
  );
};

export default Message;
