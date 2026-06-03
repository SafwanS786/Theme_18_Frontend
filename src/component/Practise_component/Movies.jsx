import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function Movies() {
  const [moviedata, setMovieData] = useState([]);
  const [search, setSearch] = useState("");
  const [generdata, setgenerData] = useState("all");
  const [sort, setSort] = useState("");
  const movies = [
    { id: 1, title: "Inception", genre: "action", rating: 8.8, year: 2010 },
    { id: 2, title: "The Hangover", genre: "comedy", rating: 7.7, year: 2009 },
    { id: 3, title: "Interstellar", genre: "action", rating: 8.6, year: 2014 },
    { id: 4, title: "Forrest Gump", genre: "drama", rating: 8.8, year: 1994 },
    { id: 5, title: "Home Alone", genre: "comedy", rating: 7.6, year: 1990 },
    { id: 6, title: "The Godfather", genre: "drama", rating: 9.2, year: 1972 },
  ];

  useEffect(() => {
    const apidata = movies.map((item) => ({
      id: item.id,
      title: item.title,
      genre_data: item.genre,
      rate: item.rating,
      year_rel: item.year,
    }));

    setMovieData(apidata);
  }, []);

  const FilterMovies = useMemo(() => {
    return moviedata.filter((item) => {
      const TextSeacrh = search.toLowerCase();
      console.log("I am Testing", TextSeacrh);
      return (
        item.title?.toLowerCase().includes(TextSeacrh) ||
        item.genre_data?.toLowerCase().includes(TextSeacrh) ||
        String(item.year_rel)?.toLowerCase().includes(TextSeacrh)
      );
    });
  }, [moviedata, search]);

  const GenereData = useMemo(() => {
    return FilterMovies.filter((item) => {
      if (generdata === "all") {
        return true;
      }
      return item.genre_data === generdata;
    });
  }, [FilterMovies, generdata]);

  const Sorted = [...GenereData].sort((a, b) => {
    if (sort === "rating") return b.rate - a.rate;
    if (sort === "year") return b.year_rel - a.year_rel;
  });
  const HandleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const HandleSort = useCallback((e) => {
    console.log("What the E Sort", e);
    setSort(e.target.value);
  }, []);
  const HandleGener = useCallback((e) => {
    console.log("What the E G_Data", e);

    setgenerData(e.target.value);
  }, []);
  return (
    <div>
      <h1>Movies</h1>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={HandleSearch}
      />
      <select name="sort" id="" value={sort} onChange={HandleSort}>
        <option value="rating">Rating</option>
        <option value="year">Year</option>
      </select>
      <select name="all" id="all" value={generdata} onChange={HandleGener}>
        <option value="all">All</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
      </select>
      {Sorted.map((value) => {
        return (
          <div key={value.id} className="movie-card">
            <h1>{value.title}</h1>
            <span>{value.genre_data}</span>
            <span>Rate:{value.rate}</span>
            <span>{value.year_rel}</span>
          </div>
        );
      })}
    </div>
  );
}
