import React, { createContext } from 'react';

export const ProductContext = createContext();

const products = [
    { id: 1, categoryId: 6, name: 'Doom', desc: "1993", price: 175, image: 'doom.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 2, categoryId: 2, name: 'DuckTales', desc: "1989", price: 200, image: 'duck-adventure.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 3, categoryId: 7, name: 'Dune', desc: "1992", price: 300, image: 'dune.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 4, categoryId: 1, name: 'Pac-Man', desc: "1980", price: 150, image: 'pacman.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 5, categoryId: 6, name: 'Wolfenstein 3D', desc: "1992", price: 300, image: 'wolfenstein-3d.jpg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 6, categoryId: 2, name: 'Donkey Kong', desc: "1981", price: 100, image: 'donkeykongarcade.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 7, categoryId: 2, name: 'Super Mario Bros', desc: "1985", price: 200, image: 'mario_super_bros.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 8, categoryId: 4, name: 'The Legend of Zelda', desc: "1986", price: 215, image: 'legend-of-zelda.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 9, categoryId: 5, name: 'Metroid', desc: "1986", price: 150, image: 'metroid.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 10, categoryId: 6, name: 'Contra', desc: "1987", price: 250, image: 'contra.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 11, categoryId: 5, name: 'Castlevania: Symphony of the Night', desc: "1997", price: 150, image: 'castlevania.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 12, categoryId: 3, name: 'Tetris', desc: "1984", price: 75, image: 'tetris.jpeg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 13, categoryId: 8, name: 'Dune II', desc: "1992", price: 200, image:'Dune_2.jpg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id: 14, categoryId: 2, name:'Sonic the Hedgehog', desc:"1991", price :150,image:'sonic.jpg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id :15 ,categoryId :9 ,name :'Street Fighter II',desc :"1991",price :150,image :'street_fighter.jpg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id :16 ,categoryId :2 ,name :'Mega Man',desc :"1988",price :120,image :'megaman.jpg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id :17 ,categoryId :10 ,name :'Final Fantasy VII',desc :"1997",price :250,image :'final_fantasy.jpg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id :18 ,categoryId :10 ,name :'Chrono Trigger',desc :"1995",price :120,image :'chrono_trigger.jpg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id :19 ,categoryId :2 ,name :'Sonic the Hedgehog II',desc :"1992",price :170,image :'sonic2.jpg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
    { id :20 ,categoryId :4 ,name :'The Legend of Zelda Ocarina of Time',desc :"1998",price :225,image :'zelda_ocarina.jpg', presentation: ["https://www.youtube.com/embed/QvhbDJ8YTJI"] },
];

export const ProductProvider = ({ children }) => (
    <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
);