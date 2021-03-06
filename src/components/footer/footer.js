import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Newsletter from '../newsletter';
import FooterLogo from '../../../content/svg/footer-logo.svg';

export default function Footer() {
  return (
    <div className="flex flex-col bg-default-50 px-12 pt-12 pb-4">
      <div className="flex flex-col lg:flex-row mt-4 mb-16">
        <div className="lg:w-1/2">
          <Newsletter footer />
        </div>
        <div className="lg:w-1/2 flex flex-col lg:pl-18 lg:pr-12 mt-8 lg:mt-0">
          <h3 className="font-en text-white font-bold text-lg">
            Let us hear your stories, keep your memories on Outtaink
          </h3>
          <p className="font-zh text-white font-light my-4">
            你也想讓自己的故事影響更多留學生嗎？來找我們聊聊吧！你有故事，我有筆。你的坎坷、你的蛻變、你的經歷、你的成長，請讓我陪你一同記錄。
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row border-0 border-t-2 border-white border-solid text-white lg:text-sm font-en py-8 items-center">
        <div className="flex flex-col lg:flex-row lg:w-1/2">
          <Link className="flex mt-2 lg:mr-16 mx-auto lg:mx-0" to="/">
            Terms of Service
          </Link>
          <Link className="flex mt-2 lg:mr-16 mx-auto lg:mx-0" to="/">
            Privacy Statement
          </Link>
          <Link className="flex mt-2 lg:mr-16 mx-auto lg:mx-0" to="/">
            Copyright Notice
          </Link>
        </div>
        <div className="flex flex-col mt-8 lg:pl-18 lg:mt-0 lg:flex-row lg:w-1/2">
          <FooterLogo className="flex-grow" />
          <div className="flex mt-4 lg:mt-0">
            <a
              className="flex flex-grow justify-center lg:mr-4"
              href="mailto:contact@outtaink.com"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a
              className="flex flex-grow justify-center lg:mr-4"
              href="https://instagram.com/outta.ink"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              className="flex flex-grow justify-center lg:mr-4"
              href="https://github.com/tsengjonathan/outtaink.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-white text-xs font-en flex">
        <p className="mx-auto">
          Copyright © 2020-2021 Outtaink. All rights reserved.
        </p>
      </div>
    </div>
  );
}
