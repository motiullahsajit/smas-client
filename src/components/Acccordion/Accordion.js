import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Accordion.scss';
import Episode from '../Episode/Episode';

export default function SeasonsAccordion({ name, episodes }) {

  return (
    <Accordion className='accordion'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {
          episodes.map((e) => <Episode name={e.name} link={e.link} />)
        }
      </AccordionDetails>
    </Accordion>

  );
}
