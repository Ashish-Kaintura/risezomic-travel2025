import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Travel and Tourism Blogs | Risezonic Travels</title>
        <meta
          name="description"
          content="Risezonic Travel is Top Rated  corporate travel agency in India, providing innovative solutions for business travel "
        />
        <link rel="canonical" href="https://www.risezonictravel.com/blogs" />
      </Helmet>
    </div>
  );
}
