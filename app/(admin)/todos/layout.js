import TodosList from "./todosList";

const RootLayout = ({children}) => {
    return (
        <>
            <main>
                <div>
                    <TodosList/>
                </div>

                <div>{children}</div>
            </main>

            <style jsx>
                {
                    `
                      main {
                      display: flex;
                      }
                    `
                }
            </style>
        </>
    );
};

export default RootLayout;