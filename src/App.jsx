import { Box, Grid, Card, CardContent, Container, Button } from '@mui/material';
import Profile from './assets/portfolioprofile.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  return (
    <>
      <div className='w-screen min-h-screen relative bg-linear-80 from-[#474243]/90 to-[#c17480]/90 overflow-x-hidden'>
      <nav className="flex justify-between items-center pt-8 text-[1.2rem]">
        <ul className="pl-5">
          <li className="text-3xl font-extrabold text-[#FFC0CB]">KirstenAshleyM</li>
        </ul>
        <ul className="flex gap-3 pr-5">
          <li className="text-white">Projects</li>
          <li className="text-white">About Me</li>
          <li className="text-white">Contact</li>
        </ul>
      </nav>
       
       <Container sx={{ paddingTop: "64px", [theme.breakpoints.down("xl")]: {
      margin: "0 auto",
      padding: "0"
    },  }}>
        <Grid container spacing={2}  sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, 
         [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "1fr",
      width: "80%",
      margin: "0 auto",
    },   [theme.breakpoints.down("xl")]: {
      width: "100%",
      margin: "0 auto",
      
    },  }}>
        <Grid item sx={{ [theme.breakpoints.down("lg")]: { gridRow: 2 } }}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none"}}>
            <CardContent sx={{[theme.breakpoints.down("lg")]: {
    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
  }}}>
              <p className='text-6xl text-white max-lg:flex max-lg:justify-center max-lg:text-7xl max-sm:text-4xl'>Hi, I'm <span className='text-[#c17480]'>Kirsten</span></p>
              <p className='text-4xl pt-2 text-white max-lg:flex max-lg:justify-center max-lg:text-5xl max-sm:text-2xl'>A Designer & Developer</p>
              <p className='text-white pt-1 max-lg:flex max-lg:justify-center max-lg:text-center max-sm:text-[14px] max-sm:text-justify max-sm:p-2'>Passionate about creating beautiful, functional digital experiences by blending design with development.</p>
              <Button sx={{background: "linear-gradient(80deg, rgba(71, 66, 67, 0.2), rgba(193, 116, 128, 0.9))", borderRadius: "5rem", color: "white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", marginTop: "1rem",  textTransform: "none", [theme.breakpoints.down("lg")]: {
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
        <p className='text-[1.5rem] text-white'>PROJECTS</p></Box>

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
              <p className='flex justify-center text-white mr-7 pt-2 text-[14px]'>REACT, TYPESCRIPT, TAILWIND, CONTEXT API, THREE.JS GSAP</p>
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
              <p className='flex justify-center text-white max-xl:relative max-xl:right-7 pt-2 text-[14px] max-md:relative max-md:right-[4rem]
              max-lg:relative max-lg:right-[7.3rem]'>REACT, REDUX, CSS3, VITEST</p>
             
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
              <p className='flex justify-center max-xl:relative max-xl:right-[5rem] pt-2 text-white text-[14px] max-md:relative max-md:right-[6rem] max-md:w-[90%]
              max-lg:relative max-lg:right-[10.5rem]'>REACT, CSS3</p>
            </CardContent>
          </Card>
          </a>
          </Grid>
          <Grid item>
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
              <p className='text-[2em]  text-white max-xl:block max-xl:whitespace-pre-line'>Portfolio {"\n"}WebApp</p>
              <p className='flex justify-center max-xl:relative max-xl:right-4 pt-2 max-md:relative max-md:right-[2rem] max-md:w-[90%] text-white text-[14px]
              max-lg:relative max-lg:right-[6.5rem]'>REACT, TAILWIND, MATERIAL UI</p>
            
            
            </CardContent>
          </Card>
          </Grid>
        </Grid>
        </Container>

       <Container sx={{paddingTop: "8em", minHeight: "15em",   [theme.breakpoints.down("lg")]: {
      paddingTop: "16em"
    },}}>
        <Box sx = {{display: "flex", gap: "3em",  [theme.breakpoints.down("lg")]: {
      flexWrap: "wrap", justifyContent: "center", alignItems: "center"
    },}}>
          <div><svg width="70" height="70" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<g id="reactjs">
<g id="reactjs_2">
<path id="Vector" d="M50.3067 58.8168C55.1757 58.8168 59.1229 54.8697 59.1229 50.0006C59.1229 45.1315 55.1757 41.1844 50.3067 41.1844C45.4376 41.1844 41.4904 45.1315 41.4904 50.0006C41.4904 54.8697 45.4376 58.8168 50.3067 58.8168Z" fill="#FFFFFF"/>
<path id="Vector_2" d="M50.3066 68.0631C76.4333 68.0631 97.6132 59.9762 97.6132 50.0005C97.6132 40.0249 76.4333 31.938 50.3066 31.938C24.1799 31.938 3 40.0249 3 50.0005C3 59.9762 24.1799 68.0631 50.3066 68.0631Z" stroke="#FFFFFF" stroke-width="5"/>
<path id="Vector_3" d="M34.664 59.0318C47.7274 81.6582 65.3207 95.9571 73.9599 90.9692C82.5991 85.9814 79.0126 63.5957 65.9492 40.9693C52.8858 18.3428 35.2925 4.04395 26.6533 9.03178C18.0141 14.0196 21.6006 36.4054 34.664 59.0318Z" stroke="#FFFFFF" stroke-width="5"/>
<path id="Vector_4" d="M34.664 40.9692C21.6007 63.5956 18.0141 85.9814 26.6533 90.9692C35.2925 95.957 52.8859 81.6582 65.9492 59.0318C79.0126 36.4053 82.5991 14.0196 73.9599 9.03176C65.3208 4.04393 47.7274 18.3428 34.664 40.9692Z" stroke="#FFFFFF" stroke-width="5"/>
</g>
</g>
</svg>
</div>
          <div className='relative top-10'><svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="redux">
<g id="redux_2">
<path id="Vector" d="M69.2895 69.3024C72.9798 68.9204 75.7794 65.7392 75.652 61.9212C75.5251 58.1036 72.3434 55.0493 68.5258 55.0493H68.2715C64.3262 55.1767 61.2723 58.4852 61.3997 62.4302C61.527 64.3392 62.2903 65.9935 63.4356 67.1388C59.109 75.6653 52.4918 81.9009 42.5661 87.1184C35.8215 90.6817 28.8227 91.9544 21.8238 91.0638C16.0973 90.3001 11.6434 87.7552 8.84336 83.5552C4.77148 77.3196 4.38984 70.5747 7.82579 63.8302C10.2438 58.9942 14.0609 55.431 16.4789 53.6493C15.9699 51.995 15.2063 49.1954 14.8246 47.1595C-3.62735 60.5216 -1.71837 78.5923 3.88086 87.1184C8.08008 93.4817 16.6063 97.4267 26.0231 97.4267C28.568 97.4267 31.1129 97.172 33.6582 96.536C49.9469 93.3544 62.2907 83.6825 69.2895 69.3024ZM91.6864 53.5224C82.0149 42.1962 67.7626 35.9606 51.4739 35.9606H49.4379C48.2926 33.67 45.8747 32.1427 43.2024 32.1427H42.9477C39.0032 32.27 35.9493 35.5786 36.0762 39.5239C36.2035 43.3415 39.3848 46.3958 43.2024 46.3958H43.4567C46.2563 46.2685 48.6743 44.4868 49.6922 42.0688H51.9829C61.6544 42.0688 70.8165 44.8685 79.0884 50.3407C85.4509 54.5403 90.0321 60.0126 92.577 66.6298C94.7403 71.9747 94.613 77.1923 92.3224 81.6466C88.7595 88.3911 82.7786 92.0817 74.8887 92.0817C69.7985 92.0817 64.963 90.5544 62.4176 89.4091C61.018 90.6817 58.4727 92.7177 56.6911 93.9907C62.1633 96.5356 67.7626 97.9356 73.1071 97.9356C85.3235 97.9356 94.3587 91.1907 97.7946 84.4462C101.485 77.0649 101.23 64.3392 91.6864 53.5224ZM27.041 71.4653C27.1684 75.2833 30.3496 78.3372 34.1672 78.3372H34.4219C38.3668 78.2103 41.4207 74.9013 41.2934 70.9563C41.1664 67.1384 37.9848 64.0845 34.1672 64.0845H33.9129C33.6582 64.0845 33.2762 64.0845 33.0223 64.2114C27.8047 55.5579 25.6414 46.1411 26.4051 35.9603C26.9137 28.3247 29.459 21.7071 33.9129 16.2349C37.6032 11.5263 44.7293 9.23564 49.5653 9.10869C63.054 8.854 68.7801 25.652 69.1622 32.397C70.8165 32.7786 73.6161 33.6696 75.5251 34.306C73.9977 13.6903 61.2723 3.00049 49.0563 3.00049C37.6032 3.00049 27.041 11.2724 22.8414 23.4892C16.9879 39.7782 20.8055 55.431 27.9317 67.7751C27.2957 68.6657 26.9137 70.0657 27.041 71.4657V71.4653Z" fill="#FFFFFF"/>
</g>
</g>
</svg>
</div>
          <div className='relative bottom-5'><svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="nextjs">
<g id="nextjs_2" clip-path="url(#clip0_790_2951)">
<path id="Vector" d="M66.4769 40.0089H83.8952V43.2238H76.9856V60.1373H73.5305V43.2238H66.4769V40.0089Z" fill="white"/>
<path id="Vector_2" d="M37.8305 40.0089V43.2238H23.8686V48.3957H35.0967V51.6107H23.8686V56.9223H37.8305V60.1373H20.4137V43.2238H20.4123V40.0089H37.8305Z" fill="white"/>
<path id="Vector_3" d="M46.5279 40.0173H42.0066L58.201 60.1457H62.7355L54.6373 50.0884L62.7226 40.0326L58.201 40.0396L52.3736 47.2771L46.5279 40.0173Z" fill="white"/>
<path id="Vector_4" d="M51.1675 54.3951L48.9033 51.5799L41.9937 60.161H46.5279L51.1675 54.3951Z" fill="white"/>
<path id="Vector_5" fill-rule="evenodd" clip-rule="evenodd" d="M20.5348 60.1373L4.31855 40.0005H0V60.1289H3.45485V44.3029L16.1946 60.1373H20.5348Z" fill="white"/>
<path id="Vector_6" d="M84.6718 60.0143C84.4188 60.0143 84.2035 59.9267 84.0233 59.7514C83.8431 59.5761 83.754 59.3639 83.7563 59.1124C83.754 58.8679 83.8431 58.658 84.0233 58.4827C84.2035 58.3074 84.4188 58.2197 84.6718 58.2197C84.9152 58.2197 85.1282 58.3074 85.3084 58.4827C85.4911 58.658 85.5822 58.8679 85.5848 59.1124C85.5822 59.2785 85.5401 59.4307 85.4558 59.5668C85.3693 59.7053 85.2594 59.8137 85.1211 59.8921C84.9853 59.9728 84.8355 60.0143 84.6718 60.0143Z" fill="white"/>
<path id="Vector_7" d="M90.5685 51.5348H92.0995V57.4331C92.0972 57.9752 91.98 58.4389 91.7508 58.8287C91.519 59.2185 91.1982 59.5161 90.7863 59.726C90.3767 59.9336 89.8967 60.0397 89.3513 60.0397C88.8526 60.0397 88.4056 59.9497 88.0076 59.7744C87.6097 59.5991 87.2937 59.3362 87.0619 58.9902C86.8277 58.6441 86.713 58.2128 86.713 57.6961H88.2465C88.2487 57.9222 88.3003 58.1182 88.3985 58.282C88.4967 58.4458 88.6325 58.5703 88.8058 58.658C88.9812 58.7456 89.1827 58.7895 89.4097 58.7895C89.6556 58.7895 89.8663 58.7387 90.0371 58.6349C90.2079 58.5334 90.3391 58.3812 90.4305 58.1782C90.5193 57.9775 90.5663 57.7284 90.5685 57.4331V51.5348Z" fill="white"/>
<path id="Vector_8" d="M98.3987 53.8416C98.3614 53.484 98.1975 53.2049 97.9119 53.0065C97.6239 52.8058 97.2518 52.7067 96.7952 52.7067C96.4746 52.7067 96.1985 52.7551 95.969 52.8497C95.7396 52.9466 95.5617 53.0757 95.4398 53.2395C95.3183 53.4033 95.2574 53.5901 95.2525 53.8001C95.2525 53.9754 95.2947 54.1276 95.3766 54.2545C95.4586 54.3836 95.5685 54.4921 95.7114 54.5797C95.8518 54.6697 96.0086 54.7435 96.1797 54.8035C96.3528 54.8634 96.5261 54.9142 96.6992 54.9557L97.4975 55.1518C97.8183 55.2256 98.1297 55.3248 98.4269 55.4517C98.7241 55.5762 98.9934 55.7354 99.2297 55.9268C99.4662 56.1183 99.6535 56.349 99.7916 56.6189C99.9297 56.8887 100 57.2048 100 57.5692C100 58.0605 99.8736 58.4919 99.6183 58.8656C99.3632 59.237 98.9957 59.5276 98.5134 59.7376C98.0335 59.9452 97.453 60.0513 96.7695 60.0513C96.1094 60.0513 95.5335 59.9498 95.049 59.7468C94.5622 59.5461 94.1827 59.2508 93.9089 58.8633C93.635 58.4758 93.4876 58.0029 93.4665 57.447H94.9835C95.0046 57.7376 95.0982 57.9798 95.2574 58.1759C95.4188 58.3697 95.6294 58.5127 95.8871 58.6096C96.147 58.7041 96.4371 58.7526 96.7579 58.7526C97.0926 58.7526 97.3876 58.7018 97.6426 58.6026C97.8954 58.5034 98.0944 58.3651 98.2373 58.1851C98.3825 58.0075 98.4551 57.7976 98.4574 57.5577C98.4551 57.3386 98.3893 57.1563 98.2629 57.0133C98.1343 56.8703 97.9563 56.7503 97.7292 56.6535C97.5 56.5566 97.233 56.4689 96.9287 56.3928L95.9596 56.1483C95.2596 55.9707 94.7048 55.7008 94.2997 55.3386C93.8926 54.9765 93.6911 54.4967 93.6911 53.8946C93.6911 53.401 93.8269 52.9673 94.101 52.596C94.3723 52.2246 94.7447 51.9362 95.2152 51.7309C95.6881 51.5233 96.2218 51.4218 96.8162 51.4218C97.4203 51.4218 97.9492 51.5233 98.4058 51.7309C98.8622 51.9362 99.2206 52.2223 99.4802 52.5867C99.7401 52.9512 99.8759 53.3687 99.883 53.8416H98.3987Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_790_2951">
<rect width="100" height="20.3046" fill="white" transform="translate(0 40.0005)"/>
</clipPath>
</defs>
</svg>
</div>
          <div className='relative top-5'><svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="typescript">
<g id="typescript_2">
<path id="Vector" d="M0 0.000488281H100V100H0V0.000488281Z" fill="none"/>
<path id="Vector_2" d="M48.0157 37.0317H52.8126V45.313H39.8438V82.1567L39.5 82.2505C39.0313 82.3755 32.8594 82.3755 31.5313 82.2349L30.4688 82.1411V45.313H17.5V37.0317L21.6094 36.9849C23.8594 36.9536 29.6406 36.9536 34.4532 36.9849C39.2657 37.0161 45.3594 37.0317 48.0157 37.0317ZM84.6251 78.2505C82.7189 80.2661 80.672 81.3911 77.2657 82.313C75.7813 82.7192 75.5313 82.7349 72.1876 82.7192C68.8438 82.7036 68.5782 82.7036 66.9532 82.2817C62.7501 81.2036 59.3594 79.0942 57.0469 76.1099C56.3907 75.2661 55.3126 73.5161 55.3126 73.2974C55.3126 73.2349 55.4688 73.0942 55.6719 73.0005C55.8751 72.9067 56.2969 72.6411 56.6407 72.438C56.9844 72.2349 57.6094 71.8599 58.0313 71.6411C58.4532 71.4224 59.6719 70.7036 60.7345 70.063C61.797 69.4224 62.7657 68.9067 62.8751 68.9067C62.9845 68.9067 63.1876 69.1255 63.3438 69.3911C64.2813 70.9692 66.4688 72.9849 68.0157 73.6724C68.9688 74.0786 71.0782 74.5317 72.0938 74.5317C73.0313 74.5317 74.7501 74.1255 75.672 73.7036C76.6563 73.2505 77.1564 72.7974 77.7501 71.8911C78.1564 71.2505 78.2032 71.0786 78.1876 69.8599C78.1876 68.7349 78.1251 68.4224 77.8126 67.9067C76.9376 66.4692 75.7501 65.7192 70.9376 63.5942C65.9688 61.3911 63.7345 60.0786 61.9219 58.313C60.5782 57.0005 60.3126 56.6411 59.4688 55.0005C58.3751 52.8911 58.2344 52.2036 58.2188 49.063C58.2032 46.8599 58.2501 46.1411 58.4844 45.3911C58.8126 44.2661 59.8751 42.0942 60.3594 41.5474C61.3594 40.3755 61.7188 40.0161 62.422 39.438C64.547 37.688 67.8595 36.5317 71.0313 36.4224C71.3907 36.4224 72.5782 36.4849 73.6876 36.563C76.8751 36.8286 79.047 37.6099 81.1407 39.2817C82.7189 40.5317 85.1095 43.4692 84.8751 43.8599C84.7189 44.0942 78.4845 48.2505 78.0782 48.3755C77.8282 48.4536 77.6564 48.3599 77.3126 47.9536C75.1876 45.4067 74.3282 44.8599 72.2657 44.7349C70.797 44.6411 70.0157 44.813 69.0313 45.4692C68.0001 46.1567 67.5001 47.2036 67.5001 48.6567C67.5157 50.7817 68.3282 51.7817 71.3282 53.2661C73.2657 54.2192 74.922 55.0005 75.047 55.0005C75.2345 55.0005 79.2501 57.0005 80.297 57.6255C85.172 60.4849 87.1564 63.4224 87.672 68.4849C88.047 72.2974 86.9689 75.7817 84.6251 78.2505Z" fill="white"/>
</g>
</g>
</svg>
</div>
          <div><svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="materialui">
<g id="materialui_2">
<path id="Vector" d="M0.000244141 53.3005V10.0005L37.5002 31.6505V46.0838L12.5002 31.6505V60.5172L0.000244141 53.3005Z" fill="#FFFFFF"/>
<path id="Vector_2" d="M37.5002 31.6505L75.0002 10.0005V53.3005L50.0002 67.7338L37.5002 60.5172L62.5002 46.0838V31.6505L37.5002 46.0838V31.6505Z" fill="#FFFFFF"/>
<path id="Vector_3" d="M37.5002 60.5171V74.9504L62.5002 89.3838V74.9504L37.5002 60.5171Z" fill="#FFFFFF"/>
<path id="Vector_4" d="M62.5002 89.3838L100 67.7338V38.8672L87.5002 46.0838V60.5172L62.5002 74.9505V89.3838ZM87.5002 31.6505V17.2172L100 10.0005V24.4338L87.5002 31.6505Z" fill="#FFFFFF"/>
</g>
</g>
</svg>
</div>
          <div><svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="tailwindcss">
<g id="tailwindcss_2">
<path id="Vector" d="M50.0002 20.0005C36.6665 20.0005 28.3334 26.6655 24.9996 39.9942C30.0002 33.3292 35.8337 30.8308 42.4999 32.4964C46.3039 33.4468 49.0224 36.2065 52.0323 39.2602C56.9341 44.2345 62.6075 49.9917 75.0009 49.9917C88.3334 49.9917 96.6677 43.3267 100 29.9967C95.0009 36.6617 89.1674 39.1614 82.4999 37.4958C78.6973 36.5454 75.9787 33.7856 72.9689 30.732C68.067 25.7576 62.3924 20.0005 50.0002 20.0005ZM24.9996 49.9917C11.6671 49.9917 3.33274 56.6567 0.000244141 69.9866C4.99962 63.3217 10.8331 60.822 17.5006 62.4888C21.3032 63.4405 24.0218 66.199 27.0316 69.2514C31.9335 74.2257 37.6081 79.9841 50.0002 79.9841C63.334 79.9841 71.6671 73.3191 75.0009 59.9892C70.0002 66.6542 64.1668 69.1538 57.5006 67.487C53.6966 66.5379 50.9781 63.7768 47.9682 60.7244C43.0664 55.7501 37.393 49.9917 24.9996 49.9917Z" fill="#FFFFFF"/>
</g>
</g>
</svg>
</div>
          <div className='relative top-9'><svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div><svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className='relative top-7'><svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div><svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="git">
<g id="git_2">
<path id="Vector" d="M98.1141 45.5449L54.4531 1.88633C51.9402 -0.628125 47.8621 -0.628125 45.3461 1.88633L36.2797 10.9527L47.7809 22.4539C50.4535 21.5508 53.5184 22.1566 55.6488 24.2871C57.7894 26.4312 58.391 29.5223 57.466 32.2035L68.55 43.2879C71.2316 42.3641 74.3258 42.9617 76.4676 45.107C79.4609 48.0992 79.4609 52.9488 76.4676 55.943C73.4734 58.9375 68.6238 58.9375 65.6281 55.943C63.3766 53.6891 62.8203 50.3824 63.9602 47.6086L53.6234 37.2719L53.6223 64.4738C54.3716 64.8443 55.056 65.3337 55.6488 65.923C58.6422 68.9152 58.6422 73.7652 55.6488 76.7617C52.6547 79.7547 47.8027 79.7547 44.8129 76.7617C41.8195 73.7652 41.8195 68.9156 44.8129 65.9234C45.5302 65.2057 46.3827 64.6374 47.3211 64.2512V36.7957C46.3814 36.4121 45.5284 35.8434 44.8129 35.1234C42.5449 32.8586 41.9996 29.5309 43.1617 26.7461L31.8242 15.4074L1.88672 45.343C-0.628906 47.8598 -0.628906 51.9383 1.88672 54.4531L45.5484 98.1125C48.0621 100.627 52.1395 100.627 54.6562 98.1125L98.1137 54.6559C100.629 52.1402 100.629 48.0594 98.1141 45.5449Z" fill="white"/>
</g>
</g>
</svg>
</div>
        </Box>
        </Container>
       </section>

       <section className='relative top-45 min-h-[50%]'>
       <Box sx={{background: "linear-gradient(80deg, rgba(255, 255, 250, 0.5), rgba(193, 116, 128, 0.9))", width: "14em", height: "3em", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: " 0 20px 20px 0", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}}>
       <p className='text-[1.5rem] text-white'>ABOUT ME</p></Box>

       <Container sx={{ background: "linear-gradient(132deg, rgba(253, 248, 246, 0.3), rgba(193, 116, 128, 0.9))", padding: "5em", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;", position: "relative", top: "3em",  [theme.breakpoints.down("lg")]: {
       padding: "2rem",
      
      }, }}>
        <p className='text-white'>I’m Kirsten, a designer and developer—where creativity meets logic. My journey started with being inspired from developers who crafted visually appealing and functional digital experiences. Whether it’s building complex user interfaces, optimizing performance, or bringing ideas to life with code, I thrive in the space where design and development come together.

With experience in WordPress, React, and front-end technologies, I focus on writing clean, scalable code while ensuring the user experience. But beyond the technical side, I also love refining aesthetics and creating products that people love to use. For me, development isn’t just about writing code—it’s about storytelling, innovation, and bringing the vision into life.</p>
       </Container>
       </section>

       <section className='relative top-90 min-h-[50%]'>
       <Box sx={{background: "linear-gradient(80deg, rgba(255, 255, 250, 0.5), rgba(193, 116, 128, 0.9))", width: "14em", height: "3em", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: " 0 20px 20px 0", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}}>
       <p className='text-[1.5rem] text-white'>CONTACT</p></Box>

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
            <p className='text-white'>kirstenashleym/vercel.com</p> 
          <div className='flex justify-center items-center relative bottom-2 max-sm:bottom-0'>
          <a href="https://www.linkedin.com/in/kirsten-ashley-magpantay-43079a212/"><LinkedInIcon sx={{ fontSize: "32px", color: "white" }}/></a>
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
