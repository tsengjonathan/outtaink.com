import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Newsletter from '../newsletter';
import FooterLogo from '../../../content/svg/footer-logo.svg';

export default function Footer() {
  return (
    <div className="flex flex-col bg-default-50 px-12 pt-12 pb-4">
      <div className="flex flex-col lg:flex-row mt-4 mb-8">
        <div className="w-1/2">
          <Newsletter footer/>
        </div>
        <div className="w-1/2 flex flex-col pl-24 pr-12">
          <h3 className="font-en text-white text-center font-bold">
            Share your thoughts, make Outtaink grow.
          </h3>
          <p className="font-zh text-white text-center font-light my-4 text-sm">
            “每個人都要經過這個階段，看見一座山，就想知道山的後面是什麼，可能翻過山後面，你會發現沒什麼特別，回頭看，會覺得這邊更好。”
          </p>
        </div>
      </div>
      <div className="flex border-0 border-t border-white border-solid text-white text-sm font-en py-8 items-center">
        <div className="flex w-1/2">
          <Link className="flex mr-16" to="/">
            Terms of Service
          </Link>
          <Link className="flex mr-16" to="/">
            Privacy Statement
          </Link>
          <Link className="flex mr-16" to="/">
            Copyright Notice
          </Link>
        </div>
        <div className="flex w-1/2">
          <FooterLogo className="flex-grow" />
          <div className="flex">
            <a className="mr-4" href="mailto:contact@outtaink.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <Link className="mr-4" to="https://instagram.com/outtaink">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
            <Link className="mr-4" to="https://github.com/tsengjonathan/outtaink.com">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
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
