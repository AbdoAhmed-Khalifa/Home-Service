import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <Head>
        <title>About Us | Your Home Service</title>
        <meta name="description" content="Learn more about our home services and team." />
      </Head>

      <main>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Welcome to Your Home Service</h2>
          <p className="text-lg mb-4">
            At Your Home Service, we are dedicated to providing top-notch home services including cleaning, repair, painting, and more. With years of experience in the industry, our team is committed to delivering exceptional results and ensuring complete customer satisfaction.
          </p>
          <p className="text-lg">
            Our mission is to make your home a better place by offering reliable and professional services tailored to your needs. Whether you need a quick fix or a major renovation, we are here to help.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Meet Our Team</h2>
          <p className="text-lg mb-4">
            Our team consists of skilled professionals who are experts in their respective fields. We work together to ensure that every project is completed with the highest level of quality and attention to detail.
          </p>
          <p className="text-lg">
            Each team member brings a unique set of skills and experience, allowing us to handle a wide range of home service tasks efficiently and effectively.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-lg">
            If you have any questions or would like to discuss your home service needs, feel free to <Link href="/" className="text-blue-500 hover:underline">get in touch with us</Link>. We look forward to working with you!
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
