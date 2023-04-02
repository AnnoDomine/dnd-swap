import { Skeleton } from "@mui/material";

import Button from "../../../common/button/Button";

import listItemHelper from "./listItem.helper";

type Props = {
    name: string;
    onClick: () => void;
};

const ListItem = ({ name, onClick }: Props) => (
        <Button disabled={name === "loading"} onClick={(e) => listItemHelper.handleOnClick(e, onClick)}>
            {name === "loading" ? (
                <Skeleton width={"100%"} sx={{ fontSize: "16px" }} />
            ) : (
                name.charAt(0).toUpperCase() + name.slice(1)
            )}
        </Button>
    );

export default ListItem;
