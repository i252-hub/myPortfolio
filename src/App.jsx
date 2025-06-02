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
    const resumeUrl = "./assets/KirstenAshleyM_Dev_Resume.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "KirstenAshleyM_Dev_Resume.pdf"; 
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
              <p className='text-4xl pt-2 text-white max-lg:flex max-lg:justify-center max-lg:text-5xl max-sm:text-2xl'>Full Stack Developer</p>
              <p className='text-white pt-1 max-lg:flex max-lg:justify-center max-lg:text-center max-sm:text-[14px] max-sm:text-justify max-sm:p-2'>Passionate about creating beautiful, user-centered interfaces by blending code with purpose</p>
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
           <div className='relative'><svg width="80px" height="80px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="white" d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684.223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187zM2.89 5.784l.04.007a.127.127 0 01.077.082l.006.04v1.315l-.006.041a.127.127 0 01-.078.082l-.039.006H1.478a.124.124 0 01-.117-.088l-.007-.04V5.912l.007-.04a.127.127 0 01.078-.083l.039-.006H2.89zm1.947 0l.039.007a.127.127 0 01.078.082l.006.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H3.424a.125.125 0 01-.117-.088L3.3 7.23V5.913a.13.13 0 01.085-.123l.039-.007h1.413zm1.976 0l.039.007a.127.127 0 01.077.082l.007.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H5.4a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.039-.006h1.413zm1.952 0l.039.007a.127.127 0 01.078.082l.007.04v1.315a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.412zm1.97 0l.039.007a.127.127 0 01.078.082l.006.04v1.315a.13.13 0 01-.085.123l-.039.006H9.322a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.411zM4.835 3.892l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H3.424a.125.125 0 01-.117-.09l-.007-.04V4.021a.13.13 0 01.085-.122l.039-.007h1.412zm1.976 0l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H5.4a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 01-.085.123l-.04.007H7.353a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V2.128l.006-.04a.127.127 0 01.078-.082L7.353 2h1.412z" /></svg>
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
<svg width="70px" height="70px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title>react</title>
  <rect width="24" height="24" fill="none"/>
  <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" fill="white"/>
</svg>
</div>
          <div>
<svg fill="white" width="80px" height="80px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.601c-.035 0-.076 0-.116 0-1.61 0-3.18.175-4.69.507l.144-.027c-1.442.303-2.718.751-3.91 1.343l.094-.042c-1.011.487-1.867 1.139-2.57 1.93l-.007.008c-.571.624-.927 1.453-.945 2.364v.004c.019.914.374 1.741.946 2.367l-.002-.003c.71.799 1.566 1.451 2.529 1.917l.048.021c1.098.549 2.374.998 3.71 1.282l.106.019c1.366.305 2.936.48 4.546.48h.123-.006.116c1.61 0 3.18-.175 4.69-.507l-.144.027c1.442-.303 2.718-.751 3.91-1.343l-.094.042c1.011-.487 1.867-1.139 2.57-1.93l.007-.008c.571-.624.927-1.453.945-2.364v-.004c-.018-.915-.374-1.744-.947-2.371l.002.003c-.71-.799-1.566-1.451-2.529-1.917l-.048-.021c-1.098-.549-2.374-.998-3.71-1.282l-.106-.019c-1.366-.305-2.936-.48-4.546-.48-.041 0-.082 0-.123 0h.006zm-3.12 7.264c-.131.119-.28.221-.442.301l-.011.005c-.141.068-.308.131-.482.179l-.021.005c-.172.062-.371.099-.579.099-.008 0-.016 0-.024 0h.001-1.972l-.32 1.963h-1.447l1.28-6.675h2.773c.018 0 .04-.001.062-.001.36 0 .706.063 1.026.179l-.021-.007c.295.108.546.276.748.489l.001.001c.175.223.3.493.354.789l.002.011c.025.146.04.314.04.486 0 .196-.019.387-.055.573l.003-.019c-.036.179-.083.335-.142.485l.007-.019q-.086.221-.184.417-.122.196-.27.393c-.096.129-.201.242-.317.343l-.003.002zm4.172.589.565-2.822c.024-.107.038-.229.038-.355 0-.026-.001-.052-.002-.078v.004c-.001-.109-.043-.208-.111-.283-.069-.06-.151-.106-.241-.134l-.005-.001c-.125-.04-.269-.062-.418-.062-.017 0-.034 0-.051.001h.002-1.126l-.736 3.73h-1.423l1.28-6.48h1.423l-.343 1.767h1.28c.022 0 .047-.001.073-.001.331 0 .653.041.961.117l-.027-.006c.249.055.466.172.641.332l-.001-.001c.156.123.267.298.306.498l.001.005c.014.089.022.191.022.295 0 .17-.021.335-.062.492l.003-.014-.589 2.994zm7.902-2.184c-.04.181-.082.328-.132.473l.009-.031c-.054.159-.12.297-.201.425l.005-.008c-.069.155-.151.288-.248.408l.003-.004c-.098.122-.203.23-.317.329l-.003.003c-.131.119-.28.221-.442.301l-.011.005c-.141.068-.308.131-.482.179l-.021.005c-.172.062-.371.099-.579.099-.008 0-.016 0-.024 0h.001-1.972l-.343 1.959h-1.423l1.28-6.675h2.749c.022-.001.047-.001.073-.001.365 0 .716.063 1.041.18l-.022-.007c.287.104.529.272.718.488l.002.002c.19.222.325.497.378.799l.002.01c.022.131.035.281.035.435 0 .221-.026.435-.075.641l.004-.019zm-2.7-1.547h-.978l-.513 2.749h.856.052c.25 0 .496-.023.734-.066l-.025.004c.204-.036.386-.109.546-.212l-.006.003c.136-.122.25-.263.339-.421l.004-.008c.103-.188.18-.407.219-.638l.002-.012c.031-.129.048-.278.048-.431 0-.074-.004-.147-.012-.218l.001.009c-.014-.158-.072-.301-.161-.419l.001.002c-.116-.108-.255-.192-.409-.243l-.008-.002c-.186-.062-.399-.097-.621-.097-.023 0-.046 0-.068.001h.003zm-11.19 0h-.978l-.515 2.749h.858.052c.25 0 .496-.023.734-.066l-.025.004c.204-.036.386-.109.546-.212l-.006.003c.136-.122.25-.263.339-.421l.004-.008c.103-.188.18-.407.219-.638l.002-.012c.031-.129.048-.278.048-.431 0-.074-.004-.147-.012-.218l.001.009c-.014-.158-.072-.301-.161-.419l.001.002c-.116-.108-.255-.192-.409-.243l-.008-.002c-.186-.062-.399-.097-.621-.097-.023 0-.046 0-.068.001h.003z"/></svg>
</div>
          <div className='relative top-9'>
<svg fill="white" width="95px" height="95px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>mysql</title>
<path d="M30.026 15.139c-0.082-0.006-0.177-0.010-0.273-0.010-0.484 0-0.947 0.090-1.373 0.254l0.026-0.009c-0.125 0.050-0.325 0.050-0.342 0.209 0.069 0.066 0.079 0.175 0.137 0.267 0.117 0.198 0.261 0.366 0.429 0.506l0.003 0.003c0.175 0.137 0.35 0.27 0.534 0.387 0.325 0.2 0.694 0.319 1.012 0.52 0.181 0.117 0.366 0.266 0.55 0.391 0.091 0.062 0.15 0.175 0.267 0.215v-0.025c-0.057-0.075-0.075-0.184-0.131-0.267-0.084-0.084-0.167-0.159-0.25-0.241-0.248-0.325-0.535-0.603-0.857-0.835l-0.012-0.008c-0.267-0.182-0.852-0.437-0.962-0.744l-0.016-0.018c0.218-0.031 0.412-0.077 0.599-0.139l-0.024 0.007c0.284-0.075 0.544-0.059 0.837-0.132 0.132-0.034 0.266-0.075 0.4-0.117v-0.075c-0.15-0.15-0.262-0.354-0.417-0.494-0.409-0.36-0.86-0.698-1.335-1.002l-0.045-0.027c-0.262-0.167-0.595-0.275-0.871-0.417-0.1-0.050-0.267-0.075-0.325-0.159-0.13-0.185-0.245-0.397-0.336-0.621l-0.008-0.022q-0.368-0.714-0.684-1.453c-0.144-0.383-0.287-0.697-0.448-1.001l0.023 0.047c-0.786-1.319-1.881-2.379-3.188-3.102l-0.043-0.022c-0.309-0.153-0.668-0.272-1.045-0.339l-0.025-0.004c-0.209-0.010-0.417-0.025-0.625-0.034-0.146-0.094-0.272-0.19-0.39-0.296l0.003 0.003c-0.475-0.3-1.704-0.95-2.054-0.090-0.225 0.542 0.334 1.077 0.527 1.352 0.154 0.183 0.294 0.388 0.415 0.605l0.010 0.020c0.059 0.145 0.075 0.294 0.134 0.445 0.145 0.452 0.292 0.823 0.459 1.182l-0.026-0.062c0.099 0.199 0.202 0.368 0.317 0.528l-0.008-0.012c0.067 0.091 0.182 0.134 0.209 0.284-0.086 0.181-0.153 0.391-0.19 0.61l-0.002 0.014c-0.108 0.332-0.171 0.715-0.171 1.112 0 0.621 0.153 1.206 0.423 1.72l-0.010-0.020c0.134 0.207 0.452 0.667 0.878 0.491 0.375-0.15 0.292-0.625 0.4-1.043 0.025-0.1 0.009-0.166 0.060-0.234v0.019c0.117 0.235 0.235 0.459 0.342 0.694 0.302 0.435 0.661 0.805 1.071 1.11l0.013 0.009c0.2 0.15 0.359 0.41 0.609 0.502v-0.025h-0.019c-0.057-0.062-0.12-0.117-0.189-0.164l-0.004-0.002c-0.155-0.152-0.299-0.316-0.429-0.489l-0.008-0.011c-0.326-0.44-0.636-0.938-0.905-1.461l-0.029-0.061c-0.137-0.262-0.252-0.545-0.362-0.804-0.050-0.1-0.050-0.25-0.134-0.3-0.148 0.166-0.281 0.351-0.392 0.55l-0.008 0.016c-0.128 0.373-0.212 0.804-0.234 1.251l-0 0.011c-0.034 0.009-0.017 0-0.034 0.018-0.267-0.065-0.359-0.342-0.459-0.575-0.136-0.366-0.215-0.79-0.215-1.231 0-0.356 0.051-0.7 0.147-1.025l-0.006 0.026c0.059-0.175 0.309-0.727 0.209-0.895-0.052-0.159-0.217-0.25-0.309-0.379-0.109-0.154-0.209-0.329-0.292-0.514l-0.008-0.020c-0.2-0.467-0.3-0.985-0.517-1.452-0.131-0.244-0.269-0.454-0.424-0.65l0.007 0.009c-0.165-0.191-0.317-0.404-0.449-0.63l-0.011-0.020c-0.041-0.091-0.1-0.242-0.034-0.342 0.012-0.058 0.058-0.103 0.117-0.112l0.001-0c0.11-0.090 0.419 0.027 0.527 0.077 0.317 0.12 0.59 0.261 0.843 0.427l-0.016-0.010c0.117 0.082 0.244 0.241 0.394 0.282h0.175c0.267 0.059 0.569 0.018 0.819 0.091 0.459 0.155 0.856 0.349 1.223 0.587l-0.021-0.013c1.104 0.713 1.988 1.677 2.586 2.816l0.020 0.041c0.1 0.192 0.144 0.369 0.235 0.569 0.175 0.412 0.391 0.829 0.569 1.227 0.169 0.428 0.369 0.798 0.607 1.139l-0.012-0.018c0.125 0.175 0.627 0.266 0.852 0.357 0.237 0.083 0.427 0.162 0.611 0.251l-0.037-0.016c0.287 0.175 0.567 0.375 0.837 0.567 0.137 0.095 0.554 0.304 0.579 0.472zM18.302 22.452c0 0.015 0.001 0.032 0.001 0.049 0 0.558-0.249 1.057-0.643 1.393l-0.003 0.002c-0.432 0.352-0.989 0.566-1.596 0.566-0.047 0-0.094-0.001-0.14-0.004l0.006 0c-0.739-0.010-1.419-0.25-1.976-0.651l0.010 0.007 0.296-0.595c0.429 0.24 0.939 0.389 1.481 0.41l0.006 0c0.027 0.002 0.058 0.003 0.090 0.003 0.332 0 0.641-0.104 0.894-0.281l-0.005 0.003c0.229-0.174 0.375-0.446 0.375-0.752 0-0.006-0-0.011-0-0.017v0.001c0-0.412-0.287-0.762-0.81-1.056-0.485-0.266-1.453-0.821-1.453-0.821-0.478-0.296-0.791-0.817-0.791-1.411 0-0.021 0-0.042 0.001-0.063l-0 0.003c-0.001-0.019-0.001-0.041-0.001-0.063 0-0.515 0.227-0.977 0.586-1.291l0.002-0.002c0.382-0.324 0.881-0.521 1.426-0.521 0.035 0 0.069 0.001 0.103 0.002l-0.005-0c0.009-0 0.020-0 0.031-0 0.639 0 1.234 0.191 1.73 0.52l-0.012-0.007-0.266 0.595c-0.391-0.176-0.847-0.282-1.327-0.287l-0.002-0c-0.024-0.002-0.051-0.003-0.079-0.003-0.28 0-0.538 0.098-0.74 0.262l0.002-0.002c-0.189 0.157-0.309 0.392-0.31 0.655v0c0 0.41 0.292 0.762 0.832 1.062 0.491 0.269 1.483 0.837 1.483 0.837 0.488 0.287 0.811 0.809 0.811 1.407 0 0.018-0 0.037-0.001 0.055l0-0.003zM20.374 22.983c-0.273-0.545-0.432-1.187-0.432-1.866 0-0.107 0.004-0.213 0.012-0.317l-0.001 0.014q0-2.611 1.587-2.612c0.026-0.002 0.057-0.003 0.089-0.003 0.475 0 0.892 0.248 1.129 0.622l0.003 0.005c0.271 0.542 0.43 1.182 0.43 1.858 0 0.104-0.004 0.207-0.011 0.309l0.001-0.014q0 2.632-1.587 2.634c-0.027 0.002-0.058 0.003-0.089 0.003-0.475 0-0.893-0.248-1.13-0.622l-0.003-0.005zM24.488 24.535l-1.27-0.625c0.116-0.097 0.22-0.199 0.316-0.309l0.003-0.003c0.513-0.692 0.821-1.563 0.821-2.505 0-0.109-0.004-0.217-0.012-0.324l0.001 0.014q0-3.43-2.693-3.432c-0.040-0.002-0.087-0.003-0.134-0.003-0.767 0-1.456 0.337-1.925 0.872l-0.002 0.003c-0.511 0.692-0.818 1.562-0.818 2.504 0 0.106 0.004 0.211 0.012 0.315l-0.001-0.014c-0.009 0.101-0.014 0.219-0.014 0.338 0 0.874 0.274 1.684 0.74 2.349l-0.009-0.013c0.449 0.478 1.086 0.776 1.791 0.776 0.066 0 0.131-0.003 0.195-0.008l-0.009 0.001c0.009 0 0.021 0 0.032 0 0.311 0 0.612-0.045 0.897-0.128l-0.022 0.006 1.656 0.965 0.45-0.777zM28.636 24.366h-3.287v-6.91h1.106v6.061h2.181zM13.235 19.268c-0.287 2.084-0.944 3.965-1.905 5.65l0.040-0.077c-0.385 0.741-1.113 1.257-1.968 1.34l-0.010 0.001c-0.259-0.014-0.5-0.076-0.719-0.177l0.012 0.005v-0.617c0.137 0.021 0.295 0.033 0.456 0.033 0.009 0 0.018-0 0.028-0h-0.001c0.016 0.001 0.034 0.001 0.052 0.001 0.289 0 0.554-0.105 0.758-0.28l-0.002 0.001c0.22-0.181 0.361-0.451 0.369-0.755l0-0.001c-0.053-0.438-0.154-0.837-0.299-1.214l0.012 0.034-1.267-3.944h1.137l0.909 2.949c0.162 0.416 0.256 0.898 0.256 1.401 0 0.001 0 0.002 0 0.002v-0c0.482-1.262 0.848-2.734 1.034-4.261l0.009-0.092zM8.215 24.366h-1.158q-0.049-2.761-0.337-5.511h-0.010l-1.762 5.511h-0.881l-1.75-5.511h-0.012q-0.205 2.751-0.244 5.511h-1.056q0.103-3.685 0.512-6.911h1.437l1.668 5.079h0.010l1.683-5.079h1.368q0.454 3.777 0.535 6.911zM21.505 7.879c-0.002 0-0.005-0-0.008-0-0.119 0-0.234 0.015-0.344 0.043l0.010-0.002v0.016h0.017c0.086 0.128 0.174 0.239 0.269 0.343l-0.002-0.002c0.067 0.134 0.125 0.267 0.192 0.4l0.017-0.019c0.109-0.086 0.178-0.218 0.178-0.366 0-0.018-0.001-0.035-0.003-0.053l0 0.002c-0.050-0.059-0.057-0.117-0.1-0.175-0.050-0.084-0.157-0.125-0.225-0.191z"></path>
</svg></div>
          <div>
          <svg width="70px" height="70px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title>cybersecurity</title>
  <path d="M12,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23ZM12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Z" fill="white"/>
  <path d="M15,11V9A3,3,0,0,0,9,9v2a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V12A1,1,0,0,0,15,11ZM10.5,9a1.5,1.5,0,0,1,3,0v2h-3Z" fill="white"/>
  <rect width="24" height="24" fill="none"/>
</svg>

</div>
          <div className='relative top-7'>
<svg fill="#000000" width="60px" height="60px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
<path d="m1243.561 1811.41-238.305-636.197-272.866 638.118c-103.229-2.598-163.087-64.828-163.087-64.828L162.6 471.59s-16.037-63.36-106.842-63.36H-.034l37.045-96.226h519.755v96.226s-51.614 41.562-39.53 99.162c12.198 57.6 220.236 887.266 220.236 887.266l200.584-443.972-93.064-293.647c-35.69-90.24-65.054-177.205-88.433-200.245-32.979-35.802-93.063-48.564-93.063-48.564v-96.226h640.376v96.226h-105.939s-55.793 11.18-60.65 93.176c-1.016 16.49 8.584 73.864 8.584 73.864l248.47 816.903s255.248-468.706 258.862-570.805c3.727-101.872-35.802-268.687-147.275-335.322-178.334-107.407-133.27-321.092 4.179-396.65 58.729-32.188 111.02-33.43 170.54-33.43 209.845 0 233.45 237.854 233.45 237.854 13.892 81.996 4.066 221.478-35.463 344.47-103.229 319.85-358.702 895.286-457.638 1114.391-79.51 78.946-177.43 58.73-177.43 58.73" fill="#FFFFFF" fill-rule="evenodd"/>
</svg></div>
          <div>
            <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z" fill="white"/>
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
        <p className='text-white'>I’m Kirsten, a Full Stack developer with a strong background in WordPress and PHP. My journey began as a WordPress developer, where I built dynamic, user-friendly websites using plugins, custom fields, and backend development to extend functionality and optimize performance. As I gained experience, I transitioned into React development, focusing on creating interactive, high-performance web applications.

With a deep understanding of both WordPress and React, I specialize in developing responsive, efficient websites and applications that prioritize user experience. I work with both frontend interfaces and backend systems to ensure seamless functionality and smooth user interactions. Whether working with content-driven WordPress sites or modern React applications, I focus on delivering solutions that meet business goals.</p>
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
