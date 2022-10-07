import ButtonAppBar from "./Sales/appbar";
import BasicCard from "./Sales/card";
import SimplePaper from "./Sales/paper";
import Menu from "./Sales/menu";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';

const StyledBox = styled(Box)({

    flexGrow: 1,
    backgroundColor: "background.default",
    padding: 24

})
export default function Sales() {
    return (
        <StyledBox>

            <Toolbar />
            <Menu />
            <BasicCard />
            <ButtonAppBar />
            <SimplePaper />
        </StyledBox >
    )
}