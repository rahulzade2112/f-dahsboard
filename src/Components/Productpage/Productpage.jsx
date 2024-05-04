import React from "react";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CardActionArea } from "@mui/material";
import "./productpage.css"
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const Productpage = () => { 
   const arr=[25,5,45,45,45,45,45,45,45,45,4];

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>  
    <div className="productcard-container">
      { arr.map((elem) => (
    
      
      <Card
        raised
        sx={{
          maxWidth: 255,
          padding: "0.1em",
          marginLeft:"30px",marginTop:"30px"
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="194"
            style={{ backgroundColor: "white" }}
            image="https://imgs.search.brave.com/qPNS5FuMcvEyB2Xrgv9gCwm6rstpMhvu3mFzNYZP6sw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vaUthVFVS/elJPUTdwZVZmN3Zt/Ynp1LXlwWjNDZ0Y4/TTZqQjZUVlpCSjAw/VS9yczpmaXQ6NTAw/OjA6MC9nOmNlL2FI/UjBjSE02THk5d2Jt/Y3UvY0c1bmRISmxa/UzVqYjIwdi9jRzVu/TFdOc2FYQmhjblF2/L01qQXlNekEwTWpj/dmIzVnkvYldsa0wz/QnVaM1J5WldVdC9h/WE52YkdGMFpXUXRk/MmhwL2RHVXRkQzF6/YUdseWRDMXYvYmkx/aVlXTnJaM0p2ZFc1/ay9MWEJ1WnkxcGJX/Rm5aVjgyL056TTJO/alEwTG5CdVp3.jpeg"
            alt="Paella dish"
          />
        </CardActionArea>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon   />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
          </CardContent>
        </Collapse>
     </Card> 
    ))}    
     </div>

    </>
  );
};

export default Productpage;
