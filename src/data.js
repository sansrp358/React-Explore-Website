import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [ 
    { id: 1, href: '#home', text:'home'},
    { id: 2, href: '#about', text:'about'},
    { id: 3, href: '#services', text:'services'},
    { id: 4, href: '#tours', text:'tours'},

];

export const socialLinks = [
    {id:1, href:'https://www.twitter.com', icon:'fab fa-twitter'},
    {id:2, href:'https://www.facebook.com', icon:'fab fa-facebook'},
    {id:3, href:'https://www.squarespace.com', icon:'fab fa-squarespace'},
];

export const services = [
    {id:1,icon:'fas fa-wallet fa-fw',title:'Saving Money ',text:'lorem ipsum dolor sit amet consecutor adipsiacig elit ghui'},
    {id:2,icon:'fas fa-tree fa-fw',title:'endless hiking ',text:'lorem ipsum dolor sit amet consecutor adipsiacig elit ghui'},
    {id:3,icon:'fas fa-socks fa-fw',title:'amazing comfort ',text:'lorem ipsum dolor sit amet consecutor adipsiacig elit ghui'}

];

export const tours = [
{
    id:1,
    image:tour1,
    date:'august 26th, 2020',
    title: 'Tibet Adventure',
    info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location:'china',
    days: '6 days',
    price:'from $2100'
},
{
    id:2,
    image:tour2,
    date:'october 1th, 2020',
    title: 'South Korea',
    info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location:'Korea',
    days: '11 days',
    price:'from $1100'
},
{
    id:3,
    image:tour3,
    date:'september 15th, 2020',
    title: 'Explore Hong Kong',
    info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location:'Hong Kong',
    days: '8 days',
    price:'from $5100'
},
{
    id:4,
    image:tour4,
    date:'december 5th, 2019',
    title: 'Kenya Highlights',
    info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location:'Kenya',
    days: '20 days',
    price:'from $3300'
},


];