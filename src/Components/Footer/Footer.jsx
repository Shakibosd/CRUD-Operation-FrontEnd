import footerItems from "../../Data/Footers/footerItems";
import footersIcons from "../../Data/Footers/footersIcons";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-light py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* About Us Section */}
                        <div className="text-center md:text-left">
                            <h5 className="text-xl font-bold mb-4 text-white">About Us</h5>
                            <p className="text-gray-300">
                                We provide the best services to our customers. Follow us on social
                                media to stay updated.
                            </p>
                        </div>

                        {/* Quick Links Section */}
                        <div className="text-center">
                            <h5 className="text-xl font-bold mb-4 text-white">Quick Links</h5>
                            <ul className="space-y-2">
                                {footerItems.map((data) => (
                                    <li key={data.id}>
                                        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                                            {data.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Follow Us Section */}
                        <div className="text-center md:text-right">
                            <h5 className="text-xl font-bold mb-4 text-white">Follow Us</h5>
                            <div className="flex justify-center md:justify-end space-x-4">
                                {footersIcons.map((data) => (
                                    <a
                                        key={data.id}
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-white transition duration-300 text-2xl"
                                    >
                                        <i className={data.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-8 border-gray-500" />

                    {/* Copyright Section */}
                    <div className="text-center">
                        <p className="text-gray-300">
                            &copy; {new Date().getFullYear()} All rights reserved. Developed With{" "}
                            <a
                                href="https://myprotfolios.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:underline font-bold"
                            >
                                Nazmus Sakib
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;