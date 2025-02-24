import { useEffect } from "react";
import HomeNav from "../layout/HomeNav";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Newsbanner from "../images/news/Travel News Banner.webp"
import NewPic from "../images/news/newpic.webp"
export default function NewsAndMedia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Helmet>
        <title>News and Media | Risezonic Travels </title>
        <meta
          name="description"
          content="The news media or news industry. We provide tour and travel news globally. "
        />
        <link rel="canonical" href="https://www.risezonictravel.com/News-And-Media" />
        </Helmet>
      <section>
        <HomeNav />
      </section>
      <section>
        {/* Banner Section */}
        <div className="flex overflow-hidden bg-slate-600 object-cover object-center justify-center items-center">
          <img
            loading="lazy"
            width="100%"
            className="object-cover"
            src={Newsbanner}
            alt="news and media"
          />
        </div>
      </section>
      <section>
        <div className="pb-20">
          <section>
            <div className="sm:pt-12">
              <div className="flex justify-center text-4xl font-product items-center gap-4 py-12">
                <h1 className="pb-3 border-b-2 border-black">News And Media</h1>
                <i className="fa-solid fa-book-open"></i>
              </div>

              {/* news Cards */}
              <div className="flex flex-wrap justify-center">
                <div className="max-w-lg mx-auto sm:p-0 p-4">
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg sm:max-w-sm max-w-lg mb-5 overflow-hidden">
                    <div className="h-[300px] overflow-hidden object-center object-cover">
                      <Link to={"/Business-Growth"}>
                        <img
                          loading="lazy"
                          width="100%"
                          className="rounded-t-lg hover:scale-110 transition ease-in duration-150 object-cover object-center"
                          src={NewPic}
                          alt="Blogs"
                        />
                      </Link>
                    </div>
                    <div className="p-5">
                      <Link to={"/Business-Growth"}>
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 line-clamp-1">
                          From Clicks to Getaways: How Risezonic....
                        </h5>
                      </Link>
                      <p className="font-normal text-gray-700 mb-3 line-clamp-3">
                        Hey there folks! Buckle up because Risezonic is about to
                        take you on a thrilling journey where pixels meet
                        passports and algorithms lead to adventures. In the
                        fast-paced world of business, where digital know-how and
                        a thirst for adventure go hand in hand, there stands
                        Risezonic – a force to be reckoned with – the new face
                        of success in the digital marketing business and the
                        corporate travel industry.
                      </p>
                      <Link
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                       to={"/Business-Growth"}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="max-w-lg mx-auto sm:p-0 p-4">
                  <div className="bg-white shadow-md border border-gray-200 rounded-lg sm:max-w-sm max-w-lg mb-5 overflow-hidden">
                    <div className="h-[300px] overflow-hidden object-center object-cover">
                      <Link to={"/Business-success"}>
                        <img
                          loading="lazy"
                          width="100%"
                          className="rounded-t-lg hover:scale-110 transition ease-in duration-150 object-cover object-center"
                          src={NewPic}
                          alt="Blogs"
                        />
                      </Link>
                    </div>
                    <div className="p-5">
                      <Link to={"/Business-success"}>
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 line-clamp-1">
                          From Clicks to Getaways: How Risezonic....
                        </h5>
                      </Link>
                      <p className="font-normal text-gray-700 mb-3 line-clamp-3">
                        Hey there folks! Buckle up because Risezonic is about to
                        take you on a thrilling journey where pixels meet
                        passports and algorithms lead to adventures. In the
                        fast-paced world of business, where digital know-how and
                        a thirst for adventure go hand in hand, there stands
                        Risezonic – a force to be reckoned with – the new face
                        of success in the digital marketing business and the
                        corporate travel industry.
                      </p>
                      <Link
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                       to={"/Business-success"}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>    
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
