import { Skeleton } from "@mui/material";
import listItemHelper from "./listItem.helper";
import Button from "../../../common/button/Button";

type Props = {
    name: string;
    onClick: () => void;
};

const ListItem = ({ name, onClick }: Props) => {
    return (
        <Button disabled={name === "loading"} onClick={(e) => listItemHelper.handleOnClick(e, onClick)}>
            {name === "loading" ? (
                <Skeleton width={"100%"} sx={{ fontSize: "16px" }} />
            ) : (
                name.charAt(0).toUpperCase() + name.slice(1)
            )}
        </Button>
    );
};

export default ListItem;
