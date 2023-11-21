import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MathJax } from "better-react-mathjax";

export function AlGeneralInfo() {
  return (
    // <Accordion style={{ width: "100%" }}>
    //   <Accordion.Item eventKey="0">
    //     <Accordion.Header>Allgemeine Hinweise</Accordion.Header>
    //     <Accordion.Body className="p-0">
    //       <ListGroup as="ol">
    //         <ListGroup.Item
    //           as="li"
    //           className="d-flex justify-content-between align-items-start"
    //         >
    //           <div className="ms-2 me-auto">
    //             <div className="fw-bold">Aus Wendehorst 2017, S. 391 ff</div>
    //             <MathJax>
    //               Formal wird im EC 2 zwischen dem Bemessungswert der
    //               Verankerungslänge lbd und der sogenannten
    //               Ersatzverankerungslänge lb,eq unterschieden. Dies war bisher
    //               in Deutschland nicht üblich und ist aus Sicht des Verfassers
    //               auch nicht praxisgerecht. Daher wird an dieser Stelle die
    //               bisher auch übliche Berechnung mit der vom Ende der Biegeform
    //               gemessenen Verankerungslänge lb,eq empfohlen. Diese
    //               Vorgehensweise wird im EC 2 als „vereinfachte Alternative“
    //               bezeichnet. Die im EC 2 hier verwendeten Beiwerte{" "}
    //               {"\\( \\alpha_{1}\\)"} und {"\\( \\alpha_{2}\\)"} werden zum
    //               Beiwert&nbsp; {"\\( \\alpha_{a}\\)"} zusammengefasst und in
    //               Tafel 8.62 beschrieben. Die Ersatzverankerungslänge ist dem
    //               Bemessungswert {"\\(l_{bd}\\)"} äquivalent <br />
    //               <br />
    //               Im Folgenden wird die Ersatzverankerungslänge berechnet.
    //             </MathJax>
    //           </div>
    //         </ListGroup.Item>
    //       </ListGroup>
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>

    <Accordion data-testid="berechnungsansatz">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">Berechnungsansatz</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              paddingLeft: " 1rem",
              paddingBottom: "1rem",
              fontWeight: "Bold",
            }}
          >
            Aus Wendehorst 2017, S. 391 ff
          </Typography>
          <Typography sx={{ paddingLeft: "1rem" }}>
            <MathJax>
              Formal wird im EC 2 zwischen dem Bemessungswert der
              Verankerungslänge {"\\(l_{bd}\\)"} und der sogenannten
              Ersatzverankerungslänge {"\\(l_{b,eq}\\)"} unterschieden. Dies war
              bisher in Deutschland nicht üblich und ist aus Sicht des
              Verfassers auch nicht praxisgerecht. Daher wird an dieser Stelle
              die bisher auch übliche Berechnung mit der vom Ende der Biegeform
              gemessenen Verankerungslänge {"\\(l_{b,eq}\\)"} empfohlen. Diese
              Vorgehensweise wird im EC 2 als „vereinfachte Alternative“
              bezeichnet. Die im EC 2 hier verwendeten Beiwerte{" "}
              {"\\( \\alpha_{1}\\)"} und {"\\( \\alpha_{2}\\)"} werden zum
              Beiwert&nbsp; {"\\( \\alpha_{a}\\)"} zusammengefasst und in Tafel
              8.62 beschrieben. Die Ersatzverankerungslänge ist dem
              Bemessungswert {"\\(l_{bd}\\)"} äquivalent <br />
              <br />
              Im Folgenden wird die Ersatzverankerungslänge berechnet.
            </MathJax>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
