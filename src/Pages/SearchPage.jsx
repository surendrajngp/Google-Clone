import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../Data/StateProvider";
import useGoogleSearch from "../SearchEngine/useGoogleSearch";
import Response from "../SearchEngine/response";
import Search from "../Components/Search";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SearchPage = () => {
  // import search term / content
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  // call search engine by passing term
  const { data } = useGoogleSearch(term);

  // const data = Response;
  // console.log(data);
  return (
    <div className="SearchPage">
      <div className="SearchPage_header">
        <div className="SearchPage_header_top">
          <Link to="/">
            <img
              className="SearchPage_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="Google"
            />
          </Link>
          <div className="SearchPage_header_body">
            <Search hidenButtons />
          </div>
        </div>

        {/* ------------ */}
        <div className="SearchPage_header_bottom">
          <div className="SearchPage_Oprtions">
            <div className="SearchPage_Oprtions_Left">
              <div className="SearchPage_Oprtion">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div  className="SearchPage_Oprtion">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="SearchPage_Oprtion">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="SearchPage_Oprtion">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="SearchPage_Oprtion">
                <YouTubeIcon />
                <Link to="/videos">Videos</Link>
              </div>
              <div className="SearchPage_Oprtion">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="SearchPage_Oprtions_Right">
              <div className="SearchPage_Oprtion">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="SearchPage_Oprtion">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body / Resuls of search Page */}
      {/* render if input exists */}
      {data && (
        <div className="SearchPage_results_body">
          <p className="SearchPage_resulCount">
            About {data.searchInformation.formattedTotalResults} results{" "}
            {data.searchInformation.formattedSearchTime} for
          </p>
          <div className="SearchPage_results">
            {data.items.map((item) => {
              return (
                <div className="SearchPage_result">
                  <a className="link" href={item.link}>
                    {item.pagemap &&
                      item.pagemap.cse_image &&
                      item.pagemap.cse_image.length > 0 && (
                        <img
                          style={{
                            objectFit: "contain",
                            height: "20px",
                            width: "20px",
                            marginRight: "10px",
                          }}
                          src={item.pagemap.cse_image[0].src}
                          alt=""
                        />
                      )}
                    {item.displayLink}&nbsp; &#9660;
                  </a>
                  <a className="title" href={item.link}>
                    <h3>{item.title}</h3>
                  </a>
                  <p className="snippet">{item.snippet}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
