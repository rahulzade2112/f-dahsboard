import React from "react";
import { Box, FormControl, InputLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export default function Change() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          border: "1px solid #efefef",
          backgroundColor: "white",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>Change Password</h3>

        <FormControl sx={{ m: 1, width: "25ch", fontSize: "25px" }}>
          <InputLabel   style={{ fontSize: "15px" }}
          htmlFor="outlined-adornment-password">
            Current Password
          </InputLabel>
          <OutlinedInput
          style={{  fontSize: "14px" }}

            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "25ch",fontSize: "25px" }}>
          <InputLabel
            style={{ fontSize: "15px" }}
            htmlFor="outlined-adornment-password"
          >
            New Password
          </InputLabel>
          <OutlinedInput      
                 style={{  fontSize: "medium" }}

            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "25ch",  fontSize: "25px",fontWeight:"500"}}>
          <InputLabel style={{fontSize: "15px"}} htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput  
          style={{  fontSize: "medium" }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
    </div>
  );
}
