import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    height: "auto",
    width: "100%",
    color: "#000000",  
    textAlign: "center",
    background: "#e9ffad",
    padding: "20px",
    borderRadius: "10px",
    margin: "0 auto",
    maxWidth: "90%", 
};

const CarouselComponent = ({ posts, onLastSlide }) => (
    <Carousel
        autoplay={{
            dotDuration: true,
        }}
        autoplaySpeed={1500}
        afterChange={(current) => {
            if(current === posts.length - 1)
            {
                onLastSlide();
            }
        }}
    >

        {posts.map((post) => (
            <div key={post.id} style={contentStyle}>
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
            </div>
        ))}

        {/* Create 2 carousel */}
        {/* {posts.map((post) => (
            <div key={post.id}>
                <h1 style={contentStyle}>{post.title}</h1>
                <h3 style={contentStyle}>{post.body}</h3>
            </div>
        ))} */}

    </Carousel>
);
export default CarouselComponent;