
import React from "react";

import './App.css';


class StarWars extends React.Component
{   

    constructor()
    {
        super() //calling super
        this.state={
            loadCharacters:false,
            name:null,
            img:null,
            height: null,
            homeland: null,
            wiki: null
        }
    }
   
    GetCharacters()
    {   
        const RandomId=Math.round(Math.random()* 88);
        const url=`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${RandomId}.json`
         
        fetch(url)
      
        .then(response => response.json())
        .then(data =>{
            console.log(data);

            this.setState(
            {   
                
                name: data.name,
                img: data.image,
                height: data.height,
                homeland: data.homeworld,
                wiki: data.wiki,
                loadCharacters:true
            }
            )
        })
        
        // this.setState({
        //     name: "pursottam sah",
        //     height: 180,
        //     homeland: "Arunachal Pradesh",
        //     films: ['Dhoni','3idiots'],
        //     loadCharacters:true
        // })
    }
    render()
    {
        return(
            <>
            <div>
                <h4 className="TopTitle">Welcome To My StarWars API Website</h4>
            </div>

            <div>
                {this.state.loadCharacters &&
                <div className="properties">
                    <h2>{this.state.name}</h2>
                    <img src={this.state.img} alt="star-warsHereos" id="starsImg"></img>
                    
                    <p>Height: {this.state.height}m</p>
                    <p>Homeworld :{this.state.homeland}</p>
                    <ul>
                        <li><a href={this.state.wiki}>{this.state.wiki}</a></li>
                    </ul>
                </div>
                }
                <button type="button" onClick={()=> this.GetCharacters()} className="btn">Randomize Character</button>
            </div>

            </>
        )
    }
}

export default StarWars