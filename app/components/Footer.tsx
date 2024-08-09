import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-4 sm:flex-row">
        <div className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0"
            y="0"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            className="w-10"
          >
            <g>
              <linearGradient
                id="a"
                x1="30"
                x2="30"
                y1="7"
                y2="53"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="1" stopColor="#ed2bb9" offset="0"></stop>
                <stop stopOpacity="1" stopColor="#37d8ff" offset="1"></stop>
              </linearGradient>
              <g fill="url(#a)">
                <path
                  d="M14 44a2.976 2.976 0 0 1-2.122-.88L.879 32.121C.313 31.557 0 30.803 0 30s.313-1.557.88-2.122l10.999-10.999A2.975 2.975 0 0 1 14 16c1.654 0 3 1.346 3 3 0 .803-.313 1.557-.88 2.122L7.242 30l8.879 8.879c.567.564.879 1.318.879 2.121 0 1.654-1.346 3-3 3zM46 45c-1.654 0-3-1.346-3-3 0-.803.313-1.557.88-2.122L52.758 31l-8.879-8.879A2.982 2.982 0 0 1 43 20c0-1.654 1.346-3 3-3 .803 0 1.557.313 2.122.88l10.999 10.999c.567.566.879 1.32.879 2.121 0 .803-.313 1.557-.88 2.122L48.121 44.121A2.971 2.971 0 0 1 46 45zM21 53a3.004 3.004 0 0 1-2.77-4.155L36.231 8.843A2.997 2.997 0 0 1 39 7a3.004 3.004 0 0 1 2.77 4.155L23.769 51.157A2.997 2.997 0 0 1 21 53z"
                  fill=""
                  opacity="1"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          ©2024 All rights reserved —
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <Link
            href={"https://www.facebook.com/profile.php?id=100012736566033"}
            className="text-gray-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>

          <Link
            href={"https://www.linkedin.com/in/aleksatesic/"}
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
          <Link
            href={"mailto:atesic7@gmail.com"}
            className="ml-3 text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
              <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
              <path d="M16 4l-4 4l-4 -4" />
              <path d="M4 6.5l8 7.5l8 -7.5" />
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
