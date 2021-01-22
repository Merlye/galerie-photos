import {Card} from './Card';
import React from 'react';

export class Galerie extends React.Component {


    state = {
        cards: []
    }


    getPhotos = async() => {
        try {
            window.fetch("http://localhost:5000/galerie1").then(function (httpResponse) {
                return httpResponse.json();
            })
            .then(jsonData => {
                console.log(jsonData)

                const cards = jsonData.map((image,index) => 
                {
                    return <Card key={index}
                    id={image.img_id}
                    title={image.title}
                    description={image.description}
                    path = {image.path} />
                });
                
                this.setState({cards: cards});
            })
            // const response = await fetch("http//localhost:5000/galerie1");
            // const jsonData = await response.json();
            
        } catch (error) {
            console.error(error.message);
        }
    }

    componentDidMount() {
        this.getPhotos()
    }

    render() {
        return <section className="card-list">{this.state.cards}</section>
    }
}