import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "@material-ui/core";

export default function BottomNav() {
  return (
    <Grid className="button__group">
      <ButtonGroup size="large" aria-label="large contained button group">
        <Link href="#" underline="none">
          <Button
            style={{
              color: "#28262C",
              fontWeight: "bold"
            }}
          >
            {" "}
            create{" "}
          </Button>
        </Link>
        <Link href="#/search" underline="none">
          <Button
            style={{
              color: "#28262C",
              fontWeight: "bold"
            }}
          >
            search
          </Button>
        </Link>
        <Link href="#/archive" underline="none">
          <Button
            style={{
              color: "#28262C",
              fontWeight: "bold"
            }}
          >
            archive
          </Button>
        </Link>
      </ButtonGroup>
    </Grid>
  );
}
