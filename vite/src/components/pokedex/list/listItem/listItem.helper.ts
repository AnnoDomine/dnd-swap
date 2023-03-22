const handleOnClick = (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>, onClick: () => void) => {
    onClick();
};

const listItemHelper = { handleOnClick };

export default listItemHelper;
