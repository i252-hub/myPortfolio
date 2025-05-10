import { Box, Grid, Card, CardContent, Container, Button } from '@mui/material';
import Profile from './assets/portfolioprofile.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';



function App() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); 
  };

  const handleDownload = () => {
    const resumeUrl = "./assets/KirstenAshleyM_FrontendDev_Resume.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "KirstenAshleyM_FrontendDev_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className='w-screen min-h-screen relative bg-linear-80 from-[#474243]/90 to-[#c17480]/90 overflow-x-hidden'>
      <nav className="flex justify-between items-center pt-8 max-sm:pt-2 text-[1.2rem]">
        <ul className="pl-5 max-sm:pl-0">
          <li className="text-3xl font-extrabold  max-sm:text-2xl bg-gradient-to-b from-white to-[#c17480] bg-clip-text text-transparent">KirstenAshleyM</li>
        </ul>
        <ul className="flex gap-3 pr-5 max-sm:hidden">
          <li className="text-white cursor-pointer" onClick={() => scrollToSection("project")}>Projects</li>
          <li className="text-white cursor-pointer" onClick={() => scrollToSection("about")}>About Me</li>
          <li className="text-white cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <button  onClick={() => setIsOpen(true)} className='lg:hidden'>
          <MenuIcon className="text-white lg:hidden" sx={{fontSize: "2em"}} />
          
        </button>

        <div
        className={`fixed inset-0 bg-[#474243] bg-opacity-50 z-50 transition-opacity ${
          isOpen ? "opacity-95 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

<div
        className={`fixed top-0 right-0 h-full w-64 bg-linear-80 from-[#474243]/90 to-[#c17480]/90 p-5 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <button  className="text-white text-3xl mb-5 relative bottom-[14px]" onClick={() => setIsOpen(false)}>
          <MenuIcon sx={{fontSize: "1.3em"}} />
        </button>
        <ul className="flex flex-col gap-5 text-white">
          <li className="cursor-pointer" onClick={() => {
  setIsOpen(false);
  scrollToSection("project");
}}>Projects</li>
          <li className="cursor-pointer" onClick={() => {
  setIsOpen(false);
  scrollToSection("about");
}}>About Me</li>
          <li className="cursor-pointer" onClick={() => {
  setIsOpen(false);
  scrollToSection("contact");
}}>Contact</li>
        </ul>
      </div>
      </nav>
       
       <Container sx={{ paddingTop: "64px", [theme.breakpoints.down("xl")]: {
      margin: "0 auto",
      padding: "0"
    },  }}>
        <Grid container spacing={2}  sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, paddingTop: "3em",
         [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "1fr",
      width: "80%",
      margin: "0 auto",
    },   [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 auto",
      paddingTop: 0
    },  }}>
        <Grid item sx={{ paddingTop: "3em", [theme.breakpoints.down("lg")]: { gridRow: 2 }, [theme.breakpoints.down("sm")]: { paddingTop: 0} }}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none"}}>
            <CardContent sx={{[theme.breakpoints.down("lg")]: {
    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
  }}}>
              <p className='text-6xl text-white max-lg:flex max-lg:justify-center max-lg:text-7xl max-sm:text-4xl'>Hi, I'm <span className='text-[#e494a0] ml-1'>Kirsten</span></p>
              <p className='text-4xl pt-2 text-white max-lg:flex max-lg:justify-center max-lg:text-5xl max-sm:text-2xl'>UX/UI Designer</p>
              <p className='text-white pt-1 max-lg:flex max-lg:justify-center max-lg:text-center max-sm:text-[14px] max-sm:text-justify max-sm:p-2'>Passionate about creating beautiful, user-centered interfaces by blending design with purpose</p>
              <Button onClick={handleDownload} sx={{background: "linear-gradient(80deg, rgba(71, 66, 67, 0.2), rgba(193, 116, 128, 0.9))", borderRadius: "5rem", color: "white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", marginTop: "1rem",  textTransform: "none", [theme.breakpoints.down("lg")]: {
    padding: "12px", fontSize: "1.1rem"
  }, [theme.breakpoints.down("sm")]: {
    padding: "8px", fontSize: "14px", width: "90%"
  }}}
              >Download Resume</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sx={{ [theme.breakpoints.down("lg")]: { gridRow: 1 } }}>
          <Card sx={{ height: '100%'}}>
            <CardContent sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
              <img src={Profile} className='h-full w-full'/>
              <div className='relative  bg-[#c17480]'></div>
              
            </CardContent>
          </Card>
        </Grid>
        </Grid>
       </Container>

      <section className='relative top-30 min-h-[50%]'>
       <Box sx={{background: "linear-gradient(80deg, rgba(255, 255, 250, 0.5), rgba(193, 116, 128, 0.9))", width: "14em", height: "3em", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: " 0 20px 20px 0", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}}>
        <p className='text-[1.5rem] text-white' id="project">PROJECTS</p></Box>

        <Container sx={{paddingTop: "3em", margin: "0"}}>
        <Grid container sx={{ display: "grid", gridTemplateColumns: "repeat(4,25%)", gap: 2,  [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(2,1fr)",
      gap:3,
      margin: "0 auto",
    },  [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap:7,
      margin: "0 auto",
    },}} >
          <Grid item sx={{padding: 0, margin: 0, height: "100%"}}>
          <a href= "https://love-jesus-a-journaling-and-community-web-app.vercel.app/">
          <Card sx={{height: "150%", background: "rgba(193, 116, 128, 0.5)",transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)", 
      boxShadow: "rgb(255, 255, 255) 0px 20px 30px -10px;", 
    },}}>
            <CardContent>
              <p className='text-[2em] flex justify-center text-white max-xl:text-[2.5] max-xl:block max-xl:whitespace-pre-line'>Community {"\n"} WebApp</p>
              <p className='flex justify-center text-white mr-7 pt-2 text-[14px] max-xl:right-4 relative'>— a community web application designed for Christians.</p>
            </CardContent>
          </Card>
          </a>
          </Grid>
          <Grid item>
          <a href= "https://basiq.vercel.app/">
          <Card sx={{height: "150%",background: "rgba(193, 116, 128, 0.5)",transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)", 
      boxShadow: "rgb(255, 255, 255) 0px 20px 30px -10px;",  },  [theme.breakpoints.down("sm")]: {
        position: "relative",
        top: "3em"
       },}}>
            <CardContent>
              <p className='text-[2em] flex justify-center text-white max-xl:text-[2.5] max-xl:block max-xl:whitespace-pre-line'>E-commerce {"\n"} WebApp</p>
              <p className='flex justify-center text-white max-xl:relative max-xl:right-4 pt-2 text-[14px] max-md:relative max-md:right-[4rem]
              max-lg:relative max-lg:right-[7.3rem]'>— a web application designed for fashion lovers. </p>
             
            </CardContent>
          </Card>
          </a>
          </Grid>
          <Grid item>
          <a href= "https://resume-builder-blond-iota.vercel.app/">
          <Card sx={{height: "150%" ,background: "rgba(193, 116, 128, 0.5)",transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)", 
      boxShadow: "rgb(255, 255, 255) 0px 20px 30px -10px;",  },  [theme.breakpoints.down("lg")]: {
       position: "relative",
       top: "7em"
      },  [theme.breakpoints.down("sm")]: {
        position: "relative",
        top: "5.5em"
       },}}>
            <CardContent>
              <p className='text-[2em] flex justify-center text-white max-xl:block max-xl:whitespace-pre-line'>Resume Builder {"\n"} WebApp</p>
              <p className='flex justify-center max-xl:relative max-xl:right-[1rem] pt-2 text-white text-[14px] max-md:relative max-md:right-[6rem] max-md:w-[90%]
              max-lg:relative max-lg:right-[10.5rem]'>— a web application designed to build resumes.</p>
            </CardContent>
          </Card>
          </a>
          </Grid>
          <Grid item  sx={{cursor: 'pointer'}}>
          <a href= "https://magpantay-webbuilder.vercel.app/">
          <Card sx={{height: "150%" ,background: "rgba(193, 116, 128, 0.5)",transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)", 
      boxShadow: "rgb(255, 255, 255) 0px 20px 30px -10px;",  }, [theme.breakpoints.down("lg")]: {
        position: "relative",
        top: "7em"
       },  [theme.breakpoints.down("sm")]: {
        position: "relative",
        top: "8em"
       },}}>
            <CardContent >
              <p className='text-[2em]  text-white max-xl:block max-xl:whitespace-pre-line'>Metzger Clone {"\n"}WebApp</p>
              <p className='flex justify-center max-xl:relative max-xl:right-4 pt-2 max-md:relative max-md:right-[2rem] max-md:w-[90%] text-white text-[14px]
              max-lg:relative max-lg:right-[6.5rem]'>— a web application clone designed to revise its layout.</p>
            
            
            </CardContent>
          </Card>
          </a>
          </Grid>
        </Grid>
        </Container>

       <Container sx={{paddingTop: "8em", minHeight: "15em",   [theme.breakpoints.down("lg")]: {
      paddingTop: "16em"
    },}}>
        <Box sx = {{display: "flex", gap: "3em",  [theme.breakpoints.down("lg")]: {
      flexWrap: "wrap", justifyContent: "center", alignItems: "center"
    },}}>
           <div className='relative'><svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="figma">
<g id="figma_2">
<path id="Vector" d="M33.3334 100.001C42.5334 100.001 50.0001 92.5339 50.0001 83.3339V66.6672H33.3334C24.1334 66.6672 16.6667 74.1339 16.6667 83.3339C16.6667 92.5339 24.1334 100.001 33.3334 100.001Z" fill="white"/>
<path id="Vector_2" d="M16.6667 50.0004C16.6667 40.8004 24.1334 33.3337 33.3334 33.3337H50.0001V66.667H33.3334C24.1334 66.667 16.6667 59.2004 16.6667 50.0004Z" fill="white"/>
<path id="Vector_3" d="M16.6667 16.6671C16.6667 7.46715 24.1334 0.000488281 33.3334 0.000488281H50.0001V33.3338H33.3334C24.1334 33.3338 16.6667 25.8671 16.6667 16.6671Z" fill="white"/>
<path id="Vector_4" d="M50 0.000488281H66.6667C75.8667 0.000488281 83.3334 7.46715 83.3334 16.6671C83.3334 25.8671 75.8667 33.3338 66.6667 33.3338H50V0.000488281Z" fill="white"/>
<path id="Vector_5" d="M83.3334 50.0004C83.3334 59.2004 75.8667 66.667 66.6667 66.667C57.4667 66.667 50 59.2004 50 50.0004C50 40.8004 57.4667 33.3337 66.6667 33.3337C75.8667 33.3337 83.3334 40.8004 83.3334 50.0004Z" fill="white"/>
</g>
</g>
</svg>
</div>
<div><svg className='relative top-10' width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="html5">
<g id="html5_2">
<path id="Vector" d="M14.0214 90.0345L6 0.000488281H94.1867L86.1653 89.9859L50.0204 100" fill="none"/>
<path id="Vector_2" d="M50.093 92.3445V7.39062H86.1407L79.2617 84.2015" fill="none"/>
<path id="Vector_3" d="M22.3831 18.4014H50.0933V29.4369H34.4881L35.509 40.7397H50.0933V51.7509H25.3972L22.3831 18.4014ZM25.8833 57.293H36.9674L37.7452 66.1165L50.0933 69.4223V80.9439L27.439 74.624" fill="white"/>
<path id="Vector_4" d="M77.7058 18.4014H50.0442V29.4369H76.6849L77.7058 18.4014ZM75.6883 40.7397H50.0442V51.7752H63.6562L62.368 66.1165L50.0442 69.4223V80.8953L72.6499 74.624" fill="white"/>
</g>
</g>
</svg>
</div>

<div className='relative bottom-5'><svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="css3">
<g id="css3_2">
<path id="polygon2989" d="M94.1749 0.000488281L86.142 89.99L50.0335 100L14.0245 90.0041L6 0.000488281H94.1749Z" fill="none"/>
<path id="polygon2991" d="M79.2648 84.2598L86.1295 7.35962H50.0874V92.3489L79.2648 84.2598Z" fill="none"/>
<path id="polygon2993" d="M24.3959 40.7407L25.3852 51.7792H50.0874V40.7407H24.3959Z" fill="white"/>
<path id="polygon2995" d="M50.0875 18.3982H50.0493H22.408L23.4114 29.4369H50.0875V18.3982Z" fill="white"/>
<path id="polygon2997" d="M50.0874 80.8935V69.4088L50.039 69.4217L37.7453 66.1021L36.9594 57.2983H30.9856H25.8784L27.4249 74.6305L50.0366 80.9077L50.0874 80.8935Z" fill="white"/>
<path id="polygon3005" d="M63.6421 51.779L62.3608 66.0952L50.0493 69.4182V80.9024L72.679 74.6306L72.845 72.7657L75.439 43.7047L75.7083 40.7406L77.7011 18.3982H50.0493V29.4369H65.6038L64.5994 40.7406H50.0493V51.779H63.6421Z" fill="white"/>
</g>
</g>
</svg>
</div>
          <div className='relative top-5'>
            <svg width="60px" height="60px" viewBox="0 0 16 16" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="#FFFFFF"/>
</svg>
</div>
          <div>
<svg width="60px" height="60px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z" fill="none" stroke="#FFFFFF" stroke-width="2"/>
<path d="M16.6465 10.2338L13.1528 16.1482L16.8906 22.4285C16.9683 22.5709 16.8906 22.6024 16.778 22.6024H14.1108C13.9229 22.6024 13.7914 22.5956 13.7163 22.4671C13.4656 21.9662 13.2152 21.4685 12.9649 20.974C12.7143 20.4797 12.4482 19.9756 12.1667 19.4617C11.8849 18.9482 11.6063 18.4281 11.3308 17.9013C11.0802 18.4151 10.8015 18.9288 10.5325 19.4425C10.2631 19.9563 9.997 20.4668 9.73421 20.974C9.47126 21.4815 9.20203 21.9856 8.92655 22.4863C8.87636 22.6019 8.78858 22.6138 8.66353 22.6138H6.09026C5.98915 22.6138 5.97695 22.5378 6.03392 22.4478L9.65907 16.3408L6.1278 10.2145C6.06366 10.1271 6.11886 10.034 6.22174 10.0411H8.87015C8.98483 10.0347 9.08618 10.0779 9.15191 10.176C9.37732 10.6898 9.62776 11.2036 9.90323 11.7172C10.1785 12.231 10.4572 12.7384 10.7391 13.2391C11.0209 13.74 11.2995 14.2473 11.5374 14.7611C11.7877 14.2346 12.0413 13.7209 12.2981 13.2199C12.5547 12.719 12.8176 12.2149 13.087 11.7076C13.3562 11.2004 13.616 10.6963 13.8665 10.1953C13.8998 10.0854 13.9794 10.0297 14.0919 10.0411H16.5525C16.6465 10.0411 16.6853 10.1694 16.6465 10.2338Z" fill="#FFFFFF"/>
<path d="M22.0371 22.8525C20.3806 22.8784 18.6455 22.1963 17.7733 20.6852C17.3475 19.9597 17.1346 19.0511 17.1347 17.9592C17.1276 17.075 17.3479 16.2045 17.7733 15.4355C18.871 13.4733 21.0824 12.7381 23.1829 12.9311V9.13586C23.1829 9.04615 23.2205 9.00101 23.2956 9.00101H25.6623C25.727 8.99153 25.7842 9.05023 25.775 9.11658V20.5022C25.775 20.9719 25.8216 21.44 25.8502 21.9085C25.8548 21.9885 25.8085 22.0677 25.7374 22.1012C24.5681 22.6014 23.3028 22.8467 22.0371 22.8525ZM23.1829 20.4636V15.2043C21.4673 14.7277 19.8017 16.0344 19.8019 17.8436C19.7612 19.7141 21.3736 21.0064 23.1829 20.4636Z" fill="#FFFFFF"/>
</svg>
</div>
          <div>
<svg width="60px" height="60px" viewBox="0 -1.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>sketch [#125]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -7601.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M368.238325,7443.34969 L369.399325,7446.16397 L366.733325,7446.16397 L368.238325,7443.34969 Z M377.584325,7448.2242 L380.577325,7448.2242 L375.098325,7454.24832 L377.584325,7448.2242 Z M372.741325,7454.26274 L367.100325,7448.2242 L370.249325,7448.2242 L372.741325,7454.26274 Z M371.568325,7446.16397 L370.293325,7443.07362 L377.540325,7443.07362 L376.265325,7446.16397 L371.568325,7446.16397 Z M375.415325,7448.2242 L373.917325,7451.85536 L372.418325,7448.2242 L375.415325,7448.2242 Z M381.260325,7446.16397 L378.434325,7446.16397 L379.611325,7443.31055 L381.260325,7446.16397 Z M383.787325,7446.43592 L380.933325,7441.26783 C380.817325,7441.08653 380.661325,7441 380.482325,7441 C380.293325,7441 380.077325,7441.01339 379.853325,7441.01339 L368.188325,7441.01339 C367.967325,7441.01339 367.754325,7441.00515 367.567325,7441.00515 C367.377325,7441.00515 367.213325,7441.07314 367.094325,7441.26783 L364.198325,7446.75217 C363.892325,7447.25383 363.944325,7447.83379 364.327325,7448.27571 L373.021325,7457.55499 C373.277325,7457.85166 373.630325,7458 373.983325,7458 C374.342325,7458 374.701325,7457.84857 374.959325,7457.54366 L383.681325,7448.01509 C384.063325,7447.5639 384.106325,7446.9345 383.787325,7446.43592 L383.787325,7446.43592 Z" id="sketch-[#125]" fill="#FFFFFF">

</path>
            </g>
        </g>
    </g>
</svg>
</div>
          <div className='relative top-9'>
<svg fill="#000000" width="60px" height="60px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>miro</title>
<path d="M22.728 1.024h-4.356l3.868 6-8.182-6h-4.362l3.872 7.862-8.182-7.862h-4.362l3.806 10.148-3.806 19.804h4.362l8.18-21.234-3.87 21.234h4.36l8.184-23.096-3.87 23.096h4.358l8.248-25.368-8.248-4.584z" fill="#FFFFFF"></path>
</svg></div>
          <div>
          <svg width="60px" height="60px" viewBox="-37 0 330 330" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M51.3658459,0 L205.635737,0 C234.412589,0 257.04461,22.6320205 255.962773,50.413583 L255.962773,219.093537 C255.962773,246.831826 233.374026,269.463847 205.592464,269.463847 L171.66607,269.463847 L190.187111,329.094677 L100.740866,269.463847 L51.4091194,269.463847 C22.6322673,269.463847 6.14225215e-05,246.831826 6.14225215e-05,218.054974 L6.14225215e-05,50.4568565 C-0.043026715,22.6320205 22.5889938,0 51.3658459,0 Z M111.299591,185.12387 C106.063502,182.224548 101.865976,178.027022 98.7070132,172.488019 C95.5480504,166.949016 93.9902058,160.284903 93.9902058,152.538953 L93.9902058,62.6599727 C93.9902058,61.2752219 93.6872916,60.1933854 93.0381897,59.50101 C92.4323612,58.7653611 91.3937981,58.4191735 89.9225004,58.4191735 L66.9442922,58.4191735 C66.4250106,58.4191735 65.9057291,58.5057204 65.429721,58.7220877 C64.9537129,58.938455 64.5209783,59.2413692 64.2180641,59.6741038 C63.4824152,60.4962996 63.0929541,61.5781362 63.1362275,62.7032462 L63.1362275,152.192765 C63.1362275,166.516281 66.0788229,178.50303 71.9640138,188.239559 C77.8492046,197.932814 85.7249746,205.159482 95.6778708,209.919563 C105.587494,214.679644 116.6655,217.016411 128.868616,217.016411 C141.115006,217.016411 152.193012,214.679644 162.102635,210.049384 C172.012257,205.419123 179.888028,198.279002 185.773218,188.585747 C191.658409,178.892491 194.601005,166.862469 194.601005,152.495679 L194.601005,62.7465196 C194.601005,62.1839646 194.514458,61.6214096 194.29809,61.0588546 C194.081723,60.5395731 193.778809,60.0202915 193.389348,59.6308304 C192.567152,58.8086346 191.485315,58.3759 190.100565,58.3759 L168.204193,58.3759 C166.905989,58.3759 165.824152,58.7653611 165.04523,59.5875569 C164.223034,60.4097527 163.833573,61.4483158 163.833573,62.7465196 L163.833573,152.538953 C163.833573,159.765621 162.275729,166.213367 159.160039,171.795643 C156.04435,177.421193 151.846824,181.74854 146.524188,184.820955 C141.201553,187.893371 135.316362,189.407942 128.91189,189.407942 C122.377597,189.451216 116.535679,188.023192 111.299591,185.12387 Z" fill="#FFFFFF">

</path>
    </g>
</svg>

</div>
          <div className='relative top-7'>
<svg fill="#000000" width="60px" height="60px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
<path d="m1243.561 1811.41-238.305-636.197-272.866 638.118c-103.229-2.598-163.087-64.828-163.087-64.828L162.6 471.59s-16.037-63.36-106.842-63.36H-.034l37.045-96.226h519.755v96.226s-51.614 41.562-39.53 99.162c12.198 57.6 220.236 887.266 220.236 887.266l200.584-443.972-93.064-293.647c-35.69-90.24-65.054-177.205-88.433-200.245-32.979-35.802-93.063-48.564-93.063-48.564v-96.226h640.376v96.226h-105.939s-55.793 11.18-60.65 93.176c-1.016 16.49 8.584 73.864 8.584 73.864l248.47 816.903s255.248-468.706 258.862-570.805c3.727-101.872-35.802-268.687-147.275-335.322-178.334-107.407-133.27-321.092 4.179-396.65 58.729-32.188 111.02-33.43 170.54-33.43 209.845 0 233.45 237.854 233.45 237.854 13.892 81.996 4.066 221.478-35.463 344.47-103.229 319.85-358.702 895.286-457.638 1114.391-79.51 78.946-177.43 58.73-177.43 58.73" fill="#FFFFFF" fill-rule="evenodd"/>
</svg></div>
          <div>
            <svg width="60px" height="60px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M3.25781 3.11684C3.67771 3.45796 3.83523 3.43193 4.62369 3.37933L12.0571 2.93299C12.2147 2.93299 12.0836 2.77571 12.0311 2.74957L10.7965 1.85711C10.56 1.67347 10.2448 1.46315 9.64083 1.51576L2.44308 2.04074C2.18059 2.06677 2.12815 2.19801 2.2327 2.30322L3.25781 3.11684ZM3.7041 4.84917V12.6704C3.7041 13.0907 3.91415 13.248 4.38693 13.222L12.5562 12.7493C13.0292 12.7233 13.0819 12.4341 13.0819 12.0927V4.32397C13.0819 3.98306 12.9508 3.79921 12.6612 3.82545L4.12422 4.32397C3.80918 4.35044 3.7041 4.50803 3.7041 4.84917ZM11.7688 5.26872C11.8212 5.50518 11.7688 5.74142 11.5319 5.76799L11.1383 5.84641V11.6205C10.7965 11.8042 10.4814 11.9092 10.2188 11.9092C9.79835 11.9092 9.69305 11.7779 9.37812 11.3844L6.80345 7.34249V11.2532L7.61816 11.437C7.61816 11.437 7.61816 11.9092 6.96086 11.9092L5.14879 12.0143C5.09615 11.9092 5.14879 11.647 5.33259 11.5944L5.80546 11.4634V6.29276L5.1489 6.24015C5.09625 6.00369 5.22739 5.66278 5.5954 5.63631L7.53935 5.50528L10.2188 9.5998V5.97765L9.53564 5.89924C9.4832 5.61018 9.69305 5.40028 9.95576 5.37425L11.7688 5.26872ZM1.83874 1.33212L9.32557 0.780787C10.245 0.701932 10.4815 0.754753 11.0594 1.17452L13.4492 2.85424C13.8436 3.14309 13.975 3.22173 13.975 3.53661V12.7493C13.975 13.3266 13.7647 13.6681 13.0293 13.7203L4.33492 14.2454C3.78291 14.2717 3.52019 14.193 3.23111 13.8253L1.47116 11.5419C1.1558 11.1216 1.02466 10.8071 1.02466 10.4392V2.25041C1.02466 1.77825 1.23504 1.38441 1.83874 1.33212Z"
    fill="#FFFFFF"
  />
</svg>
</div>
        </Box>
        </Container>
       </section>

       <section className='relative top-45 min-h-[50%]'>
       <Box sx={{background: "linear-gradient(80deg, rgba(255, 255, 250, 0.5), rgba(193, 116, 128, 0.9))", width: "14em", height: "3em", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: " 0 20px 20px 0", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}}>
       <p className='text-[1.5rem] text-white' id="about">ABOUT ME</p></Box>

       <Container sx={{ background: "linear-gradient(132deg, rgba(253, 248, 246, 0.3), rgba(193, 116, 128, 0.9))", padding: "5em", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;", position: "relative", top: "3em",  [theme.breakpoints.down("lg")]: {
       padding: "2rem",
      
      }, }}>
        <p className='text-white'>I’m Kirsten, a UX/UI designer with a solid foundation in front-end development. My journey began as a front-end developer, where I built interactive and functional interfaces. However, my passion for creating intuitive and visually compelling user experiences led me to transition into design. With a deep understanding of both the technical and aesthetic aspects, I’m able to craft designs that are not only beautiful but also practical and user-friendly.

In my design work, I focus on user-centered design principles, ensuring that every interaction is seamless and every visual element serves a purpose. My background in development helps me create designs that are easy to implement, bridging the gap between design and code. I believe that design is about telling a story, solving problems, and creating memorable experiences that users love.</p>
       </Container>
       </section>

       <section className='relative top-90 min-h-[50%]'>
       <Box sx={{background: "linear-gradient(80deg, rgba(255, 255, 250, 0.5), rgba(193, 116, 128, 0.9))", width: "14em", height: "3em", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: " 0 20px 20px 0", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}}>
       <p className='text-[1.5rem] text-white' id="contact">CONTACT</p></Box>

       <Container>
       <Box sx={{justifyContent: "center", alignItems: "center", display: "flex", paddingTop: "2rem"}}>
        <p className='text-[3em] text-white'>Do you want to work with me?</p></Box>
       <Box sx={{display: "flex", justifyContent: "space-around", paddingTop: "2em",  [theme.breakpoints.down("lg")]: {
      flexDirection: "column"
      }, [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        gap: 2
        },}}> 
        <Box sx={{position: "relative", left: "2.5em",  [theme.breakpoints.down("sm")]: {
      left: 0
      },}}><p className='text-white max-md:relative max-md:right-[4rem] max-sm:right-0'>Your Name</p>
       <input className='border-b border-white outline-0 w-[150%] max-sm:w-[100%] text-white max-md:relative max-md:right-[4rem] max-sm:right-0'/></Box>
       <Box sx={{position: "relative", right: "3.5em",  [theme.breakpoints.down("sm")]: {
      right: 0
      },}}><p className='text-white focus:text-white'>Your Email</p>
       <input className='border-b border-white outline-0 w-[150%] max-sm:w-[100%] text-white focus:text-white'/></Box>
       
       </Box>
       <Box sx={{position: "relative", left: "14.8em", paddingTop: "1rem",  [theme.breakpoints.down("sm")]: {
      left: 0
      },}}><p className='text-white w-full max-md:relative max-md:right-[10.8rem] max-lg:relative max-lg:right-[3rem] max-sm:right-0'>Your Message</p>
       <textarea className='w-[65.7%] border-b border-white outline-0 resize-none text-white focus:text-white max-md:relative max-md:right-[10.8rem] max-md:w-[85%] max-lg:relative max-lg:right-[3rem] max-lg:w-[69%] max-sm:right-0 max-sm:w-full'></textarea></Box>
     <Container sx={{display:"flex", justifyContent: "end", paddingTop: "1em"}}><Button sx={{background:"#c17480", color: "white", position: "relative", right: "9.5em", borderRadius: "5rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", textTransform: "none", [theme.breakpoints.down("md")]: {
   right: "1rem", padding: "10px", fontSize: "15px"
    }, [theme.breakpoints.down("lg")]: {
      right: "5rem", padding: "12px", fontSize: "16px"
       },  [theme.breakpoints.down("sm")]: {
       fontSize: "14px",
       padding: "10px",
       right: 0,
       width: "100%"
        },}}>Send Message</Button></Container>
       </Container>
       </section>

     
        <Container sx={{position: "relative", top: "500px", minHeight: "50%"}}>
        <footer className='border-t-2 border-white w-full pt-8'>
          <Box sx={{paddingBottom: "1rem"}}><p className='text-xl bg-gradient-to-b from-white to-[#c17480] bg-clip-text text-transparent max-sm:flex max-sm:justify-center'>KirstenAshleyM</p></Box>
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px",  [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      gap: 2
      },}}>
            <p className='text-white'>https://kirstenashleym.vercel.app/</p> 
          <div className='flex justify-center items-center relative bottom-2 max-sm:bottom-0'>
          <a href="https://www.figma.com/team_invite/redeem/8twbKk6nsd2IaoZFRBEjQf"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" stroke="#FFFFFF" stroke-width="2"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" stroke="#FFFFFF" stroke-width="2"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" stroke="#FFFFFF" stroke-width="2"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" stroke="#FFFFFF" stroke-width="2"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" stroke="#FFFFFF" stroke-width="2"></path></svg></a>
          <a href="https://www.linkedin.com/in/kirsten-ashley-magpantay-43079a212/"><LinkedInIcon sx={{ fontSize: "32px", color: "white", position: "relative", top: "2px" }}/></a>
          <a href= "https://github.com/i252-hub"><GitHubIcon sx={{ fontSize: "32px" , color: "white"}}/></a></div></Box>
          <Box sx={{display: "flex", justifyContent: "space-between",  [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: 1
      },}}><p className='text-white'>kirstenashleym0@gmail.com</p>
          <p className='text-white'>© Kirsten Ashley Magpantay 2025</p></Box>
          </footer>
        </Container>
      
      </div>
     
    </>
  )
}

export default App
