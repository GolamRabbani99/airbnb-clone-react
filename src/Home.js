import React from 'react'
import './Home.css'


import Banner from "./Banner"
import Card from "./Card"
function Home() {
    return (
        <div className="home">
            
            <Banner />

            <div className="home__section">
                <Card src="https://a0.muscache.com/im/pictures/7f80b4d7-4e11-4761-a2d7-357e041c3c32.jpg?im_w=240" title="home1" description="Ideally, architects of houses design rooms to meet the needs of the people who will live in the house"/>
                <Card src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=240" title="home1" description="Ideally, architects of houses design rooms to meet the needs of the people who will live in the house"/>
                <Card  src="https://www.planetware.com/wpimages/2020/01/england-in-pictures-beautiful-places-to-photograph-london.jpg" title="home1" description="Ideally, architects of houses design rooms to meet the needs of the people who will live in the house"/>
                <Card  src="https://www.planetware.com/wpimages/2020/01/england-in-pictures-beautiful-places-to-photograph-london.jpg" title="home1" description="Ideally, architects of houses design rooms to meet the needs of the people who will live in the house"/>
            </div>

            <div className="home__section">
            <Card  src="https://www.planetware.com/wpimages/2020/01/england-in-pictures-beautiful-places-to-photograph-london.jpg" title="home1" description="Ideally, architects of houses design rooms to meet the needs of the people who will live in the house" price="$44"/>
            <Card  src="https://www.planetware.com/wpimages/2020/01/england-in-pictures-beautiful-places-to-photograph-london.jpg" title="home1" description="Ideally, architects of houses design rooms to meet the needs of the people who will live in the house" price="$55.99"/>
            <Card  src="https://www.planetware.com/wpimages/2020/01/england-in-pictures-beautiful-places-to-photograph-london.jpg" title="home1" description="Ideally, architects of houses design rooms to meet the needs of the people who will live in the house" price="50.90"/>
            </div>
        </div>
    )
}

export default Home
