import { Container, CssBaseline, Box, Typography } from "@mui/material";
import { useState } from "react";

// import { AlGeneralInfo } from "./AlGeneralInfo";
// import { AlCalculationInfo } from "./AlCalculationInfo";
// import { AlForm } from "./AlForm";
// import { ImgAccordion } from "../../components/ImgAccordion";
// import { AlOutput } from "./AlOutput";

export function AnchorageLength() {
  const [data, setData] = useState({
    name: "",
    fck: 0,
    fctk005: 0,
    fctm: 0,
    verbund: "nicht definiert",
    fbd: 0,
    theta: 0,
    fyd: 0,
    lbrqd: 0,
    lbeq: 0,
    lbeqDir: 0,
    lbeqIndir: 0,
    lbmin: 0,
    lagerung: "",
    stab: "",
    alpha: 0,
    asErf: 0,
    asVorh: 0,
    calculated: false,
  });

  /**
   * set state from child component
   * @param {string} iptName name of calculation
   * @param {number} iptFck Festigkeitsklasse
   * @param {number} iptFctk005 5 % Quantil der Zugfestigkeit
   * @param {number} iptFctm Mittelwert der Zugfestigkeit
   * @param {string} iptVerbund Verbundbedingung
   * @param {number} iptFbd Bemessungswert der Verbundspannung
   * @param {number} iptFyd Bemessungswert der Streckgrenze
   * @param {number} iptLbrqd Grundwert der Verankeungslänge
   * @param {number} iptLbeq Erstazverankerungslänge
   * @param {string} iptLagerung Lagerungsart
   * @param {string} iptStab Stabart (Druck- oder Zugstab)
   */
  const setDataChild = (
    iptName,
    iptFck,
    iptFctk005,
    iptFctm,
    iptVerbund,
    iptFbd,
    iptFyd,
    iptLbrqd,
    iptLbeq,
    iptLagerung,
    iptStab,
    iptAlphaA,
    iptTheta,
    iptLbmin,
    iptLbeqDir,
    iptLbeqIndir,
    iptAsErf,
    iptAsVorh
  ) => {
    setData({
      ...data,
      name: iptName,
      fck: iptFck,
      fctk005: iptFctk005,
      fctm: iptFctm,
      verbund: iptVerbund,
      fbd: iptFbd,
      theta: iptTheta,
      fyd: iptFyd,
      lbrqd: iptLbrqd,
      lbeq: iptLbeq,
      lbeqDir: iptLbeqDir,
      lbeqIndir: iptLbeqIndir,
      lbmin: iptLbmin,
      lagerung: iptLagerung,
      stab: iptStab,
      alpha: iptAlphaA,
      asErf: iptAsErf,
      asVorh: iptAsVorh,
      calculated: true,
    });
  };

  return (
    <>
      <CssBaseline />{" "}
      <Container maxWidth="lg">
        {" "}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography
            sx={{ paddingBottom: "1.5rem" }}
            component="h3"
            variant="h3"
          >
            Ersatzverankerungslänge
          </Typography>{" "}
          {/* <div>
            {" "}
            <Berechnungsansatz />
            <Formeln />
            <Berechnung setDataChild={setDataChild} />
            <Berechnungsprotokoll data={data} />
          </div> */}
        </Box>
      </Container>
    </>
  );
}
