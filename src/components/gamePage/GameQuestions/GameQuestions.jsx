import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid #545b63`,
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  "&:before": {
    display: "none",
  },
  color: "#fff",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "1.3rem" }}
        sx={{ color: "#fff" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(16, 25, 36)" : "rgba(16, 25, 36)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#101924",
}));

function GameQuestions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="gameQuestions wrapper">
      <h1>FREQUENTLY ASKED QUESTIONS?</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontSize: "1.5rem" }}>More about Game</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1.5rem" }}>
            The only aim in Rust is to survive. Everything wants you to die -
            the island’s wildlife and other inhabitants, the environment, other
            survivors. Do whatever it takes to last another night.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ fontSize: "1.5rem" }}>
            Where can i download the game?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1.5rem" }}>
            You should log in to Steam in order to download the game and play.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ fontSize: "1.5rem" }}>
            Where can i buy it?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1.5rem" }}>
            List of official stores you can buy Rust: Steam
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{ fontSize: "1.5rem" }}>
            How many GB is this game?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1.5rem" }}>
            This game is approximately 20 GB. However, it is recommended to have
            a bit more than 20 GB on your disk space in case of an insufficient
            storage problem.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography sx={{ fontSize: "1.5rem" }}>
            What is the MetaCritic score if this game?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1.5rem" }}>
            This Game has an overall Metacritic score of 69. But Rust might not
            be such a good or bad game. We recommend you to read some reviews
            and watch gameplay clips on Twitch.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography sx={{ fontSize: "1.5rem" }}>
            What is the age rating for This Game?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1.5rem" }}>
            This game has an age rating of 17+. Some countries may suggest
            different age ratings. For more information on age ratings, please
            see: wiki.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography sx={{ fontSize: "1.5rem" }}>
            What is the language support for This Game?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1.5rem" }}>
            Supported languages are as follows: English, French, Italian,
            German, Spanish - Spain, Japanese, Korean, Russian, Simplified
            Chinese, Ukrainian, Polish, Turkish, Arabic, Czech, Danish, Dutch,
            Finnish, Greek, Norwegian, Portuguese - Brazil, Spanish - Latin
            America, Swedish, Traditional Chinese, Vietnamese, Portuguese -
            Portugal
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography sx={{ fontSize: "1.5rem" }}>
            Is there multiplayer in This Game?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "1.5rem" }}>
            Yes, it supports multiplayer mode.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default GameQuestions;
