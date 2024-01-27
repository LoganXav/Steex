import { lazy } from "react"
import { IconButton } from "@mui/material"
import { SnackbarProvider } from "notistack"
import AppThemeProvider from "./AppThemeProvider"
import { notistackRef } from "constants/RefConstants"
import useAuthUser from "hooks/useAuthUser"
import Suspense from "common/Suspense"

function App() {
  const authUser = useAuthUser()

  return (
    <AppThemeProvider>
      <SnackbarProvider
        ref={notistackRef}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        preventDuplicate
        action={(key) => (
          <IconButton
            onClick={() => {
              notistackRef.current.closeSnackbar(key)
            }}
            color="inherit"
            size="small"
          ></IconButton>
        )}
      >
        <Suspense>{authUser ? <AppProtected /> : <AppPublic />}</Suspense>
      </SnackbarProvider>
    </AppThemeProvider>
  )
}

export default App

const AppPublic = lazy(() => import("./AppPublic"))
const AppProtected = lazy(() => import("./AppProtected"))
