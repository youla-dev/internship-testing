import StopWatch from "./components/StopWatch";
import { styled } from "@mui/material/styles";

function App() {
    const AppWrapper = styled("div")(() => ({
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }));

    return (
        <AppWrapper>
            <StopWatch />
        </AppWrapper>
    );
}

export default App;
