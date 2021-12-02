import React from 'react';
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
        <>
        <div className="flex justify-center">
            <img className = 'img order-2 mt-5' src="Frame 2.png" width="500" height="600"></img>
            <div className="order-1 flex flex-col p-16 mx-24 my-24">
                <div className="text-5xl font-semibold">Promosikan brand di media sosial dengan mudah!</div>
                <div className="text-left text-gray-400 mt-16">Endozzer ada untuk menghubungkan brand yang kamu punya dengan influencer yang tepat untuk mempromosikan produk / jasa dari brand kamu ke publik.</div>
                <div className="flex flex-row space-x-10 mt-12 ml-10"> 
                    <ColorButton    onClick={() => handleButtonClick("/login_brand")} 
                                    className="order-1 text-2xl font-light" 
                                    variant="contained">SAYA BRAND OWNER</ColorButton>
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
                <div className="text-justify pl-8 pt-8 text-gray-400">Endozzer merupakan platform influencer marketing yang menyediakan fasilitas bagi brand owner untuk menemukan influencer dalam mempromosikan produk mereka. Brand owner dapat menemukan influencer yang tepat sesuai kriteria yang diinginkan dan influencer bisa mendapatkan bayaran hanya dengan memposting campaign dari sebuah brand owner.</div>
            </div>
        </div>

        <div className="flex flex-col mx-40 my-40">
            <div className="flex justify-center text-3xl font-medium pl-8 text-purple-700">Untuk Siapa Saja?</div>
            <div className="flex flex-row mt-8">
                <div className="order-1 flex flex-col pr-16">
                    <img className='img' src="Rectangle 223.png" width="400" height="65"></img>
                    <div className="text-2xl font-light text-left">Untuk Brand Owner</div>
                    <div className="font-light text-left text-gray-400 pr-16">Platform Endozzer membantu small business dalam menemukan influencer yang tepat untuk mempromosikan produknya.</div>
                </div>

                <div className="order-2 flex flex-col">
                    <img className='img' src="Rectangle 225.png" width="400" height="65"></img>
                    <div className="text-2xl font-light text-left">Untuk Influencer</div>
                    <div className="font-light text-left text-gray-400">Jadikan Media Sosial kamu tempat untukmu berkreasi dan menghasilkan pendapatan.</div>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center rounded-3xl bg-purple-600 p-16 m-16">
            <div className="flex flex-row justify-center space-x-10">
                <div className="order-1 text-2xl font-light text-left ml-8">Siapkah kamu menjadikan media sosial sebagai pijakan karirmu?</div>
                <Button onClick={() => handleButtonClick("/login")} 
                        className="order-2 text-2xl font-light bg-purple-600" 
                        variant="outlined">MASUK SEBAGAI INFLUENCER</Button>
                <Button onClick={() => handleButtonClick("/login_brand")} 
                        className="order-3 text-2xl font-light bg-purple-600" 
                        variant="outlined">MASUK SEBAGAI BRAND OWNER</Button>
            </div>
        </div>

        <div className='flex justify-center mb-16'>
            <img className='img' src="Group 69.png" width="200" height="40"></img>
        </div>
        
        </>
    );

}

export default Utama;