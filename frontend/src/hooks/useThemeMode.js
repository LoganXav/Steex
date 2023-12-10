import { useSelector, useDispatch } from "react-redux";
import { toggleThemeModeAction } from "configs/StoreSliceConfig";

function useThemeMode() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.global.themeMode);

  function toggleThemeMode(payload) {
    dispatch(toggleThemeModeAction(payload));
  }

  return [themeMode, toggleThemeMode];
}

export default useThemeMode;
