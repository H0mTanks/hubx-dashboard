import { Modal, Box, Typography, Slider, Grid, Input } from "@material-ui/core";
import { useState } from "react";
import { Chart, Tooltip, Legend, ArcElement, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(Tooltip, Legend, ArcElement, Title);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export function PopUp({ open, handleClose }) {
  const [inviteValue, setInviteValue] = useState(30);
  const [durationValue, setDurationValue] = useState(1);
  const data = {
    datasets: [
      {
        data: [inviteValue * 20, durationValue * 100],
        backgroundColor: ["green", "red"],
      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Money Regained", "Money Invested"],
  };

  const handleInviteSliderChange = (event, newValue) => {
    setInviteValue(newValue);
  };

  const handleInviteInputChange = (event) => {
    setInviteValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleInviteBlur = () => {
    if (inviteValue < 0) {
      setInviteValue(0);
    } else if (inviteValue > 100) {
      setInviteValue(100);
    }
  };

  const handleDurationSliderChange = (event, newValue) => {
    setDurationValue(newValue);
  };

  const handleDurationInputChange = (event) => {
    setDurationValue(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleDurationBlur = () => {
    if (durationValue < 1) {
      setDurationValue(1);
    } else if (durationValue > 24) {
      setDurationValue(24);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modalBox">
        <Typography id="invite-slider" gutterBottom>
          No.of Invites
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={inviteValue}
              onChange={handleInviteSliderChange}
              aria-labelledby="invite-slider"
            />
          </Grid>
          <Grid item>
            <Input
              value={inviteValue}
              size="small"
              onChange={handleInviteInputChange}
              onBlur={handleInviteBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "invite-slider",
              }}
            />
          </Grid>
        </Grid>
        <Typography id="duration-slider" gutterBottom>
          Duration Of Event (Hrs)
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={durationValue}
              onChange={handleDurationSliderChange}
              aria-labelledby="duration-slider"
              min={1}
              max={24}
              step={1}
            />
          </Grid>
          <Grid item>
            <Input
              value={durationValue}
              size="small"
              onChange={handleDurationInputChange}
              onBlur={handleDurationBlur}
              inputProps={{
                step: 1,
                min: 1,
                max: 24,
                type: "number",
                "aria-labelledby": "duration-slider",
              }}
            />
          </Grid>
        </Grid>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Cost of Event per hour: Rs 100
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Selling price of single invite: Rs 5
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Money Invested = (Cost of Event/hr x Duration)
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Money Regained = (Price of Invite x No.of Invites)
        </Typography>
        <div
          className="chart-container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div
            className="doughnut"
            style={{
              width: "50%",
              height: "50%",
            }}
          >
            <Doughnut data={data} />
          </div>
          <Typography variant="h5">
            Money Invested: {durationValue * 100}
          </Typography>
          <Typography variant="h5">
            Money Regained: {inviteValue * 20}
          </Typography>
        </div>
      </Box>
    </Modal>
  );
}
