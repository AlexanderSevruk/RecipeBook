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
          <Button color="primary"> create </Button>
        </Link>
        <Link href="#/search" underline="none">
          <Button color="primary">search</Button>
        </Link>
        <Link href="#/archive" underline="none">
          <Button color="primary">archive</Button>
        </Link>
      </ButtonGroup>
    </Grid>
  );
}
