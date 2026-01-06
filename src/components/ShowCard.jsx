import React from "react";
import { useState, useEffect } from "react";
import GenreCard from "./GenreCard";

function ShowCard({selectedShow}) {
  const [data, setData] = useState(null);
  // first load the page
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const showRequested = selectedShow.toLowerCase();

    // Fetch show details based on selectedShow
    // if loading, exit logic
    // check if selectedShow info available in cash
    if (!selectedShow) return;

    // 1 define cash
    let cashe = {};
    if (localStorage.getItem("showData")) {
      cashe = JSON.parse(localStorage.getItem("showData"));
    }
    // 2 check if show in cash
    if (showRequested in cashe) {
      // load from cash
      setData(cashe[showRequested]);
      return;
    }

    // 3 if not in cash(cash is gone to no avail), fetch from Api
    async function fetchShowData() {
      setLoading(true);
      try {
        const baseurl = "https://api.imdbapi.dev/titles";
        const finalurl = `${baseurl}?title=${encodeURIComponent(selectedShow)}`;
        const res = await fetch(finalurl);
        const showData = await res.json();

       function normalize(str) {
          return str.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove spaces/punctuation
        }

        const matchedShow = showData.titles?.find(
          (t) => {
            const primary = t.primaryTitle ? normalize(t.primaryTitle) : "";
            const original = t.originalTitle ? normalize(t.originalTitle) : "";
            const requested = normalize(selectedShow);
            return primary.includes(requested) || original.includes(requested);
          }
        );

      if (!matchedShow) {
        setData(null);
        return;
      }


        // save to cash
        setData(matchedShow);

        cashe[showRequested] = matchedShow;
        localStorage.setItem("showData", JSON.stringify(cashe));
      } catch (error) {
        console.error("Error fetching show data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchShowData();
    // if info fetched from Api,
    // make shure it is saved in cash for next time
  }, [selectedShow]);

  if (!selectedShow) return <div>Select a show</div>;
  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data found</div>;
  
  console.log("Selected how in ShowCard", selectedShow)
  const showInfo = data; // data is already the show object
  const genres = showInfo.genres ?? [];
  const rating = showInfo.rating ?? {};


  return (
    <div className="show-card">
      
      <h2>{showInfo.originalTitle}</h2>
      <p>Year: {showInfo.startYear}</p>
      <p>Type: {showInfo.type}</p>


      <div className="genre-container">
        <p>Genres: </p>
        {genres.length > 0 ? (
          genres.map((genre, index) => (
            <GenreCard key={index}>{genre}</GenreCard>
          ))
        ) : (
          <p>No genres available</p>
        )}
      </div>
      
      <div className="image-container">
        <img
          className="default-img"
          src={showInfo.primaryImage?.url}
          alt={showInfo.primaryTitle}
        ></img>
      </div>
      
      <div className="rating-card">
        <h3>Rating:</h3>
        <div className="rating-item">
          <h4>{rating.aggregateRating}</h4>
          <h5>{rating.voteCount} votes</h5>
        </div>
      </div>

      <p>Plot: {showInfo.plot}</p>
    </div>
  );
}

export default ShowCard;
