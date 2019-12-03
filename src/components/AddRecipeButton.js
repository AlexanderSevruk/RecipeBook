import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3)
  }
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddCircleIcon />}
      >
        Add recipe
      </Button>
    </div>
  );
}
