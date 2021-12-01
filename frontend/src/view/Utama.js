import React from 'react';
<<<<<<< HEAD

=======
import {IconButton, AppBar, makeStyles, Toolbar, Button, styled, Typography, Grid } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import makeStyle from '@material-ui/core';
import { border, Box, grid } from '@mui/system';
import { Stack } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#ffffff",
    },
}));
  
>>>>>>> 50fb303900b2ba5f8b2186c8f4ec9d13d87b8094
const Utama = props =>{
    const { header } = useStyles();
    const { history } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleButtonClick = pageURL =>{
      history.push(pageURL);
    };

    const menuItems = [
        {
          menuTitle: "Login",
          pageURL: "/login"
        },
        {
          menuTitle: "Login_brand",
          pageURL: "/login_brand"
        },
      ];
    
    return(
<<<<<<< HEAD
        <div>Homepage</div>
    )
=======
        <>
        <div className="flex justify-center">
            <img className = 'img order-2 mt-5' src="Frame 2.png" width="500" height="600"></img>
            <div className="order-1 flex flex-col p-16 mx-24 my-24">
                <div className="text-5xl font-semibold">Promosikan produk dan dapatkan fee-nya!</div>
                <div className="text-left text-gray-400 mt-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since the 1500s,</div>
                <div className="flex flex-row space-x-10 mt-12 ml-10"> 
                    <ColorButton    onClick={() => handleButtonClick("/login_brand")} 
                                    className="order-1 text-2xl font-light" 
                                    variant="contained">SAYA PEMILIK BRAND</ColorButton>
                    <ColorButton    onClick={() => handleButtonClick("/login")} 
                                    className="order-2 text-2xl font-light" 
                                    variant="contained">SAYA INFLUENCER</ColorButton>
                </div>
            </div>
        </div>

        <div className="flex justify-center mx-40 my-40">
            <img className='img order-1' src="Frame 3.png" width="300" height="50"></img>
            <div className="order-2 flex flex-col">
                <div className="text-3xl font-medium pl-8 text-purple-700">Apakah Itu ENDOZZER?</div>
                <div className="text-justify pl-8 pt-8 text-gray-400">ENDOZZER merupakan platform influencer marketing yang menyediakan fasilitas bagi brand-owner untuk menemukan influencer dalam mempromosikan produk mereka. Brand-owner dapat menemukan influencer yang tepat sesuai kriteria yang diinginkan dan Influencer bisa mendapatkan uang saku tambahan hanya dengan memposting campaign dari sebuah perusahaan.</div>
            </div>
        </div>

        <div className="flex flex-col mx-40 my-40">
            <div className="flex justify-center text-3xl font-medium pl-8 text-purple-700">HOW IT WORKS</div>
            <div className="flex flex-row mt-8">
                <div className="order-1 flex flex-col">
                    <img className='img' src="Rectangle 223.png" width="400" height="65"></img>
                    <div className="text-2xl font-light text-left ml-8">Untuk Pemilik Brand</div>
                    <div className="font-light text-left text-gray-400 ml-8">Platform ENDOZZER membantu small business dalam menemukan influencer yang tepat untuk mempromosikan produknya.</div>
                </div>

                <div className="order-2 flex flex-col">
                    <img className='img' src="Rectangle 225.png" width="400" height="65"></img>
                    <div className="text-2xl font-light text-left ml-8">Untuk Influencer</div>
                    <div className="font-light text-left text-gray-400 ml-8">Jadikan Media Sosial kamu tempat untukmu berkreasi dan menghasilkan pendapatan.</div>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center bg-purple-600 bg-origin-border bg-contain">
            <div className="flex flex-row justify-center">
                <div className="order-1 text-2xl font-light text-left ml-8">Siapkah kamu menjadikan Media Sosial sebagai pijakan karirmu?</div>
                <Button onClick={() => handleButtonClick("/login")} 
                        className="order-2 text-2xl font-light text-left ml-8 bg-purple-600" 
                        variant="outlined">Jadi influencer</Button>
                <Button onClick={() => handleButtonClick("/login_brand")} 
                        className="order-3 text-2xl font-light text-left ml-8 bg-purple-600" 
                        variant="outlined">masuk sebagai brand owner</Button>
            </div>
        </div>

        <div className="flex flex-col justify-center mx-40 my-40">
            <div className="flex flex-row justify-center space-x-10 mt-8">
                <div className="order-1 flex flex-col space-y-2">
                    <img className='img' src="Group 28.png" width="200" height="200"></img>
                    <div className="text-2xl font-medium text-left">@Zoesennett</div>
                    <div className="font-light text-left text-gray-400">Skin And beauty care</div>
                    <div className="text-base font-medium text-left text-purple-700">100K Followers</div>
                </div>

                <div className="order-2 flex flex-col space-y-2">
                    <img className='img' src="Group 29.png" width="200" height="200"></img>
                    <div className="text-2xl font-medium text-left">@AllisonCamile</div>
                    <div className="font-light text-left text-gray-400">Food and Beverage</div>
                    <div className="text-base font-medium text-left text-purple-700">50000 Followers</div>
                </div>

                <div className="order-3 flex flex-col space-y-2">
                    <img className='img' src="Group 30.png" width="200" height="200"></img>
                    <div className="text-2xl font-medium text-left">@makaylaj2019</div>
                    <div className="font-light text-left text-gray-400">Health and Lifestyle</div>
                    <div className="text-base font-medium text-left text-purple-700">2000 Followers</div>
                </div>
            </div>
        </div>

        <div className='flex justify-center mb-16'>
            <img className='img' src="Group 69.png" width="200" height="40"></img>
        </div>
        
        </>
    );
>>>>>>> 50fb303900b2ba5f8b2186c8f4ec9d13d87b8094
}

export default Utama;