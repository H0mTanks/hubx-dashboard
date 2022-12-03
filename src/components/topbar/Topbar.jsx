import { Button } from "@material-ui/core";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import { PopUp } from "../popUp/popUp";

import React, { useState } from "react";
import "./topbar.css";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">HUBX SUBMISSION</span>
          <Button variant="contained" onClick={handleOpen}>
            Invite
          </Button>
          <PopUp open={open} handleClose={handleClose} />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/fd69a733850498.56ba69ac2f221.png"
            alt="avatar"
            className="topAvater"
          />
        </div>
      </div>
    </div>
  );
}
