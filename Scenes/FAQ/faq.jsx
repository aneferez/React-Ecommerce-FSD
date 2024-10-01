import { Box,useTheme,Typography } from "@mui/material";
import Header from "../../Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { tokens } from "../../../theme";
const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
  
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Can I ship the products to an address that is different from my billing address?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes, Your shipping address can be different from the billing address.
            </Typography>
          </AccordionDetails>
          </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
            How does the delivery process work?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
            We dispatch all of our orders within 72 hours of receiving the order. We deliver the products throughout the world using our logistic partners DHL, BlueDart, India Post, and Delivery 5-15 working days as per customer geography location
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              How Can I Get GST of My Purchases?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To Get GST of your products, Please contact us on Chat Us, Whatsapp or Call on Customer Care Number on 123456789between 9:00 am to 6:00 pm ( Mon - Sat ). We will share your GST on Registered Email Address
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Tracking ID Shared but No Details of Delivery Displayed in Tracking Portal?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Delivery Details Start Displaying after 24 Hours of Dispatching, Please wait and refresh after 18-24 hours after receiving Tracking ID Detail
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
            What to do if you receive a damaged, defective or wrong product?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            If you are not happy with the product quality, you can return or replace the product. Please Note:
            You can return any item that is eligible for return and its return window has not expired. Visit Returns Policy to Learn more.
            Replacement or exchange of products is based on availability of products.
            There are different processes of return and replacement for products fulfilled by Amazon and products fulfilled by third-party (Marketplace) sellers.
            Check the product detail page to know about the seller of the product.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  };
  
  export default FAQ;