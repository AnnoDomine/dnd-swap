import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../redux/appStore";
import type { TypedUseSelectorHook} from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
