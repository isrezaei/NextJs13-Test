import React from 'react';

const fetchSearch = async (searchResults) =>
{
    const res = await fetch(`https://serpapi.com/search.json?engine=google&q=${searchResults}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    return await res.json()
}

const searchResults = async ({params : {searchResults}}) => {
    const GetData = await fetchSearch(searchResults)

    return (
        <div>
            <p>your searched for "{searchResults}"</p>
            <ol>
                {GetData.organic_results.map((results) => (
                    <li key={results.position}>
                        <h4>{results.title}</h4>
                        <p>{results.snippet}</p>
                    </li>
                ))}
            </ol>
            
        </div>
    );
};

export default searchResults;