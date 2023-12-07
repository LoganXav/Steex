import { lazy } from "react";
import { IconButton } from "@mui/material";
import { SnackbarProvider } from "notistack";
import AppThemeProvider from "./AppThemeProvider";
import { notistackRef } from "./constants/RefConstants";
// import useLoadingModal from "hooks/useLoadingModal";
import useAuthUser from "./hooks/useAuthUser";
// import LoadingModal from "common/LoadingModal";
import Suspense from "common/Suspense";
import { Iconly } from "react-iconly";

function App() {
  // const { isLoadingModal } = useLoadingModal();

  const authUser = useAuthUser();

  return (
    <AppThemeProvider>
      <SnackbarProvider
        ref={notistackRef}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        preventDuplicate
        action={(key) => (
          <IconButton
            onClick={() => {
              notistackRef.current.closeSnackbar(key);
            }}
            color="inherit"
            size="small"
          >
            <Iconly type="small" name="ChevronDown" />
          </IconButton>
        )}
      >
        <Suspense>
          {/* {authUser?.base64EncodedAuthenticationKey ? ( */}
          {authUser ? <AppProtected /> : <AppPublic />}
        </Suspense>
      </SnackbarProvider>
      {/* <LoadingModal open={isLoadingModal} /> */}
    </AppThemeProvider>
  );
}

export default App;

const AppPublic = lazy(() => import("./AppPublic"));
const AppProtected = lazy(() => import("./AppProtected"));
