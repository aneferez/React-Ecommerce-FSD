import { Grid, Card, CardContent, Typography, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import Data from "../../data/Data.json";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Button from '@mui/material/Button';



const Dashboard = () => {
  return (
    <>
      <Container maxwidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          Welcome to the Spooky Headset
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {Data.map((result, index) => (
            <Grid item xs={12} sm={4} ms={4} key={index}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{ padding: "10px", marginbottom: "30px" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={result.img}
                    alt="img"
                    style={{ borderRadius: "5px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Headset
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                    Immerse yourself in sound with the ultimate headset experience.                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" size="medium">
                    Add to cart
                  </Button>
                  </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default Dashboard;
