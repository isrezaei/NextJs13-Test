import React from 'react';
import Search from "./Search";

const RootLayout = ({children}) => {
    return (
        <>
            <div>
                <h3>Search ...</h3>

                {/* CLIENT SIDE COMPONENTS */}
                <Search/>

                {/* SERVER SIDE COMPONENTS */}
                {children}
            </div>

            <style jsx>
                {
                    `
                      div {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                      }
                    `
                }
            </style>
        </>
    );
};

export default RootLayout;