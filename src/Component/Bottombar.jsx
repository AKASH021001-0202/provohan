import React from "react";

const Bottombar = () => {
  return (
    <div>
      <div className="container mx-auto p-10">
        <div className="flex justify-between items-center max-[767px]:flex-wrap">
          <div className="fiv">
            <h4 className="text-base font-bold">Need help?</h4>
          </div>

          <div className="flex bg-[#F9F9F9] items-center rounded-lg p-4 gap-8">
            <svg
              width="45"
              height="45"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_482_883)">
                <path
                  d="M32.5081 0H32.4919C14.5722 0 0 14.5762 0 32.5C0 39.6094 2.29125 46.1987 6.18719 51.5491L2.13688 63.6228L14.6291 59.6294C19.7681 63.0338 25.8984 65 32.5081 65C50.4278 65 65 50.4197 65 32.5C65 14.5803 50.4278 0 32.5081 0Z"
                  fill="#4CAF50"
                />
                <path
                  d="M51.4191 45.8941C50.6351 48.1082 47.5232 49.9444 45.041 50.4807C43.3429 50.8422 41.1247 51.1307 33.6579 48.0351C24.1069 44.0782 17.9563 34.3729 17.4769 33.7432C17.0179 33.1135 13.6176 28.6041 13.6176 23.9404C13.6176 19.2766 15.986 17.0057 16.9407 16.0307C17.7247 15.2304 19.0207 14.8647 20.2638 14.8647C20.666 14.8647 21.0276 14.8851 21.3526 14.9013C22.3072 14.9419 22.7866 14.9988 23.4163 16.506C24.2004 18.3951 26.1097 23.0588 26.3372 23.5382C26.5688 24.0176 26.8004 24.6676 26.4754 25.2972C26.1707 25.9472 25.9026 26.2357 25.4232 26.7882C24.9438 27.3407 24.4888 27.7632 24.0094 28.3563C23.5707 28.8722 23.0751 29.4247 23.6276 30.3794C24.1801 31.3138 26.0894 34.4297 28.9007 36.9322C32.5285 40.1619 35.4697 41.1938 36.5219 41.6326C37.306 41.9576 38.2404 41.8804 38.8132 41.271C39.5404 40.4869 40.4382 39.1869 41.3522 37.9072C42.0022 36.9891 42.8229 36.8754 43.6841 37.2004C44.5616 37.5051 49.2051 39.8004 50.1597 40.2757C51.1144 40.7551 51.7441 40.9826 51.9757 41.3847C52.2032 41.7869 52.2032 43.676 51.4191 45.8941Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_482_883">
                  <rect width="65" height="65" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div>
              <h3 className="text-xl font-semibold">Ask us on WhatsApp!</h3>
              <p className="text-base">Get instant support via experts...</p>
            </div>
            <div>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33479 20.6643L4.64212 19.9765C4.4258 19.76 4.30663 19.4719 4.30663 19.1641C4.30663 18.8564 4.4258 18.5681 4.64212 18.3516L12.4894 10.5047L4.63342 2.64875C4.4171 2.43261 4.2981 2.14424 4.2981 1.83658C4.2981 1.52891 4.4171 1.24038 4.63342 1.02406L5.32181 0.336003C5.76947 -0.112001 6.49867 -0.112001 6.94634 0.336003L16.3334 9.68944C16.5496 9.90559 16.7019 10.1936 16.7019 10.504V10.5076C16.7019 10.8154 16.5494 11.1035 16.3334 11.3196L6.97178 20.6643C6.75563 20.8808 6.45889 20.9997 6.15123 21C5.8434 21 5.55076 20.8808 5.33479 20.6643Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="flex bg-[#F9F9F9] items-center rounded-lg p-4 gap-8">
            <svg
              width="45"
              height="45"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.77301 21.8104C9.7125 10.9113 18.8573 2.35791 30 2.35791C41.1427 2.35791 50.2875 10.9113 51.227 21.8104H47.4661C46.5391 12.9817 39.073 6.1017 30 6.1017C20.927 6.1017 13.4609 12.9817 12.5339 21.8104H8.77301Z"
                fill="#9D907A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.69653 41.5361C8.32267 41.5841 9.08017 41.6115 9.84118 41.567C10.2465 43.6228 10.7856 47.5184 12.9908 49.7237C14.9864 51.7193 17.6931 52.8404 20.5153 52.8404H25.4556C25.3924 53.1855 25.3601 53.5378 25.3601 53.8933C25.3601 54.253 25.3925 54.6049 25.4545 54.9463H20.5153C17.1346 54.9463 13.8924 53.6033 11.5017 51.2128C8.7756 48.4866 8.12017 44.1655 7.69653 41.5361Z"
                fill="#9D907A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4952 23.5211C13.4952 22.1756 12.5302 21.085 11.3395 21.085H6.85582C5.03754 21.085 3.29367 21.9013 2.00801 23.3542C0.722344 24.8072 0 26.7778 0 28.8327V34.8089C0 36.8638 0.722344 38.8344 2.00801 40.2873C3.29367 41.7403 5.03754 42.5565 6.85582 42.5565H11.3395C12.5302 42.5565 13.4952 41.466 13.4952 40.1205V23.5211Z"
                fill="#DA9B31"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.73273 21.085V42.5565H6.85582C5.03754 42.5565 3.29367 41.7403 2.00801 40.2873C0.722344 38.8344 0 36.8638 0 34.8089V28.8327C0 26.7778 0.722344 24.8072 2.00801 23.3542C3.29367 21.9013 5.03754 21.085 6.85582 21.085H7.73273Z"
                fill="#F5B547"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M60 28.8327C60 26.7778 59.2777 24.8072 57.992 23.3542C56.7063 21.9013 54.9625 21.085 53.1442 21.085H48.6605C47.4699 21.085 46.5048 22.1756 46.5048 23.5211V40.1205C46.5048 41.466 47.4699 42.5565 48.6605 42.5565H53.1442C54.9625 42.5565 56.7063 41.7403 57.992 40.2873C59.2777 38.8344 60 36.8638 60 34.8089V28.8327Z"
                fill="#DA9B31"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M52.2673 21.085H53.1442C54.9625 21.085 56.7063 21.9013 57.992 23.3542C59.2777 24.8072 60 26.7778 60 28.8327V34.8089C60 36.8638 59.2777 38.8344 57.992 40.2873C56.7063 41.7403 54.9625 42.5565 53.1442 42.5565H52.2673V21.085Z"
                fill="#F5B547"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36.0438 53.8932C36.0438 51.8229 34.3655 50.1445 32.2951 50.1445H27.7049C26.7107 50.1445 25.7571 50.5396 25.0541 51.2426C24.3511 51.9456 23.9562 52.899 23.9562 53.8932C23.9562 55.9636 25.6345 57.642 27.7049 57.642H32.2951C34.3655 57.642 36.0438 55.9636 36.0438 53.8932Z"
                fill="#CFB079"
              />
            </svg>

            <div>
              <h3 className="text-xl font-semibold">Request a callback</h3>
              <p className="text-base">Our team will contact you</p>
            </div>
            <div>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33479 20.6643L4.64212 19.9765C4.4258 19.76 4.30663 19.4719 4.30663 19.1641C4.30663 18.8564 4.4258 18.5681 4.64212 18.3516L12.4894 10.5047L4.63342 2.64875C4.4171 2.43261 4.2981 2.14424 4.2981 1.83658C4.2981 1.52891 4.4171 1.24038 4.63342 1.02406L5.32181 0.336003C5.76947 -0.112001 6.49867 -0.112001 6.94634 0.336003L16.3334 9.68944C16.5496 9.90559 16.7019 10.1936 16.7019 10.504V10.5076C16.7019 10.8154 16.5494 11.1035 16.3334 11.3196L6.97178 20.6643C6.75563 20.8808 6.45889 20.9997 6.15123 21C5.8434 21 5.55076 20.8808 5.33479 20.6643Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="flex bg-[#F9F9F9] items-center rounded-lg p-4 gap-8">
            <svg
              width="45"
              height="45"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.875 8.125H8.125V56.875H56.875V8.125Z"
                fill="#ECEFF1"
              />
              <path
                d="M32.5 37.6268L56.875 56.8749V18.8743L32.5 37.6268Z"
                fill="#CFD8DC"
              />
              <path
                d="M58.9062 8.125H56.875L32.5 27.3731L8.125 8.125H6.09375C2.73 8.125 0 10.855 0 14.2188V50.7812C0 54.145 2.73 56.875 6.09375 56.875H8.125V18.8744L32.5 37.6228L56.875 18.8703V56.875H58.9062C62.27 56.875 65 54.145 65 50.7812V14.2188C65 10.855 62.27 8.125 58.9062 8.125Z"
                fill="#F44336"
              />
            </svg>

            <div>
              <h3 className="text-xl font-semibold">Mail us</h3>
              <p className="text-base">Reach out to us</p>
            </div>
            <div>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33479 20.6643L4.64212 19.9765C4.4258 19.76 4.30663 19.4719 4.30663 19.1641C4.30663 18.8564 4.4258 18.5681 4.64212 18.3516L12.4894 10.5047L4.63342 2.64875C4.4171 2.43261 4.2981 2.14424 4.2981 1.83658C4.2981 1.52891 4.4171 1.24038 4.63342 1.02406L5.32181 0.336003C5.76947 -0.112001 6.49867 -0.112001 6.94634 0.336003L16.3334 9.68944C16.5496 9.90559 16.7019 10.1936 16.7019 10.504V10.5076C16.7019 10.8154 16.5494 11.1035 16.3334 11.3196L6.97178 20.6643C6.75563 20.8808 6.45889 20.9997 6.15123 21C5.8434 21 5.55076 20.8808 5.33479 20.6643Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;