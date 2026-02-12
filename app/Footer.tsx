export function Footer() {
  return (
    <footer className="bg-background">
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <a className="text-lg font-medium text-foreground" href="#hero">
              AGENCY
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Sustainable design homes combining contemporary aesthetics with
              energy efficiency and eco-friendly materials.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#products"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#technology"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#gallery"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#accessories"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">About</h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Service</h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                >
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border border-gray-900 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              href="#"
            >
              Instagram
            </a>
            <a
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              href="#"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

