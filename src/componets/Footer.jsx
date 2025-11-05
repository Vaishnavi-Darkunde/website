import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-white">GTASTERIX PVT.LTD</h4>
            <p className="mt-2 text-sm">
              GTasterix Pvt Ltd is the leading provider of the best software for business.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white">Our Services</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <NavLink to="/webdev" className="hover:text-sky-500">
                  Web Development
                </NavLink>
              </li>
              <li>
                <NavLink to="/mobileapp" className="hover:text-sky-500">
                  Mobile Apps Development
                </NavLink>
              </li>
              <li>
                <NavLink to="/software" className="hover:text-sky-500">
                  Software Testing
                </NavLink>
              </li>
              <li>
                <NavLink to="/cloud" className="hover:text-sky-500">
                  Cloud Computing
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <NavLink to="/about" className="hover:text-sky-500">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-sky-500">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className="hover:text-sky-500">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-sky-500">
                Contact
                </NavLink>
              </li>

               
             
            </ul>
          </div>


         <div>


   <div>
            <h5 className="font-semibold text-white">Connect</h5>
            <div className="mt-3 text-sm">
              <a
                href="https://www.linkedin.com/company/gtasterix-it-services-pvt-ltd/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500"
              >
                LinkedIn
              </a>
            </div>
          </div>
</div>


        </div>

        <div className="mt-8 text-center text-sm border-t border-white pt-6">
          © {new Date().getFullYear()} GTasterix Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
