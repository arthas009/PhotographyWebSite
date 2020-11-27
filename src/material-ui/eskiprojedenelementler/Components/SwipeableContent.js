import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@material-ui/core'

import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = [{
    title: 'Hedefi olmayan sporcu, rehberi olmayan gezgin gibidir',
    description:
        "Kendine bir hedef belirlemek istiyorsan",
    image: './Images/Sporcularimiz/OguzhanPolat.jpg',
    btnName: "İletişim",
    btnUrl: "Iletisim"
},
{
    title: 'Atılan her ok, hedefe değmelidir!',
    description:
        "",
    image: 'https://miro.medium.com/max/3000/1*bHf1bqIQEJmtRDnuxVPdfg.jpeg',
    btnName: "Okçuluk Hakkında",
    btnUrl: "OkculukHakkinda"
},
{
    title: 'En son haberleri kaçırmayın!',
    description:
        "",
    image: './Images/Sporcularimiz/HaberFotografi1.jpg',
    btnName: "Haberler",
    btnUrl: "Haberler"
},
];

export default function SwipeableContent(props) {
    const { anasayfafotolar } = props;
    console.log(anasayfafotolar);
    if (anasayfafotolar != undefined) {
 
        let mmainFeaturedPost = [];

        anasayfafotolar.Images.map((item, i) =>
        i===0 ? mmainFeaturedPost.push({
            title: 'Hedefi olmayan sporcu, rehberi olmayan gezgin gibidir',
            description:
                "Kendine bir hedef belirlemek istiyorsan",
            image: item.imageName,
            btnName: "İletişim",
            btnUrl: "Iletisim",
            imageText:"gaziOkcu"
        }) : i===1? mmainFeaturedPost.push({
            title: 'Atılan her ok, hedefe değmelidir!',
            description:
                "",
            image: item.imageName,
            btnName: "Okçuluk Hakkında",
            btnUrl: "OkculukHakkinda",
            imageText:"gaziOkcu"
        }) : i ===2 ? mmainFeaturedPost.push({
            title: 'En son haberleri kaçırmayın!',
            description:
                "",
            image: item.imageName,
            btnName: "Haberler",
            btnUrl: "Haberler",
            imageText:"gaziOkcu" }):
            
            mmainFeaturedPost.push({
                title: '',
                description:
                    "",
                image: item.imageName,
                btnName: "",
                btnUrl: "",
                imageText:"gaziOkcu"
            })

        
    )
        
        return (
            <Grid spacing={4}>
                <Carousel autoPlay={true} navButtonsAlwaysInvisible={true}>
                    {
                        mmainFeaturedPost.map((item, i) =>
                            <MainFeaturedPost key={i} post={item} isMainPage={true} />
                        )
                    }
                </Carousel>
            </Grid>
        )
    }
    else{
        return (<React.Fragment></React.Fragment>)
    }
    /*
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        <Carousel autoPlay={true}>
            {
                items.map((item, i) => <MainFeaturedPost key={i} item={item} />)
            }
        </Carousel>
    )*/
}
