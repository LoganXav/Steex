import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import { RouteEnum } from "constants/RouterConstants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0} className="bg-white shadow-sm">
        <Container maxWidth="lg">
          <Toolbar className="flex justify-between">
            <Typography fontWeight={700} variant="h6" color="primary" component={Link} to="/" style={{ textDecoration: "none" }}>
              GraceLife Church
            </Typography>
            <Box className="flex gap-4">
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/giving">
                Giving
              </Button>
              <Button color="inherit" component={Link} to="/baptism">
                Baptism
              </Button>
              <Button color="inherit" component={Link} to="/shop">
                Shop
              </Button>
              <Button color="inherit" component={Link} to={RouteEnum.SIGNIN}>
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        className="relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <Box className="absolute inset-0 bg-black opacity-50"></Box>
        <Container maxWidth="md" className="relative z-10 text-center text-white">
          <Typography variant="h2" className="font-bold mb-4 text-white">
            Welcome to GraceLife Church
          </Typography>
          <Typography variant="h5" className="mb-6 text-white">
            A Place of Grace, Hope, and Transformation
          </Typography>
          <div className="grid md:grid-cols-2 gap-4 md:w-1/2 mx-auto">
            <Button variant="outlined" color="info" size="large" className="w-full text-white border-white text-lg">
              Learn More
            </Button>
            <Button variant="outlined" color="info" size="large" className="w-full text-white border-white text-lg">
              Plan Your Visit
            </Button>
          </div>
        </Container>
      </Box>

      {/* Footer */}
      <Box className="bg-gray-900 py-8">
        <Container maxWidth="lg" className="text-center">
          <Typography variant="body2" className="text-white">
            © {new Date().getFullYear()} GraceLife Church. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Home;
