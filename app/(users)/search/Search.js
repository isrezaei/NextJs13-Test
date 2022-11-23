'use client'

import {useState} from "react";
import {useRouter} from "next/navigation";

const Search = () => {

    const [search , setSearch] = useState()
    const router = useRouter()

    const handelSearch = e =>
    {
        e.preventDefault()
        setSearch('')
        router.push(`/search/${search}`)
    }


    return (
        <div>
            <form onSubmit={handelSearch}>
                <input
                    placeholder={'search something...'}
                    onChange={e => setSearch(e.target.value)}
                />
                <button>search</button>
            </form>
        </div>
    );
};

export default Search;