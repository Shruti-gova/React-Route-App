import SettingsSideBar from "./Settings/SettingsSideBar"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SettingsUserManagement from "./Settings/SettingsUserManagement";
import SettingsInvoice from "./Settings/SettingsInvoice";
import SetteingsExport from "./Settings/SettingsExport";
import SetteingsDateAndCurrancy from "./Settings/SettingsDateAndCurrancy";
import { Routes, Route } from "react-router-dom";

export default function Settings() {
    return (
        <>
            <Box sx={{ p: 2, border: 1, m: 2, mt: 12, width: '100%', display: "flex" }}>
                <SettingsSideBar />
                <Divider orientation="vertical" />

                <Routes>
                    <Route exact path="/user" element={<SettingsUserManagement />} />
                    <Route exact path="/invoice" element={<SettingsInvoice />} />
                    <Route exact path="/export" element={<SetteingsExport />} />
                    <Route exact path="/date&currancy" element={<SetteingsDateAndCurrancy />} />

                </Routes>
            </Box>
        </>
    )
}