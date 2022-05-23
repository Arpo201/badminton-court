//import component
import { Card } from "react-bootstrap";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useState } from "react";

//styles
const bg = {
  width: "100%",
  background: "rgb(245,126,68)",
  background:
    "linear-gradient(180deg, rgba(245,126,68,1) 0%, rgba(254,241,224,1) 80%, rgba(255,255,255,1) 100%)",
  padding: "15px",
};

const ShowRegisterpage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const [studentId, setId] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div class="container-fluid" style={bg}>
      <Container fluid>
        <Card body /* style={{ margin: "15px" }} */>
          <h2>Register form</h2>
          <Box component="form" sx={{ maxWidth: "100%", margin: "10px" }}>
            <Box sx={{ margin: "10px" }}>
              <label style={{ color: "red" }}>
                *กรุณากรอกรายละเอียดข้อมูลด้านล่าง
              </label>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="ชื่อ"
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="fullWidth"
                  label="นามสกุล"
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  margin="normal"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="รหัสผ่าน"
                  variant="outlined"
                  type="password"
                  style={{ width: "100%" }}
                  required
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="fullWidth"
                  label="ยืนยันรหัสผ่าน"
                  type="password"
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  margin="normal"
                  value={confirmPass}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="รหัสนักศึกษา"
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  margin="normal"
                  value={studentId}
                  onChange={(e) => setId(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>กฏการใช้สนาม</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    color="success"
                    onChange={(e) => {
                      setChecked(e.target.checked);
                      console.log(checked);
                    }}
                  />
                }
                label="ข้าพเจ้าได้อ่านกฏและยืนยันจะปฏิบัติตามกฏ"
              />
            </FormGroup>
          </Box>
          <Box>
          <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={4}>
            <Button variant="contained" color="success" style={{fontSize: "20px"}}>
              ยืนยัน
            </Button>
            </Grid>
            </Grid>
            
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default ShowRegisterpage;
