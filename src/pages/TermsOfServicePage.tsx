
import Hero from "@/components/ui-components/Hero";

const TermsOfServicePage = () => {
  return (
    <>
      <Hero
        title="Terms of Service"
        subtitle="Last updated: March 2025"
        background="light"
        size="small"
      />

      <div className="container py-10">
        <div className="max-w-3xl mx-auto prose">
          <section className="mb-8">
            <h2>1. Introduction</h2>
            <p>
              Welcome to MyNeedfully.com. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use MyNeedfully.com if you do not accept all of the terms and conditions stated on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2>2. License to Use Website</h2>
            <p>
              Unless otherwise stated, MyNeedfully.com and/or its licensors own the intellectual property rights for all material on the site. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p className="mt-2">You must not:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Republish material from this website</li>
              <li>Sell, rent or sub-license material from the website</li>
              <li>Reproduce, duplicate or copy material from the website</li>
              <li>Redistribute content from MyNeedfully.com (unless content is specifically made for redistribution)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>3. User Content</h2>
            <p>
              In these terms and conditions, "User Content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.
            </p>
            <p className="mt-2">
              You grant to MyNeedfully.com a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your User Content in any existing or future media. You also grant to MyNeedfully.com the right to sub-license these rights, and the right to bring an action for infringement of these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2>4. Wishlist Creation and Use</h2>
            <p>
              MyNeedfully.com provides a platform for individuals to create and share wishlists of needed items. Users are responsible for the content they add to their wishlists and must not include inappropriate, illegal, or fraudulent items. MyNeedfully.com reserves the right to remove any content that violates these terms.
            </p>
            <p className="mt-2">
              Users who create wishlists are responsible for providing accurate information about their needs. Users who purchase items from wishlists do so at their own discretion, and MyNeedfully.com does not guarantee the legitimacy of any wishlist or claim.
            </p>
          </section>

          <section className="mb-8">
            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall MyNeedfully.com, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort or otherwise, and MyNeedfully.com shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2>6. Governing Law & Jurisdiction</h2>
            <p>
              These terms will be governed by and interpreted in accordance with the laws of the United States, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the United States for the resolution of any disputes.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;
