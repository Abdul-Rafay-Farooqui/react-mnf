
import Hero from "@/components/ui-components/Hero";

const CookiePolicyPage = () => {
  return (
    <>
      <Hero
        title="Cookie Policy"
        subtitle="Last updated: March 2025"
        background="light"
        size="small"
      />

      <div className="container py-10">
        <div className="max-w-3xl mx-auto prose">
          <section className="mb-8">
            <h2>1. Introduction</h2>
            <p>
              MyNeedfully.com uses cookies and similar technologies to provide, protect, and improve our website. This Cookie Policy explains how and why we use these technologies and the choices you have. This Cookie Policy is part of and incorporated into our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2>2. What are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="mt-2">
              Cookies set by the website owner (in this case, MyNeedfully.com) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
            </p>
          </section>

          <section className="mb-8">
            <h2>3. Why Do We Use Cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website.
            </p>
            <p className="mt-2">The specific types of cookies served through our website and the purposes they perform include:</p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</li>
              <li><strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</li>
              <li><strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</li>
              <li><strong>Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>4. How Can You Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner.
            </p>
            <p className="mt-2">
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
          </section>

          <section className="mb-8">
            <h2>5. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
          </section>

          <section className="mb-8">
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at cookies@myneedfully.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CookiePolicyPage;
