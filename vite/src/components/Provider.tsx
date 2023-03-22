import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "../utils/theme";

type Props = {
    children: JSX.Element | ReactNode;
};

const Provider = ({ children }: Props) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ReduxProvider store={store}>
                    <BrowserRouter>{children}</BrowserRouter>
                </ReduxProvider>
            </ThemeProvider>
        </>
    );
};

export default Provider;
