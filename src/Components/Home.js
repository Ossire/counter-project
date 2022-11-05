import React from "react";
import Seo from "./Seo";

const Home = () => {
    return (
        <div>
            <Seo
                title= 'A React Counter App project'
                name= 'description'
              description= 'A Beginner friendly react app project'
            type='article'
              />
            <h1>Welcome... This is the Homepage for my ALT-SCHOOL counter react app project....</h1>
        </div>
    )
}

export default Home