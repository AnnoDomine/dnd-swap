import { ThemeProvider } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";

import store from "../redux/store";
import theme from "../utils/theme";

import type { ReactNode } from "react";

type Props = {
    children: JSX.Element | ReactNode;
};

const Provider = ({ children }: Props) => (
    <>
        <ThemeProvider theme={theme}>
            <ReduxProvider store={store}>{children}</ReduxProvider>
        </ThemeProvider>
    </>
);

export default Provider;
