import mascot from "../assets/67perso.svg";
import {
  ExternalLink,
  Github,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2D2640] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Branding */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={mascot}
                  alt="67 Adventure Mascot"
                  className="w-16 h-16"
                />
                <div>
                  <h3
                    className="text-2xl"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    67 Adventure
                  </h3>
                  <p className="text-sm text-gray-400">
                    Move. Play. Transform.
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                The revolutionary exergaming experience that turns fitness into
                an epic adventure.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-lg mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#tech"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#future"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Version 2.0
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4
                className="text-lg mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Resources
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://p5play.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    p5play Documentation <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ml5js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    ML5.js Docs <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    GitHub Repository <Github className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Community Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Play Now CTA */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="bg-gradient-to-r from-[#8B7BA8] to-[#E97BA0] rounded-2xl p-8 text-center">
              <h4
                className="text-2xl mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Ready to Start Your Adventure?
              </h4>
              <p
                className="text-white/90 mb-6"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Join thousands of players transforming their fitness journey
              </p>
              <button className="bg-white text-[#8B7BA8] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Play 67 Adventure Now
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-8">
            <p>© 2026 67 Adventure - MMI Department, IUT Limousin</p>
            <p className="mt-2">
              Powered by p5play, ML5.js, and MakeyMakey | Built with ❤️ and lots
              of movement
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
