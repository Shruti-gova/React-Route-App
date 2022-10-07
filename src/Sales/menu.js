import * as React from "react";
import Box from "@mui/material/Box";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
const StyledMenu = styled(Box)({
  '& .MuiBox-root': {
    display: "flex",
    justifyContent: "space-between"
  },
  '& .MuiTypography-root': {
    minWidth: 100
  }

});
export default function Menu() {
  return (
    <React.Fragment>
      <StyledMenu>
        <Box>
          <Typography variant="h5" >
            Invoices
          </Typography>
          <Typography >
            <CardGiftcardIcon color="success" />
            What's new
          </Typography>
        </Box>
      </StyledMenu>
    </React.Fragment >
  );
}
