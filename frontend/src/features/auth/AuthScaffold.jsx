import { Typography } from "@mui/material"
import { Paper } from "@mui/material"

function AuthScaffold(props) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-mui-primary-lightAlt">
      <div className="w-[95%] md:w-[85%] max-w-fit xl:max-h-[50rem] my-24 sm:my-12 flex sm:flex-col xl:flex-row mx-auto overflow-hidden rounded-sm">
        <div className="xl:w-[42%] hidden sm:flex">
          <div className="w-full flex flex-col items-center justify-between gap-12 text-center p-9 bg-mui-secondary-main xl:rounded-s-lg">
            <div>
              <Typography
                variant="h4"
                className="font-semibold mb-2 text-white"
              >
                Start your journey.
              </Typography>
              <Typography variant="body2" className="text-white opacity-75">
                It brings together your tasks, projects, timelines, files and
                more
              </Typography>
            </div>
            <div className="px-20">
              <div className="w-[444px] h-[444px] lg:w-[396px] lg:h-[396px] rounded-full border border-[#e1ffe11a] my-5 relative flex items-center justify-center mx-auto">
                <div className="w-[396px] h-[396px] lg:w-[348px] lg:h-[348px] rounded-full border border-[#e1ffe11a] relative flex items-center justify-center mx-auto">
                  <div className="w-[348px] h-[348px] lg:w-[300px] lg:h-[300px] rounded-full border border-[#e1ffe11a] relative flex items-center justify-center mx-auto">
                    <div className="w-[300px] h-[300px] lg:w-[252px] lg:h-[252px] rounded-full border border-[#e1ffe11a] relative flex items-center justify-center mx-auto">
                      <Typography variant="h5" className="text-white">
                        Welcome to{" "}
                        <span className="text-mui-primary-main">Steex</span>
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Typography variant="body2" className="text-white opacity-75">
              2023 Steex.
            </Typography>
          </div>
        </div>
        <Paper className="w-full xl:w-[58%] min-h-[33rem] flex flex-col items-center justify-center text-center px-2 sm:px-4 sm:py-12 xl:p-0">
          <div className="w-full sm:max-w-3xl xl:max-w-md py-6">
            {props.children}
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default AuthScaffold
